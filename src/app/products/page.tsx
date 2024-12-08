import React from 'react'
import Image from 'next/image'

import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'


const Products = () => {
  return (
    <div className='max-w-[1500px] mx-auto'>
      <div className='flex justify-between '>
        <h3><strong>New (500)</strong></h3>
        <ul className='flex gap-2'>
          <span className='flex items-center gap-1'>
            <p>Hide Filter</p>
            <Image src='/filter.png' alt='filter' width={24} height={24}></Image>
          </span>
          <span className='flex gap-1 '>
            <p>Sort By</p>
            <Image src='/dropdown.png' alt='dropdown' width={24} height={24}></Image>
          </span>
        </ul>
      </div>
      <div className='grid grid-cols-[20%_auto] m-4 '>
        <ul>
          <li>Shoes</li>
          <li>Sports Bras</li>
          <li>Tops & T-Shirts</li>
          <li>Hoodies & Sweatshirts</li>
          <li>Jackets</li>
          <li>Trousers & Tights</li>
          <li>Shorts</li>
          <li>Tracksuits</li>
          <li>Jumpsuits & Rompers</li>
          <li>Skirts & Dresses</li>
          <li>Socks</li>
          <li>Accessories & Equipment</li>
          <br /><br />
          <ul>Gender
            <li className='ml-2'>Men</li>
            <li className='ml-2'>Women</li>
            <li className='ml-2'>Unisex</li>
          </ul>
          <br /><br />
          <ul>Kids
            <li className='ml-2'>Boys</li>
            <li className='ml-2'>Girls</li>
          </ul>
          <br /><br />
          <ul>Shop By Price
            <li className='ml-2'>Under &#8377;2 500.00</li>
            <li className='ml-2'>Under &#8377;2 501.00 - &#8377;</li>
          </ul>
        </ul>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div>
            <Image src='/1.png' alt='shoe' width={348} height={10}></Image>
            <div className=''>
              <span className='text-[#9E3500]'>Just In</span>
              <h3><strong>Nike Air Force 1 Mid 07</strong></h3>
              <p className='text-xs'>Men&apos;s Shoes <br/>1 Colour</p>
              <h4><strong>MRP : &#8377;10 795.00</strong></h4>
            </div>
          </div>
        </div>
      </div> 

    </div>
  )
}

export default Products



{/* <Sheet>
          <SheetTrigger  className='md:hidden'>
          </SheetTrigger>
          <SheetContent side='left' className="w-[400px] sm:w-[540px]">
              <ul>
                <li>New & Featured</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Sale</li>
                <li>SNKRS</li>
              </ul>
          </SheetContent>
        </Sheet>     */}