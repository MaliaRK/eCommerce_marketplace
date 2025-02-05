import React, { Suspense } from 'react';
import CheckoutComponent from '../components/checkoutComponent';

export default function PaymentPage() {
  return (
    <Suspense fallback={<div>Loading Checkout...</div>}>
      <CheckoutComponent />
    </Suspense>
  );
}
