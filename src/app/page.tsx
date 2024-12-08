import React from 'react'
import HomePage from './home/page';
import Products from './products/page';
import ProductDetail from './productDetail/page';


const Page = () => {
  return (
    <div>
      <HomePage/>
      <Products/>
      <ProductDetail/>
    </div>
  )
}

export default Page