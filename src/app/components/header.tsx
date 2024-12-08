import React from 'react'
import Image from 'next/image'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'

const Header = () => {
  return (
    <div className='max-w-[1500px] mx-auto'>
      <div className='flex justify-between bg-[#cccccc] p-2'>
          <Image src='/human.png' alt='human' width={24} height={10}></Image>
          <p>Skip to main content</p>
          <ul className='flex gap-5'>
              <li>Find a Store</li>
              <li>Help</li>
              <li>Join Us</li>
              <li>Sign In</li>
          </ul>
      </div>
    <nav className='flex justify-between items-center mt-5'>
        <Image src='/logo.png' alt='logo' width={58} height={20}></Image>       
        <ul className='gap-5 font-semibold hidden md:flex'>
            <li>New & Featured</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Sale</li>
            <li>SNKRS</li>
        </ul> 
        <div className='flex gap-2'>
          <div className='flex gap-1 bg-[#cccccc] p-1 rounded-full '>
            <Image src='/search.png' alt='search' width={40} height={36}></Image>
            <input type='text' placeholder='Search' className='bg-transparent border-none outline-none' />
          </div>
          <Image src='/wishlist.png' alt='wishlist' width={36} height={24}></Image>
          <Image src='/bag.png' alt='bag' width={36} height={24}></Image>
        </div>
        <Sheet>
          <SheetTrigger className='md:hidden'>Menu</SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]">
              <ul>
                <li>New & Featured</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Sale</li>
                <li>SNKRS</li>
              </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  )
}

export default Header