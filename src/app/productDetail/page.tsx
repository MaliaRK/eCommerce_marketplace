import React from 'react'
import Image from 'next/image'

const ProductDetail = () => {
  return (
    <div className='max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-[50%_auto] '> 
        <Image src='/1.png' alt='hero' width={653} height={10}></Image>
        <div className='my-auto mx-[10%] '>
            <h3 className='text-2xl'><strong>Nike Air Force 1 PLT.AF.ORM</strong></h3>
            <p className='my-4 text-xs'>Turn style on its head with this crafted take on the Air 
                Jordan 1 Mid. Its &quot;inside out&quot;-inspired
                construction, including unique layering and exposed foam
                accents, ups the ante on this timeless Jordan Brand silhouette.
                Details like the deco stitching on the Swoosh add coveted appeal,
                while the unexpected shading, rich mixture of material and aged 
                midsole aesthetic give this release an artisan finish.
            </p>
            <h4 className='text-xl'><strong>&#8377;8 695.00</strong></h4>
            
            <button className='bg-black text-white rounded-full px-4 py-1 my-3 flex gap-1 items-center'>
                <Image src='/cart.png' alt='add to cart' width={29} height={10}></Image>
                Add To Cart
            </button>
        </div>
    </div>
  )
}

export default ProductDetail