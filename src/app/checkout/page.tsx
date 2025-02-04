import React from 'react'
import Image from 'next/image'
import ContactForm from '../components/contactForm'

const Checkout = () => {
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
                <div>
                    <h3><strong>Order Summary</strong></h3>
                    <p>Subtotal &nbsp; &nbsp; &nbsp; &#8377;20 890.00</p>
                    <p>Delivery/Shipping &nbsp; &nbsp; Free</p>
                    <hr className='w-[50%]' />
                    <p className='my-4'>Total &nbsp; &nbsp; &nbsp; &#8377;20 890.00</p>
                    <hr className='w-[50%]' />
                    <p>(The total reflects the price of your order, including all duties and taxes)</p>
                </div>
                <h3 className='text-lg mt-6'><strong>Arrives Mon, 27Mar - Wed, 12Apr</strong></h3>
                <div className='text-xs flex items-center'>
                    <Image src='/cartMan.png' alt='hemanro' width={150} height={10}></Image>
                    <div>
                        <p><strong>Nike Dri-FIT ADV Technit Ultra</strong></p>
                        <p>Men&apos;s Short Sleeve Running <br /> Qty 1 <br /> Size L <br /> &#8377;3 895.00 </p>
                    </div>
                </div>
                <div className='text-xs flex items-center mt-6'>
                    <Image src='/cartShoe1.png' alt='shoe' width={208} height={10}></Image>
                    <div>
                        <p><strong>Nike Air Max 97 SE Men&apos;s Shoes</strong></p>
                        <p>Qty 1 <br /> Size UK 8 <br /> &#8377;16 995.00 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
