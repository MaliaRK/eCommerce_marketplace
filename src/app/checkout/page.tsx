'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ContactForm from '../components/contactForm'
import { Product } from '../../../type';
import CartSummary from '../components/cartSummary';
import Link from 'next/link';

const Checkout = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [subTotal, setSubTotal] = useState<number>(0);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart') || '{}');
        const cartArray: Product[] = Object.values(cart);
        setProducts(cartArray);

        const total = cartArray.reduce((acc: number, product: Product) => acc + product.price * product.quantity, 0);
        setSubTotal(total);
    }, []);

    return (
        <div className='max-w-[1440px] mx-auto my-[6%] grid grid-cols-1 md:grid-cols-[60%_auto]'>
            <div className='mx-10'>
                <h3><strong>How would you like to get your order?</strong></h3>
                <p className='my-4 mx-auto text-xs'>Custom regulation for india require a copy of the
                    recipient&apos;s KYC. The address on the KYC needs
                    to match the shipping address. Our courier will contact you
                    via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and
                    used solely for the purpose of clearing custom (including sharing it with custom
                    officials) for all orders and returns. If your KYC does not match your shipping address, please click
                    the link for more information. <u>Learn More</u>
                </p>
                <button className='flex gap-3 items-center py-2 px-6 md:px-28 border-[1px] border-black rounded-md '>
                    <Image src='/deliver.png' alt='deliver' width={24} height={20} className='mx-auto'></Image>
                    <p>Delivet It</p>
                </button>
                <h3 className='mt-5'><strong>Enter your name and address:</strong></h3>
                <ContactForm />
                <h3 className='my-4'><strong>Delivery</strong></h3>
                <hr />
                <h3 className='my-4'>Shipping</h3>
                <hr />
                <h3 className='my-4'>Billing</h3>
                <hr />
                <h3 className='my-4'>payment</h3>
            </div>
            <div className='ml-10 mt-[8%]'>
                <CartSummary products={products} subTotal={subTotal} showCheckoutLink={false} />
                <Link href={`/payment?subtotal=${subTotal}`}>
                    <button className='bg-black hover:bg-gray-800 text-white rounded-full px-8 py-2 mt-5'>
                        Proceed to Payment
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Checkout
