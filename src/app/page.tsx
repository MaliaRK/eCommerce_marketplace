import React from 'react'
import HomePage from './home/page';
import { Metadata } from 'next';

const Page = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <HomePage/>
    </div>
  )
}

export default Page


export const metadata: Metadata = {
  title: 'Nike - eCommerce',
  description: 'Buy online with eCommerce platform',
}
