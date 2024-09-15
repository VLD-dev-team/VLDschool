"use client";

import Stripe from "stripe";
import ProductInfo from "../../../buy/[productID]/components/productInfo";
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(`pk_test_51O2qanA2TkLTbHDPyewZCfg8AwzOmJIYIY7KTZUF3L1cVUUao8zLnqiJVxT9imbgz5LdzZbWmaVYuVuBUacQtwGL00HQBN8wIb`);
console.log(process.env.STRIPEPUBLICKEY);

export default function CheckoutPageClient({ product, optionnalProduct, isVLDplusSelected, clientSecret }: { product: Stripe.Product, optionnalProduct: Stripe.Product | null, isVLDplusSelected: boolean, clientSecret: string | null }) {
    return (
        <div className="py-10">
            {/* <div className="basis-1/3">
                <ProductInfo product={product} vldplusoption={optionnalProduct} isVLDplusSelected={isVLDplusSelected}></ProductInfo>
                <p className="mt-5 text-sm">Votre formation sera disponible immédiatement après votre achat. Veuillez compléter les étapes et choisir vos options pour accéder à votre achat.</p>
                <p className="text-sm text-[var(--neutral-dim)] hidden mt-5 md:block">Déclaration de confidentialité - Condition d'utilisation - Politique de remboursement</p>
            </div> */}

            <div /* className="basis-2/3 flex flex-col gap-5 mt-5 md:mt-0" */>
                <EmbeddedCheckoutProvider
                    stripe={stripePromise}
                    options={
                        {
                            clientSecret: clientSecret
                        }
                    }
                >
                    <div className="rounded-xl overflow-hidden">
                        <EmbeddedCheckout />
                    </div>
                </EmbeddedCheckoutProvider>
            </div>
        </div>
    )
}