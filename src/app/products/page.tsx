import Image from 'next/image'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Product } from '../../../type'
import { client } from '@/sanity/lib/client'
import ProductListing from '../components/productListing'

const Products = async () => {

  const query = `*[_type == "product"] | order(_createdAt asc)[0..22]{
    image, status, productName, category, colors, price, inventory, "slug": slug.current
  }`;
  
  const products: Product[] = await client.fetch(query);

  return (
    <div className='max-w-[1440px] mx-auto'>
      <div className='flex justify-between mx-2 md:mx-10'>
        <h3 className='hidden md:block'><strong>New (500)</strong></h3>
        <Sheet>
          <SheetTrigger className='block md:hidden'><strong>New (500) 👈</strong></SheetTrigger>
          <SheetContent side="left" className="max-h-[100vh] overflow-y-auto">
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
              <ul><strong>Gender</strong>
                <li className='ml-2'>Men</li>
                <li className='ml-2'>Women</li>
                <li className='ml-2'>Unisex</li>
              </ul>
              <br /><br />
              <ul><strong>Kids</strong>
                <li className='ml-2'>Boys</li>
                <li className='ml-2'>Girls</li>
              </ul>
              <br /><br />
              <ul><strong>Shop By Price</strong>
                <li className='ml-2'>Under &#8377;2 500.00</li>
                <li className='ml-2'>Under &#8377;2 501.00 - &#8377;</li>
              </ul>
            </ul>
          </SheetContent>
        </Sheet>
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
      <div className='grid md:grid-cols-[20%_auto] my-4 mx-5'>
        <ul className='hidden md:block'>
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
          <ul><strong>Gender</strong>
            <li className='ml-2'>Men</li>
            <li className='ml-2'>Women</li>
            <li className='ml-2'>Unisex</li>
          </ul>
          <br /><br />
          <ul><strong>Kids</strong>
            <li className='ml-2'>Boys</li>
            <li className='ml-2'>Girls</li>
          </ul>
          <br /><br />
          <ul><strong>Shop By Price</strong>
            <li className='ml-2'>Under &#8377;2 500.00</li>
            <li className='ml-2'>Under &#8377;2 501.00 - &#8377;</li>
          </ul>
        </ul>
        <ProductListing products={products} />
      </div>
    </div >
  )
}

export default Products
