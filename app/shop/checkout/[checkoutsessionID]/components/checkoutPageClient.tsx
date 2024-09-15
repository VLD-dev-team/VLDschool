"use client";

import Stripe from "stripe";
import ProductInfo from "../../../buy/[productID]/components/productInfo";
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(`pk_test_51O2qanA2TkLTbHDPyewZCfg8AwzOmJIYIY7KTZUF3L1cVUUao8zLnqiJVxT9imbgz5LdzZbWmaVYuVuBUacQtwGL00HQBN8wIb`);
console.log(process.env.STRIPEPUBLICKEY);

export default function CheckoutPageClient({ clientSecret }: { clientSecret: string | null }) {
    return (
        <div className="md:py-10 h-full">
            <div className="h-full grid place-items-center grid-cols-1 bg-white rounded-xl md:overflow-scroll shadow-2xl">
                <EmbeddedCheckoutProvider
                    stripe={stripePromise}
                    options={
                        {
                            clientSecret: clientSecret
                        }
                    }
                >
                    <div className=" w-full">
                        <EmbeddedCheckout />
                    </div>
                </EmbeddedCheckoutProvider>
            </div>
        </div>
    )
}