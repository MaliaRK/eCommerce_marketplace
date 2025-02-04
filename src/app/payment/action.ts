"use server"

import Stripe from "stripe";

export async function createPaymentIntent() {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

    try {
        const amount = 2000;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            automatic_payment_methods: {
                enabled: true,
            },
        });
        return {
            clientSecret: paymentIntent.client_secret,
        };

    } catch (error) {
        console.log("Transaction failed.", error);
    }
}
