"use server"

import Stripe from "stripe";

export async function createPaymentIntent(amount: number) {
    console.log('Amount received in createPaymentIntent:', amount);
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
    
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            automatic_payment_methods: {
                enabled: true,
            },
        });
        console.log('Payment Intent created:', paymentIntent);
        return {
            clientSecret: paymentIntent.client_secret,
        };

    } catch (error) {
        console.log("Transaction failed.", error);
    }
}
