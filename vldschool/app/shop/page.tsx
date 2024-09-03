import Stripe from "stripe";
import { stripe } from "@/stripe";
import { Metadata } from "next";
import OfferLayer from "./components/offerLayer";
import ProductCard from "./components/productCard";
import { auth } from "@/auth";
import { DatabaseService } from "@/db";

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
        const db = new DatabaseService();
        const results = await db.executeQuery(`SELECT "stripeItemID" FROM courseregistrations WHERE "studentID" = $1 ;`, [session.user.id ?? ""]);
        studentCourses = results.rows.map((value, index) => {return value.stripeItemID})
    }

    return (
        <div className="py-16">
            <h1 className="text-xl font-medium">Bienvenue sur la boutique VLDschool.</h1>
            <p className="pt-2">{products.data.filter((product) => product.active == true).length} formations disponibles à l'achat</p>
            <OfferLayer></OfferLayer>
            <h2 className="pt-10 text-xl font-medium">Formations disponibles à l'achat</h2>
            <div className="grid grid-cols-2 gap-5 pt-10">
                {products.data.map((product: Stripe.Product) => {
                    if (product.active && !studentCourses.includes(product.id)) {
                        return (
                            <ProductCard product={product} />
                        )
                    }
                })}
            </div>
        </div>
    )
}