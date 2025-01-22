import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import Navbar from './navbar'
import SearchProduct from './search'
import { useCart } from '@/context/cartContext'

const Header = () => {
  // const { cartItems } = useCart();
  return (
    <div className='max-w-[1440px] mx-auto'>
      {/* navbar */}
      <div className='flex justify-between bg-[#cccccc] p-2 '>
          <Image src='/human.png' alt='human' width={24} height={24}></Image>
          <ul className='flex items-center font-light'>
              <Link href='/'><li className='border-r-2 border-black px-1 md:px-2'>Home</li></Link>
              <Link href='/products'><li className='border-r-2 border-black px-1 md:px-2'>Find a Store</li></Link>
              <Link href='/contact'><li className='border-r-2 border-black px-1 md:px-2'>Help</li></Link>
              <Link href='/joinUs'><li className='border-r-2 border-black px-1 md:px-2'>Join Us</li></Link>
              <Link href='/login'><li className='px-2'>Sign In</li></Link>
          </ul>
      </div>
      <nav className='flex justify-between items-center mt-2'>
        <Image src='/logo.png' alt='logo' width={78} height={78}></Image>       
        <Navbar/>
        <div className='flex items-center gap-2'>
          <SearchProduct/>
          {/* <div className='flex gap-1 bg-[#cccccc] p-1 rounded-full '>
            <Image src='/search.png' alt='search' width={40} height={36}></Image>
            <input type='text' placeholder='Search' className='bg-transparent border-none outline-none' />
          </div> */}
          <Image src='/wishlist.png' alt='wishlist' width={38} height={38}></Image>
          <Link href='./cart' target='_blank'><Image src='/bag.png' alt='bag' width={50} height={50} className='md:w-10'/>
          {/* <p>Cart Items: {cartItems.length}</p> */}
          </Link>
        </div>
        <Sheet>
          <SheetTrigger className='block md:hidden mr-2'>Menu</SheetTrigger>
          <SheetContent>
              <ul className='font-light'>
                <Link href='./home'><li>Home</li></Link>
                <li>New & Featured</li>
                <Link href='./products'><li>Men</li></Link>
                <Link href='./products'><li>Women</li></Link>
                <li>Kids</li>
                <li>Sale</li>
                <li className='font-semibold'>SNKRS</li>
                <Link href='./cart'><li>cart</li></Link>
                <Link href='./checkout'><li>Checkout</li></Link>
                <Link href='./contact'><li>Contact</li></Link>
                <Link href='./products'><li>Products</li></Link>
                <Link href='./productDetail'><li>Product Details</li></Link>
                <Link href='./joinUs'><li>Join us</li></Link>
                <Link href='./login'><li>Ligin</li></Link>
              </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  )
}

export default Header