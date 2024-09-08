import { auth } from "@/auth"
import { DatabaseService } from "@/db";
import { stripe } from "@/stripe";
import Stripe from "stripe";
import ProductInfo from "./components/productInfo";
import AuthCheck from "./components/AuthCheck";

export default async function BuyPage({ params }: { params: { productID: string } }) {

    const session = await auth();
    let error: null | { message: string, type: string } = null;

    if (session) {
        const db = new DatabaseService();
        const results = await db.executeQuery(`SELECT "stripeItemID" FROM courseregistrations WHERE "studentID" = $1 ;`, [session.user.id ?? ""]);

        if (results == null || results.rowCount == null) {
            error = {
                message: 'Erreur innatendue du serveur',
                type: 'server_error'
            }
        }

        if (results.rowCount! > 0) {
            error = {
                message: 'Vous possèdez déjà ce cours',
                type: 'already_owned'
            }
        }
    }

    const product: Stripe.Product | null = await stripe.products.retrieve(params.productID);


    return (
        <div className="flex gap-5 py-10">
            <div className="basis-1/3">
                <ProductInfo product={product}></ProductInfo>
                <p className="mt-5 text-sm">Votre formation sera disponible immédiatement après votre achat. Veuillez compléter les étapes et choisir vos options pour accéder à votre achat.</p>
                <p className="mt-5 text-sm text-[var(--neutral-dim)]">Déclaration de confidentialité - Condition d'utilisation - Politique de remboursement</p>
            </div>
            <div className="basis-2/3">
                <AuthCheck productID={product.id}></AuthCheck>
            </div>
        </div>
    )
}