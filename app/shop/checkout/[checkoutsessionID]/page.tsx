import { stripe } from "@/stripe";
import CheckoutPageClient from "./components/checkoutPageClient";
import Stripe from "stripe";

export default async function checkoutPage({ params }: { params: { checkoutsessionID: string } }) {

    const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.retrieve(params.checkoutsessionID);
    const line_items = await stripe.checkout.sessions.listLineItems(checkoutSession.id);
    
    const product = await stripe.products.retrieve(`${line_items.data[0].price?.product}`);
    const productPrice: Stripe.Price = await stripe.prices.retrieve(`${product.default_price}`);
    if (productPrice.unit_amount != null) {
        product.default_price = `${productPrice.unit_amount / 100}`
    }

    let optionnalProduct = null;
    if (line_items.data.length == 2) {
        optionnalProduct = await stripe.products.retrieve(`${line_items.data[1].price?.product}`);
        const productVLDplusPrice: Stripe.Price = await stripe.prices.retrieve(`${optionnalProduct.default_price}`); // Si pas trouvé, l'erreur est renvoyé
        if (productVLDplusPrice.unit_amount != null) {
            optionnalProduct.default_price = `${productVLDplusPrice.unit_amount / 100}`
        }
    }

    return (
        <CheckoutPageClient product={product} optionnalProduct={optionnalProduct} isVLDplusSelected={(optionnalProduct != null)} clientSecret={checkoutSession.client_secret}></CheckoutPageClient>
    )
}