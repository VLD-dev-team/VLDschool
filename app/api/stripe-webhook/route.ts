"use server";

import fulfill_checkout from '@/app/services/checkoutSession/fulfill_session';
import { stripe } from '@/stripe';

export async function POST(request: Request) {
    try {
        // Récupération du raw corps de la requette et de la signature stripe
        const payload = await request.text();
        const sig: string = request.headers.get("stripe-signature") ?? "missing-signature";
        const endpointSecret: string = process.env.STRIPEWEBHOOKSECRET ?? "missing-secret";

        // Préparation de la variable contenent l'événement
        let event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);

        switch (event.type) {
            case "checkout.session.completed":
                
                await fulfill_checkout(event.data.object.id);

                // TODO: ajouter email de confirmation de commande

                return new Response(
                    `OK`,
                    {
                        status: 200,
                    }
                )
        
            default:
                return new Response(
                    `Not implemented`,
                    {
                        status: 501,
                    }
                )
        }


    } catch (error) {
        console.error(error);
        return new Response(
            `Error: ${error}`,
            {
                status: 400,
            }
        );
    }
}