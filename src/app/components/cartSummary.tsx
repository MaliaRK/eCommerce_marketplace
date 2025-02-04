import React from 'react';
import { CartSummaryProps, Product } from '../../../type';
import Link from 'next/link';

const CartSummary = ({ products, subTotal, showCheckoutLink = true }: CartSummaryProps) => {
  return (
    <div className='mx-10 md:mx-auto mt-[4%]'>
      <h3><strong>Summary</strong></h3>
      {products.map((product) => (
        <div key={product.productName} className='flex justify-between gap-10 my-3'>
          <p>{product.productName}</p>
          <span>{product.price * product.quantity}</span>
        </div>
      ))}
      <hr />
      <div className='my-2 flex justify-between gap-10'>
        <p>Total</p>
        <span><strong>{subTotal}</strong></span>
      </div>
      <hr />
      {showCheckoutLink && (
        <Link href='/checkout'>
          <button className='bg-black text-white rounded-full px-8 py-1 mt-10'>Member Checkout</button>
        </Link>
      )}
    </div>
  );
};

export default CartSummary;
