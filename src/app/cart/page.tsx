import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Cart = () => {
  return (
    <div className='max-w-[1500px] mx-auto'>
      <div className='mx-[10%] my-[4%] grid grid-cols-[70%_auto]'>
        <div>
          <div>
            <div>
              <p>Free Delivery</p>
              <p>Applies to orders of &#8377;14000.00 or more. &nbsp; &nbsp; <u>View details</u></p>
            </div>
            <div className='flex justify-between mr-8'>
              <div className='text-xs flex gap-2 items-center'>
                <div className='mt-4'>
                  <h3 className='text-lg'><strong>Bag</strong></h3>             
                  <Image src='/cartMan.png' alt='hemanro' width={150} height={10}></Image>             
                </div>
                <div>
                  <p><strong>Nike Dri-FIT ADV Technit Ultra</strong></p>
                  <p>Men&apos;s Short Sleeve Running <br/> Top Ashen Slate/Cobalt Bliss <br/> Size L &nbsp; &nbsp; Quantity 1</p>
                </div>
              </div> 
              <p>MRP:&#8377;3 895.00</p>
            </div>      
            <div className='flex gap-2'>
              <Image src='/wishlist.png' alt='wishlist' width={24} height={10}></Image>
              <Image src='/delete.png' alt='delete' width={24} height={10}></Image>
            </div>
          </div>
          <div className=' mt-8'>
            <div className='flex justify-between'>
              <div className='text-xs'>
                <p><strong>Nike Air Max 97 SE</strong></p>
                <p>Men&apos;s Shoes <br/> Flat Pewter/Light Bone/Black/white <br/> Size 8 &nbsp; &nbsp; Quantity 1</p>
              </div> 
              <p>MRP:&#8377;16 995.00</p>
            </div>      
            <div className='flex gap-2'>
              <Image src='/wishlist.png' alt='wishlist' width={24} height={10}></Image>
              <Image src='/delete.png' alt='delete' width={24} height={10}></Image>
            </div>
          </div>
          <div className=' mt-8'>
            <h3><strong>Favourites</strong></h3>
            <p>There are no items saved to your favourites.</p>
          </div>
        </div>
        <div className='ml-[10%]'>
          <h3><strong>Summary</strong></h3>
          <p>Subtotal &nbsp; &nbsp; &nbsp; &#8377;20 890.00</p>
          <p>Estimated Delivery & Handling &nbsp; &nbsp; Free</p>
          <p className='my-4'>Total &nbsp; &nbsp; &nbsp; &#8377;20 890.00</p>
          <Link href='./checkout' target='_blank'><button className='bg-black text-white rounded-full px-8 py-1 my-3'>Member Checkout</button></Link>
        </div>
      </div>
      <div className='ml-[10%]'>
        <h3>You Might Also Like</h3>
        <Image src='/cartShoe.png' alt='shoe' width={431} height={20}></Image>       
      </div>
    </div>
  )
}

export default Cart
