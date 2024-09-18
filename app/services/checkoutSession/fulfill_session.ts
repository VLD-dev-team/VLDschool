"use server";

import { DatabaseService } from "@/db";
import { stripe } from "@/stripe";
import Stripe from "stripe";

const db = new DatabaseService();

export default async function fulfill_checkout(sessionID: string) {

    // On obtient la session à terminer
    const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.retrieve(sessionID, { expand: ["line_items"] });

    // On vérifie que la session est payé
    if (checkoutSession.payment_status != "paid") {
        console.error("Paiement de la session " + checkoutSession.id + " n'est pas terminé.");
        throw new Error("Le paiement n'est pas terminé.");
    }

    // On obtient le userID du client à partir de son customer ID
    const customerID: string = checkoutSession.customer?.toString() ?? "";

    const searchUserResults = await db.executeQuery('SELECT id FROM users WHERE "stripeCustomerID" = $1 ;', [customerID]);

    if (searchUserResults.rowCount == 0) {
        throw new Error("Impossible de trouver l'utilisateur associé au client");
    }

    const userID = searchUserResults.rows[0].id;

    // On fait la liste des différents produits acheté
    const line_items = checkoutSession.line_items?.data ?? [];

    // Pour chaque produit, on vérifie qu'il n'a pas déjà été attribué et on l'attribut si nécéssaire
    let wait = await line_items.map(async (item, index) => await affectCourse(item, userID, checkoutSession.id));

    // On return fin de la fonction d'attribution
    return console.log(`Checkout Session ${checkoutSession.id} à été traité.`);

}

async function affectCourse(item: Stripe.LineItem, userID: string, checkoutSessionID: string) {
    // On obtient les détails du produit
    const product: Stripe.Product = await stripe.products.retrieve(`${item.price?.product}`);

    switch (product.metadata.type) {
        case "tutoring": {

            const results = await db.executeQuery('SELECT "tutoringID" FROM privatelessons WHERE "stripeItemID" = $1 AND "studentID" = $2 ;', [product.id, userID]);
            if (results.rowCount == 0) {
                console.log(`Attribution du produit ${product}`)
                const dbreq = await db.executeQuery('INSERT INTO privatelessons ("stripeItemID", "studentID") VALUES ($1, $2) ;', [product.id, userID]);
            }

            break;
        }

        case "course": {

            const results = await db.executeQuery('SELECT "courseRegID" FROM courseregistrations WHERE "stripeItemID" = $1 AND "studentID" = $2 ;', [product.id, userID]);
            if (results.rowCount == 0) {
                console.log(`Attribution du produit ${product}`)

                // On chercher l'id du cours dans la bdd
                const searchInternalCourseID = await db.executeQuery('SELECT "courseID" FROM courses WHERE "stripeItemID" = $1 ;', [product.id]);
                const courseID = searchInternalCourseID.rows[0].courseID;

                // On ajoute le cours à l'étudiant
                const dbreq = await db.executeQuery('INSERT INTO courseregistrations ("studentID", "checkoutSessionID", "courseID", "stripeItemID") VALUES ($1, $2, $3, $4) ;', [userID, checkoutSessionID, courseID, product.id]);
            }

            break;
        }

        default:
            console.error(`Le produit ${product.id} ne peut pas être traité automatiquement.`);
            break;
    }
}