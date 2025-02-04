'use client';

import { loadStripe } from '@stripe/stripe-js'
import React, { useEffect, useState } from 'react'
import { createPaymentIntent } from '../payment/action';
import { Elements } from "@stripe/react-stripe-js"
import PaymentForm from '../components/paymentForm';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const CheckoutComponent = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    createPaymentIntent()
      .then((res) => {
        if (res && res.clientSecret) {
          setClientSecret(res.clientSecret);
        } else {
          console.log("client secret not recieved", res);
        }
      })
      .catch((error) => {
        console.log("Error creating payment intent: ", error)
      })
  }, []);

  console.log(clientSecret);

  if (!clientSecret) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Checkout</h2>
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <PaymentForm />
      </Elements>
    </div>
  )
}

export default CheckoutComponent;
