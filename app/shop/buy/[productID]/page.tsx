import { auth } from "@/auth"
import { stripe } from "@/stripe";
import Stripe from "stripe";
import BuyPageClient from "./components/buyPage";
import executeQuery from "@/db";

export default async function BuyPage({ params }: { params: { productID: string } }) {

    // On obtient la session 
    const session = await auth();

    // On optient les données du produit en paramètre de l'url depuis stripe
    let product: Stripe.Product | null = await stripe.products.retrieve(params.productID); // Si pas trouvé, l'erreur est renvoyé
    const productPrice: Stripe.Price = await stripe.prices.retrieve(`${product.default_price}`); // Si pas trouvé, l'erreur est renvoyé
    if (productPrice.unit_amount != null) {
        product.default_price = `${productPrice.unit_amount / 100}`
    }

    // On prépapre et on obtient le produit VLDplus si il existe pour le cours
    let productOptionVLDplus: Stripe.Product | null = null;
    if (product.metadata.vldplus != null) {
        productOptionVLDplus = await stripe.products.retrieve(product.metadata.vldplus); // Si pas trouvé malgrès l'ID dans les metadata, l'erreur est renvoyé
        const productVLDplusPrice: Stripe.Price = await stripe.prices.retrieve(`${productOptionVLDplus.default_price}`); // Si pas trouvé, l'erreur est renvoyé
        if (productVLDplusPrice.unit_amount != null) {
            productOptionVLDplus.default_price = `${productVLDplusPrice.unit_amount / 100}`
        }
    }

    // Si l'utilisateur est connecté on effectue les vérifications
    if (session) {
        const results = await executeQuery(`SELECT "stripeItemID" FROM courseregistrations WHERE "studentID" = $1 AND "stripeItemID" = $2 ;`, [session.user.id ?? "x", product.id]);

        // Si erreur lors de la requette sql on renvoi 500
        if (results == null || results.rowCount == null) {
            throw new Error("Erreur innatendue du serveur.")
        }

        // Si le cours à déjà été acheté, on renvoi l'erreur
        if (results.rowCount > 0) {   
            throw new Error("Vous possèdez déjà ce cours.")
        }
    }

    return (
        <BuyPageClient product={product} session={session} productOptionVLDplus={productOptionVLDplus}></BuyPageClient>
    )
}