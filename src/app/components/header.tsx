import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'

const Header = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <div className='flex justify-between bg-[#cccccc] p-2 '>
          <Image src='/human.png' alt='human' width={24} height={24}></Image>
          <ul className='flex items-center font-light'>
              <li className='border-r-2 border-black px-2'>Find a Store</li>
              <li className='border-r-2 border-black px-2'>Help</li>
              <Link href='./joinUs'><li className='border-r-2 border-black px-2'>Join Us</li></Link>
              <Link href='./login'><li className='px-2'>Sign In</li></Link>
          </ul>
      </div>
      <nav className='flex justify-between items-center mt-2'>
        <Image src='/logo.png' alt='logo' width={78} height={78}></Image>       
        <ul className='gap-5 font-light hidden md:flex'>
            <li>New & Featured</li>
            <Link href='./products' target='_blank'><li>Men</li></Link>
            <Link href='./products' target='_blank'><li>Women</li></Link>
            <li>Kids</li>
            <li>Sale</li>
            <li className='font-semibold'>SNKRS</li>
        </ul> 
        <div className='flex items-center gap-2'>
          <div className='flex gap-1 bg-[#cccccc] p-1 rounded-full '>
            <Image src='/search.png' alt='search' width={40} height={36}></Image>
            <input type='text' placeholder='Search' className='bg-transparent border-none outline-none' />
          </div>
          <Image src='/wishlist.png' alt='wishlist' width={38} height={38}></Image>
          <Link href='./cart' target='_blank'><Image src='/bag.png' alt='bag' width={50} height={50} className='md:w-10'></Image></Link>
        </div>
        <Sheet>
          <SheetTrigger className='block md:hidden mr-2'>Menu</SheetTrigger>
          <SheetContent>
              <ul className='font-light'>
                <li>Home</li>
                <li>New & Featured</li>
                <Link href='./products' target='_blank'><li>Men</li></Link>
                <Link href='./products' target='_blank'><li>Women</li></Link>
                <li>Kids</li>
                <li>Sale</li>
                <li className='font-semibold'>SNKRS</li>
                <li>cart</li>
                <li>Checkout</li>
                <li>Contact</li>
                <li>Products</li>
                <li>Product Details</li>
                <li>Join us</li>
                <li>Ligin</li>
                <li>Sale</li>
              </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  )
}

export default Header