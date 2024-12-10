import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Cart = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <div className='mx-[10%] my-[4%] grid grid-cols-1 md:grid-cols-[70%_auto]'>
        <div>
          <div>
            <div>
              <p>Free Delivery</p>
              <p>Applies to orders of &#8377;14000.00 or more. &nbsp; &nbsp; <u>View details</u></p>
            </div>
            <div className='flex justify-between mr-8 mt-5'>
              <div className='text-xs flex gap-2'>
                <div>
                  <h3 className='text-lg'><strong>Bag</strong></h3>             
                  <Image src='/cartMan.png' alt='hemanro' width={150} height={10}></Image> 
                  <div className='flex gap-2 mt-2'>
                    <Image src='/wishlist.png' alt='wishlist' width={24} height={10}></Image>
                    <Image src='/delete.png' alt='delete' width={24} height={10}></Image>
                  </div>            
                </div>
                <div className='my-auto'>
                  <p><strong>Nike Dri-FIT ADV Technit Ultra</strong></p>
                  <p>Men&apos;s Short Sleeve Running <br/> Top Ashen Slate/Cobalt Bliss <br/> Size L &nbsp; &nbsp; Quantity 1</p>
                </div>
              </div> 
              <p className='ml-10'>MRP:&#8377;3 895.00</p>
            </div>    
          </div>
          <div className='flex justify-between mr-8 mt-10'>
              <div className='text-xs flex gap-2'>
                <div>
                  <h3 className='text-lg'><strong>Shoes</strong></h3>             
                  <Image src='/1.png' alt='shoes' width={150} height={10}></Image> 
                  <div className='flex gap-2 mt-2'>
                    <Image src='/wishlist.png' alt='wishlist' width={24} height={10}></Image>
                    <Image src='/delete.png' alt='delete' width={24} height={10}></Image>
                  </div>            
                </div>
                <div className='my-auto'>
                  <p><strong>Nike Air Max 97 SE</strong></p>
                  <p>Men&apos;s Shoes <br/> Flat Pewter/Light Bone/Black/white <br/> Size 8 &nbsp; &nbsp; Quantity 1</p>
                </div>
              </div> 
              <p className='ml-10'>MRP:&#8377;16 995.00</p>
          </div>
          <div className='mt-10 hidden md:block'>
            <h3><strong>Favourites</strong></h3>
            <p>There are no items saved to your favourites.</p>
          </div>
        </div>
        <div className='mt-10 md:ml-[10%]'>
          <h3><strong>Summary</strong></h3>
          <p>Subtotal &nbsp; &nbsp; &nbsp; &#8377;20 890.00</p>
          <p>Estimated Delivery & Handling &nbsp; &nbsp; Free</p>
          <p className='my-4'>Total &nbsp; &nbsp; &nbsp; &#8377;20 890.00</p>
          <Link href='./checkout' target='_blank'><button className='bg-black text-white rounded-full px-8 py-1 my-3'>Member Checkout</button></Link>
        </div>
      </div>
      <div className='m-8 md:hidden'>
        <h3><strong>Favourites</strong></h3>
        <p>There are no items saved to your favourites.</p>
      </div>
      <div className='m-8 md:ml-[10%]'>
        <h3>You Might Also Like</h3>
        <Image src='/cartShoe.png' alt='shoe' width={431} height={20}></Image>       
      </div>
    </div>
  )
}

export default Cart
