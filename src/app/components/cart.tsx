'use client';

import React, { useEffect, useState } from 'react';
import { Product } from '../../../type';
import Image from 'next/image';

export default function Cart() {
  const [products, setProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState<number>(0);

  // ✅ Function to update cart
  const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    const cartArray: Product[] = Object.values(cart);
    setProducts(cartArray);

    const cartItems = cartArray.reduce((acc: number, product: Product) => acc + product.quantity, 0);
    setQuantity(cartItems);
  };

  useEffect(() => {
    updateCart(); // Load cart on mount

    // ✅ Listen for cart updates (real-time)
    const handleCartUpdate = () => updateCart();
    window.addEventListener('cartUpdated', handleCartUpdate);
    
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  return (
    <div className="relative">
      <Image src="/bag.png" alt="Cart" width={40} height={40} />
      {quantity > 0 && (
        <span className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 rounded-full">
          {quantity}
        </span>
      )}
    </div>
  );
}
