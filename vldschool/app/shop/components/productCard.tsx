import { stripe } from "@/stripe";
import Stripe from "stripe";

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
        <div className="bg-[var(--surface)] md:flex rounded drop-shadow-lg">
            <div className="flex basis-1/3 bg-[url(https://school.vld-group.com/image/PythonV3.png)] bg-cover rounded-s"></div>
            <div className="p-5 basis-2/3">
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

function FeatureDisplay({ feature }: { feature: Stripe.Product.MarketingFeature }) {
    const text: string = feature.name ?? "";

    if (text.toLowerCase().includes("chapitres")) {
        return (
            <div className="flex gap-2 items-center">
                <div className="flex items-center justify-center border-2 border-[var(--neutral)] rounded-full size-8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm2.25 8.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" clipRule="evenodd" />
                    </svg>
                </div>
                <p>{text}</p>
            </div>
        )
    }

    if (text.toLowerCase().includes("projets")) {
        return (
            <div className="flex gap-2 items-center">
                <div className="flex items-center justify-center border-2 border-[var(--neutral)] rounded-full size-8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h2.879a1.5 1.5 0 0 1 1.06.44l1.122 1.12A1.5 1.5 0 0 0 9.62 4H12.5A1.5 1.5 0 0 1 14 5.5v1.401a2.986 2.986 0 0 0-1.5-.401h-9c-.546 0-1.059.146-1.5.401V3.5ZM2 9.5v3A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 12.5 8h-9A1.5 1.5 0 0 0 2 9.5Z" />
                    </svg>
                </div>
                <p>{text}</p>
            </div>
        )
    }

    if (text.toLowerCase().includes("vidéos")) {
        return (
            <div className="flex gap-2 items-center">
                <div className="flex items-center justify-center border-2 border-[var(--neutral)] rounded-full size-8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm-.847-9.766A.75.75 0 0 0 6 5.866v4.268a.75.75 0 0 0 1.153.633l3.353-2.134a.75.75 0 0 0 0-1.266L7.153 5.234Z" clipRule="evenodd" />
                    </svg>
                </div>
                <p>{text}</p>
            </div>
        )
    }

    if (text.toLowerCase().includes("exercices")) {
        return (
            <div className="flex gap-2 items-center">
                <div className="flex items-center justify-center border-2 border-[var(--neutral)] rounded-full size-8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                        <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                    </svg>
                </div>
                <p>{text}</p>
            </div>
        )
    }

    return (
        <div className="flex gap-2 items-center">
            <div className="flex items-center justify-center border-2 border-[var(--neutral)] rounded-full size-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                    <path d="M10 1a6 6 0 0 0-3.815 10.631C7.237 12.5 8 13.443 8 14.456v.644a.75.75 0 0 0 .572.729 6.016 6.016 0 0 0 2.856 0A.75.75 0 0 0 12 15.1v-.644c0-1.013.762-1.957 1.815-2.825A6 6 0 0 0 10 1ZM8.863 17.414a.75.75 0 0 0-.226 1.483 9.066 9.066 0 0 0 2.726 0 .75.75 0 0 0-.226-1.483 7.553 7.553 0 0 1-2.274 0Z" />
                </svg>
            </div>
            <p>{text}</p>
        </div>
    )
}