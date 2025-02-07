import Stripe from "stripe";
import { stripe } from "@/stripe";
import { Metadata } from "next";
import OfferLayer from "./components/offerLayer";
import ProductCard from "./components/productCard";
import { auth } from "@/auth";
import executeQuery from "@/db";

export const metadata: Metadata = {
    title: "Boutique - VLDschool",
    description: "Trouvez la formation qu'il vous faut avec VLDschool.",
};

export default async function ShopHome() {
    // On obtient la liste des produits disponibles à l'achat
    const products = await stripe.products.list();

    // Si une session est connecté, on obtient la liste des cours déjà acheté pour les supprimer de la liste à afficher
    const session = await auth();
    let studentCourses = [];
    if (session) {
        const results = await executeQuery(`SELECT "stripeItemID" FROM courseregistrations WHERE "studentID" = $1 ;`, [session.user.id ?? ""]);
        studentCourses = results.rows.map((value, index) => { return value.stripeItemID })
    }

    const productList: Stripe.Product[] = products.data.filter(product => product.active == true && !studentCourses.includes(product.id) && product.metadata.shop == "true")

    return (
        <div className="py-16">
            <h1 className="text-xl font-medium">Bienvenue sur la boutique VLDschool.</h1>
            <p className="pt-2">{productList.length} formations disponibles à l'achat</p>
            <OfferLayer></OfferLayer>
            <h2 className="pt-20 text-xl font-medium">Formations disponibles à l'achat pour vous.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
                {
                    (productList.length == 0) 
                    ? <p>Merci de nous avoir fait confiance, vous possèdez déjà tout les produits disponibles à la vente.</p>
                    : productList.map((product: Stripe.Product) => {
                        return (
                            <ProductCard product={product} key={product.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}