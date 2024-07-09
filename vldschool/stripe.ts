import Stripe from "stripe";

export class StripeService {
    private static stripe: Stripe | null = null;

    constructor() {
        console.log(StripeService.stripe);
        if (StripeService.stripe == null) {
            this.initStripe();
        }
    }

    private initStripe = () => {
        StripeService.stripe = new Stripe(`${process.env.STRIPEPRIVATEKEY}`, {
            typescript: true,
            telemetry: false,
        })
        return StripeService.stripe;
    }

    public addCustomer = async (customerData: Stripe.CustomerCreateParams) => {        
        // Ajout du customer dans stripe
        const customer = await StripeService.stripe?.customers.create(customerData);
        return customer;
    }
}