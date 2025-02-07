"use server";

import { auth } from "@/auth";
import executeQuery from "@/db";
import { stripe } from "@/stripe";
import { redirect } from "next/navigation";

export async function createCheckoutSession(productID: string, optionVLDplusSelected: boolean) {

    // On obtient les données utilisateurs
    const session = await auth();
    if (!session) {
        throw {
            message: "Vous devez être authentifié."
        }
    }

    // On crée la liste des prix selectionnées
    let line_items = []

    // On revérifie le produit avec l'ID
    const product = await stripe.products.retrieve(productID);
    line_items.push(
        {
            price: `${product.default_price}`,
            quantity: 1,
        },
    )

    // On obtient le produit optionnel VLDplus
    let optionnalProduct = null;
    if (optionVLDplusSelected) {
        optionnalProduct = await stripe.products.retrieve(product.metadata.vldplus);
        line_items.push(
            {
                price: (optionVLDplusSelected && optionnalProduct?.default_price) ? `${optionnalProduct.default_price}` : undefined,
                quantity: 1,
            }
        )
    }

    // On vérifie que l'utilisateur ne possède pas déjà le produit principal
    const checkProductAlreadyOwnedResults = await executeQuery(`SELECT "stripeItemID" FROM courseregistrations WHERE "studentID" = $1 AND "stripeItemID" = $2 ;`, [session.user.id ?? "x", productID]);

    // Si erreur lors de la requette sql on renvoi 500
    if (checkProductAlreadyOwnedResults == null || checkProductAlreadyOwnedResults.rowCount == null) {
        throw {
            message: 'Erreur innatendue du serveur',
            type: 'server_error'
        }
    }

    // Si le cours à déjà été acheté, on renvoi l'erreur
    if (checkProductAlreadyOwnedResults.rowCount > 0) {
        throw {
            message: 'Vous possèdez déjà ce cours',
            type: 'already_owned'
        }
    }

    // On obtient l'ID stripe du client si il existe
    const clientStripeIDresults = await executeQuery(`SELECT "stripeCustomerID" FROM users WHERE id = $1 ;`, [session.user.id ?? ""])
    const clientStripeID: string | null = clientStripeIDresults.rows[0].stripeCustomerID;

    // On crée la session de paiement
    const stripeSession = await stripe.checkout.sessions.create({
        ui_mode: "embedded",
        customer: clientStripeID ?? undefined,
        customer_email: (clientStripeID == null) ? session.user.email ?? undefined : undefined,
        line_items: line_items,
        mode: "payment",
        allow_promotion_codes: true,
        return_url: `${process.env.DOMAIN_URI}/shop/return/{CHECKOUT_SESSION_ID}`,
    });

    // On redirige vers la page de paiement ou d'erreur
    return redirect(`${process.env.DOMAIN_URI}/shop/checkout/${stripeSession.id}`);
}