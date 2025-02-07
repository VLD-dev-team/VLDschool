import { User } from "next-auth"
import { stripe } from "./stripe";
import executeQuery from "./db";

export const authEvents = {
    createUser: async (message: { user: User }) => {
        // Récupération des valeurs
        const userID = message.user.id;
        const email = message.user.email;
        const name = message.user.name;

        // Vérification des données
        if (!userID || !email) return;

        // Création du client stripe
        const stripeCustomer = await stripe.customers.create(
            {
                email: email,
                name: name ?? undefined,
            }
        );

        // Sauvegarde de l'id stripe dans la base de données
        const customerID = stripeCustomer?.id ?? "";
        await executeQuery('UPDATE users SET "stripeCustomerID" = $1 WHERE id = $2 ;', [customerID, userID]);

        // Affectation du cours linux
        const courseID = 0;
        await executeQuery('INSERT INTO courseregistrations ("studentID", "courseID", "studentLastChapter", "isFavorite") VALUES ( $1 , 0 , "" , true )', [userID]);

        return;
    }
}