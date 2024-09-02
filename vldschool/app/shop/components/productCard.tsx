import Stripe from "stripe";

export default async function ProductCard({ product }: {
    product: Stripe.Product
}) {
    return (
        <div className="bg-[var(--surface-dim)] md:flex p-5 rounded">
            <div className="flex basis-1/3">
                <img src="" alt="" />
            </div>
            <div>
                <div className="flex items-center gap-4">
                    <div className="border-2 border-[var(--neutral)] rounded-full size-16 flex items-center justify-center">
                        <img className="size-8" src={product.metadata.icon} alt="" />
                    </div>
                    <p className="text-2xl normal-case font-semibold">{product.name}</p>
                    <p>{product.marketing_features[0]?.name}</p>
                </div>
            </div>
        </div>
    )
}