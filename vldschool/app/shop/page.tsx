import Stripe from "stripe";
import { stripe } from "@/stripe";
import { Metadata } from "next";
import OfferLayer from "./components/offerLayer";
import ProductCard from "./components/productCard";

export const metadata: Metadata = {
    title: "Boutique - VLDschool",
    description: "Trouvez la formation qu'il vous faut avec VLDschool.",
};

export default async function ShopHome() {
    const products = await stripe.products.list();

    return (
        <div className="pt-16">
            <h1 className="text-xl font-medium">Bienvenue sur la boutique VLDschool.</h1>
            <p className="pt-2">{products.data.length} formations disponibles à l'achat</p>
            <OfferLayer></OfferLayer>
            <div className="grid grid-cols-2 gap-5 pt-10">
                {products.data.map((product: Stripe.Product) => {
                    if (product.active) {
                        return (
                            <ProductCard product={product} />
                        )
                    }
                })}
            </div>
        </div>
    )
}