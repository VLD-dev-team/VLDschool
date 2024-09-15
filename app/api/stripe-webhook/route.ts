import { stripe } from '@/stripe';

export async function POST(request: Request) {
    try {
        // Récupération du raw corps de la requette et de la signature stripe
        const payload = await request.text();
        const sig: string = request.headers.get("stripe-signature") ?? "no-signature";
        const endpointSecret: string = process.env.STRIPEWEBHOOKSECRET ?? "no-secret";

        // Préparation de la variable contenent l'événement
        let event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);

        switch (event.type) {
            case "checkout.session.completed":
                // Quand une checkout session se termine
                // On vérifie que le/les produits achetés ont été affecté à un utilisateur

                break;
        
            default:
                break;
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