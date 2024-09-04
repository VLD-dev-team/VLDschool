import AuthForm from "@/app/auth/components/AuthForm";
import { auth } from "@/auth"
import { DatabaseService } from "@/db";
import { stripe } from "@/stripe";
import { redirect } from "next/navigation";
import Stripe from "stripe";

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
        <div>
            <ProductInfo></ProductInfo>
            <AuthForm></AuthForm>
        </div>
    )
}

function ProductInfo() {
    return (
        <div></div>
    )
}