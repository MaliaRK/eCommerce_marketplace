'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../../type';
import { urlFor } from '@/sanity/lib/image';
import FavouriteProduct from '../components/favourite';

const Cart = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    const cartArray: Product[] = Object.values(cart);

    setProducts(cartArray);
    setLoading(false);

    const total = cartArray.reduce((acc: number, product: Product) => {
      return acc + product.price * product.quantity;
    }, 0);

    setSubTotal(total);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('cart', JSON.stringify(products));
      updateSubTotal(products);
    }
  }, [products, loading]);

  // Function to handle product deletion
  const deleteProduct = (productName: string) => {
    const updatedProducts = products.filter((product) => product.productName !== productName);
    setProducts(updatedProducts);
  };

  // Function to handle quantity changes
  const changeQuantity = (productName: string, newQuantity: number) => {
    const updatedProducts = products.map((product) => {
      if (product.productName === productName) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    }).filter((product) => product.quantity > 0); // Remove products with quantity 0

    setProducts(updatedProducts);
  };

  // Function to update the subtotal
  const updateSubTotal = (updatedProducts: Product[]) => {
    const total = updatedProducts.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setSubTotal(total);
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <h3 className="text-lg mx-4 my-5"><strong><u>Cart Details:</u></strong></h3>
      <div className="md:flex justify-between mt-5">
        {loading ? (
          <p>Loading your cart...</p> 
        ) : products.length === 0 ? (
          "Your Cart is empty..." // Display this only if products is empty
        ) : (
          <div>
            {products.map((product) => (           
                <div key={product.productName} className="text-sm flex gap-2 mx-4 my-6">
                  <div>
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.productName}
                      width={200}
                      height={100}
                    />
                    <div className="flex gap-2 mt-2 justify-between">
                      <div className="flex">
                        <Image src="/wishlist.png" alt="wishlist" width={30} height={10} />
                        <button onClick={() => deleteProduct(product.productName)}>
                          <Image src="/delete.png" alt="delete" width={24} height={10} className="my-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='my-auto'>
                    <p className='text-lg'><strong>{product.productName}</strong></p>
                    <p className='my-2'>{product.category}</p>
                    <p className='my-2'>Size L</p>
                    <p className='my-2'>Quantity {product.quantity}</p>
                    <p className='my-2'>Price per unit <strong>{product.price}</strong></p>
                    <div className="my-2">
                      <button
                        onClick={() => changeQuantity(product.productName, product.quantity + 1)}
                        className="bg-gray-200 px-4 rounded-md text-xl"
                      >+</button>
                      <button
                        onClick={() => changeQuantity(product.productName, product.quantity - 1)}
                        className="bg-gray-200 px-4 rounded-md text-xl mx-3"
                      >-</button>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        )}
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
          <Link href='/checkout'><button className='bg-black text-white rounded-full px-8 py-1 mt-10'>Member Checkout</button></Link>
        </div>
      </div>

      <div className="my-10 mx-4">
        <h3><strong>Favourites</strong></h3>
        <p>There are no items saved to your favourites.</p>
      </div>

      <h3 className='m-4'>You Might Also Like</h3>
      <FavouriteProduct/>
    </div>
  );
};

export default Cart;
