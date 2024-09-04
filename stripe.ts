import Stripe from "stripe";

export const stripe = new Stripe(`${process.env.STRIPEPRIVATEKEY}`, {
    typescript: true, 
    telemetry: false,
});