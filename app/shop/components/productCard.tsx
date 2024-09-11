import { stripe } from "@/stripe";
import Stripe from "stripe";
import FeatureDisplay from "./featureDisplay";

export default async function ProductCard({ product }: {
    product: Stripe.Product
}) {
    let price: null | string = null;

    if (product.default_price != null) {
        const stripeRetrievedPrice: Stripe.Price = await stripe.prices.retrieve(product.default_price.toString());
        if (stripeRetrievedPrice.active && stripeRetrievedPrice.unit_amount != null) {
            price = `${stripeRetrievedPrice.unit_amount / 100}€`
        }
    }

    return (
        <div className="bg-[var(--surface)] flex flex-col md:flex-row rounded drop-shadow-lg">
            <div className="flex basis-20 md:basis-1/3 bg-[url(https://school.vld-group.com/image/PythonV3.png)] bg-cover rounded-t md:rounded-s"></div>
            <div className="p-5 md:basis-2/3">
                <div className="flex items-center gap-4">
                    <div className="border-2 border-[var(--neutral)] rounded-full size-16 flex items-center justify-center shrink-0">
                        <img className="size-8" src={product.metadata.icon} alt="" />
                    </div>
                    <div>
                        <p className="text-2xl normal-case font-semibold">{product.name}</p>
                        <p>Proposé par {product.metadata.author}</p>
                    </div>
                </div>
                <div className="mt-5">
                    <p className="uppercase text-xs mb-1">à propos de la formation</p>
                    <p>{product.description}</p>
                </div>
                <div className="mt-5">
                    <p className="uppercase text-xs mb-2">Informations supplémentaires</p>
                    <div className="flex flex-col gap-2">
                        {product.marketing_features.map((feature: Stripe.Product.MarketingFeature) => {
                            return <FeatureDisplay feature={feature}></FeatureDisplay>
                        })}
                    </div>
                </div>
                <div className="mt-5">
                    <p className="uppercase text-xs mb-1">Prix</p>
                    <div className="flex items-end gap-3">
                        <p className="text-4xl">{price ?? "Indisponible"}</p>
                        <p className="text-2xl line-through text-red-600">
                            {
                                (price != null)
                                    ? `${parseFloat(price ?? "") + 30 ?? ""}€`
                                    : ""
                            }
                        </p>
                    </div>
                </div>
                <div className="mt-5 flex gap-3">
                    <a href={'/shop/buy/' + product.id} className="cursor-pointer flex items-center justify-center gap-2 rounded bg-[var(--primary)] text-[var(--on-primary)] px-4 py-2 hover:bg-[var(--primary-hover)] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                            <path fillRule="evenodd" d="M2.5 4A1.5 1.5 0 0 0 1 5.5V6h18v-.5A1.5 1.5 0 0 0 17.5 4h-15ZM19 8.5H1v6A1.5 1.5 0 0 0 2.5 16h15a1.5 1.5 0 0 0 1.5-1.5v-6ZM3 13.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm4.75-.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z" clipRule="evenodd" />
                        </svg>
                        <p>Acheter</p>
                    </a>
                    <div className="cursor-pointer flex items-center justify-center gap-2 rounded text-[var(--neutral)] hover:text-[var(--on-primary)] hover:bg-[var(--primary)] px-4 py-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                            <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                            <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" clipRule="evenodd" />
                        </svg>
                        <p>Visualiser</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

