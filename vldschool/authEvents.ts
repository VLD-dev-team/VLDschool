import { User } from "next-auth"
import { StripeService } from "./stripe";
import { DatabaseService } from "./db";

const stripe = new StripeService();
const db = new DatabaseService();

export const authEvents = {
    createUser: async (message: { user: User }) => {
        // Récupération des valeurs
        const userID = message.user.id;
        const email = message.user.email;
        const name = message.user.name;

        // Vérification des données
        if (!userID || !email) return;

        // Création du client stripe
        const stripeCustomer = await stripe.addCustomer(
            {
                email: email,
                name: name ?? undefined,
            }
        );
        
        // Sauvegarde de l'id stripe dans la base de données
        const customerID = stripeCustomer?.id ?? "";
        db.executeQuery('UPDATE users SET "stripeCustomerID" = $1 WHERE id = $2 ;', [customerID, userID]);

        return;
    }
}