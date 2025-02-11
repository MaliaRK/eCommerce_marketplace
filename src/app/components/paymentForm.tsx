import React, { useState } from 'react'
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"

export default function PaymentForm({subtotal}: {subtotal: number}) {
    const stripe = useStripe(); 
    const elements = useElements(); 
    const [isProcessing, setIsProcessing] = useState(false); 
    const [errorMessage, setErrorMessage] = useState<string | null>(null); 
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault(); 
  
      if (!stripe || !elements) return; 
  
      setIsProcessing(true); 
  
      // Attempt to confirm the payment
      const { error } = await stripe.confirmPayment({
        elements,
        redirect: "if_required", 
      });
  
      if (error) {
        setErrorMessage(error.message || "An unknown error occurred");
        setIsProcessing(false);
      } else {
        setErrorMessage(null);
        alert("Payment successful!"); 
        setIsProcessing(false); 
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className='m-4 bg-gray-200 px-2 py-1 rounded-sm'>
          <h3>Order Summary:</h3>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
        </div>
        <PaymentElement className='mx-4'/>
        <button type="submit" 
        disabled={!stripe || isProcessing} className='m-4 bg-gray-400 hover:bg-gray-300 px-2 py-1 rounded-sm'>
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
        {errorMessage && <div style={{ color: "red", marginTop: 8 }}>{errorMessage}</div>}
      </form>
    );
  }
