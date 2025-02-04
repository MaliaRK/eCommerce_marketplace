'use client';

import { loadStripe } from '@stripe/stripe-js'
import React, { useEffect, useState } from 'react'
import { createPaymentIntent } from '../payment/action';
import { Elements } from "@stripe/react-stripe-js"
import PaymentForm from '../components/paymentForm';
import { useSearchParams } from 'next/navigation';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const CheckoutComponent = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [subtotal, setSubtotal] = useState<number>(0);
  const searchParams = useSearchParams();

  useEffect(() => {
    const subtotalParam = searchParams.get('subtotal');
    if (subtotalParam) {
      const subtotal = parseFloat(subtotalParam);
      if (!isNaN(subtotal)) {
        setSubtotal(subtotal);
        createPaymentIntent(subtotal * 100) // Convert to cents
          .then((res) => {
            if (res?.clientSecret) {
              setClientSecret(res.clientSecret);
            } else {
              console.log('Client secret not received', res);
            }
          })
          .catch((error) => {
            console.log('Error creating payment intent: ', error);
          });
      } else {
        console.log('Invalid subtotal:', subtotalParam);
      }
    }
  }, [searchParams]);
  

  console.log(clientSecret);

  if (!clientSecret) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Checkout</h2>
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <PaymentForm subtotal={subtotal} />
      </Elements>
    </div>
  )
}

export default CheckoutComponent;
