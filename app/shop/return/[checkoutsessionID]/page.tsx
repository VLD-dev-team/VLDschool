import fulfill_session from "@/app/services/checkoutSession/fulfill_session";
import { auth } from "@/auth";
import executeQuery from "@/db";
import { stripe } from "@/stripe";
import Stripe from "stripe";

export default async function ReturnPage({ params }: { params: { checkoutsessionID: string } }) {

    // Obtention de la session stripe
    const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.retrieve(params.checkoutsessionID);

    // Vérification que la session de paiement à bien été intenté par l'utilisateur connecté
    const session = await auth();

    const results = await executeQuery('SELECT id FROM users WHERE "stripeCustomerID" = $1 ;', [`${checkoutSession.customer}`]);
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
        <div className="grid place-items-center h-full">
            <div className="flex flex-col items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="var(--neutral)" viewBox="0 0 256 256" className="size-16"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                <p className="text-xl font-bold">Merci de votre achat !</p>
                <p className="mb-10 uppercase text-sm">Paiement accepté</p>
                <p className="text-lg">Vous pouvez désormais profiter de votre formation personnalisé depuis le dashboard !</p>
                <p className="mb-10">Un email de confirmation va être envoyé à {session?.user.email ?? "votre adresse email."}</p>
                <a href="/dashboard" className="flex items-center justify-center gap-2 rounded bg-[var(--primary)] px-7 py-4 hover:bg-[var(--primary-hover)] transition-colors">
                    <p>Accéder au dashboard</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    )
}


