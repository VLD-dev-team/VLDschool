import fulfill_session from "@/app/services/checkoutSession/fulfill_session";
import { auth } from "@/auth";
import { DatabaseService } from "@/db";
import { stripe } from "@/stripe";
import Stripe from "stripe";

export default async function ReturnPage({ params }: { params: { checkoutsessionID: string } }) {

    // Obtention de la session stripe
    const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.retrieve(params.checkoutsessionID);

    // Vérification que la session de paiement à bien été intenté par l'utilisateur connecté
    const session = await auth();
    const db = new DatabaseService();

    const results = await db.executeQuery('SELECT id FROM users WHERE "stripeCustomerID" = $1 ;', [`${checkoutSession.customer}`]);
    console.log(results.rows, checkoutSession.customer);

    if (results.rows[0].id != session?.user.id) {
        throw { message: "Une erreur est survenue" };
    }

    // Vérification que le paiement est bien terminé et affectation des produits
    if (checkoutSession.payment_status == "unpaid") {
        throw new Error("Paiement non terminé")
    }

    await fulfill_session(checkoutSession.id);

    return (
        <div>Cours attribués</div>
    )
}


