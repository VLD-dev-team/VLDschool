import { stripe } from "@/stripe";
import Stripe from "stripe";

export default async function ProductInfo({ product }: { product: Stripe.Product }) {
    let price: null | string = null;

    if (product.default_price != null) {
        const stripeRetrievedPrice: Stripe.Price = await stripe.prices.retrieve(product.default_price.toString());
        if (stripeRetrievedPrice.active && stripeRetrievedPrice.unit_amount != null) {
            price = `${stripeRetrievedPrice.unit_amount / 100}€`
        }
    }

    return (
        <div className="bg-[var(--surface)] rounded drop-shadow-lg p-5">

            <div className="flex items-center gap-2 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                    <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                </svg>
                <h1 className="text-xl">Votre panier</h1>
            </div>

            <table className="">
                <thead>
                    <tr>
                        <th className="text-left uppercase text-xs pb-2">Produit</th>
                        <th className="text-right uppercase text-xs pb-2">Prix</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="pb-2">
                        <td className="flex items-start gap-4">
                            <div className="flex items-center justify-center shrink-0 pt-2">
                                <img className="size-8" src={product.metadata.icon} alt="" />
                            </div>
                            <div>
                                <p className="normal-case font-semibold text-lg">{product.name}</p>
                                <p className="text-sm">{product.description}</p>
                            </div>
                        </td>
                        <td className="align-top">
                            <p className="text-right text-lg">{price ?? "Indisponible"}</p>
                        </td>
                    </tr>

                    <tr className="">
                        <th className="text-right text-lg uppercase pt-4">Total</th>
                        <th className="text-right text-lg uppercase pt-4">0€</th>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}