import { stripe } from "@/stripe";
import CheckoutPageClient from "./components/checkoutPageClient";
import Stripe from "stripe";
import { auth } from "@/auth";
import executeQuery from "@/db";

export default async function checkoutPage({ params }: { params: { checkoutsessionID: string } }) {

    // Obtention de la session stripe
    const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.retrieve(params.checkoutsessionID);

    // Vérification que la session de paiement à bien été intenté par l'utilisateur connecté
    const session = await auth();

    const results = await executeQuery('SELECT id FROM users WHERE "stripeCustomerID" = $1 ;', [`${checkoutSession.customer}`]);
    console.log(results.rows, checkoutSession.customer);
    
    if (results.rows[0].id != session?.user.id) {
        throw new Error("Une erreur est survenue lors de la procédure d'achat.");
    }
    
    // On passe le client secret au composant client pour qu'il puisse afficher le stripe embedded
    return (
        <CheckoutPageClient clientSecret={checkoutSession.client_secret}></CheckoutPageClient>
    )
    
}