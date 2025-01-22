// 'use client'

// import React, { useEffect, useState } from 'react';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import { Product } from '../../../../type';
// import Link from 'next/link';
// import Image from 'next/image'
// import CartProps from '@/app/components/cartProps';
// import { useRouter } from 'next/navigation';

// const ProductDetail = ({ params: { slug } }: { params: { slug: string } }) => {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [cartItems, setCartItems] = useState<Product[] | []>([]);
//   const router = useRouter();
  
//   useEffect(() => {
//     const fetchProductData = async () => {
//       const query = `*[_type == "product" && slug.current == $slug][0]{                             // product detail page
//         productName,
//         image,
//         price,
//         description
//       }`;

//       const params = { slug };

//       try {
//         const productData = await client.fetch(query, params);
//         setProduct(productData);
//       } catch (error) {
//         console.error('Failed to fetching product data:', error);
//       }
//     };

//     fetchProductData();
//   }, [slug]);

//   function handleSearch() {
//     if(product) {
//       console.log(product);
//       setCartItems([product]);
//       router.push(`/cart`);
//     }
//   }

//   if (!product) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className='max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-[40%_auto] '>
//       <Image
//         src={urlFor(product.image).url()}
//         alt={product.productName}
//         width={300}
//         height={10}
//         className="mx-auto rounded-lg"
//       />
//       <div className='mx-10 mt-10 md:my-auto'>
//         <h3 className='text-2xl'><strong>{product.productName}</strong></h3>
//         <p className='my-4 text-s'>{product.description}</p>
//         <p className='text-xl'><strong>&#8377;{product.price}</strong></p>
//         <button onClick={handleSearch} className='bg-black text-white rounded-full px-4 py-1 my-3 flex gap-1 items-center'>
//           <Image src='/cart.png' alt='add to cart' width={29} height={10}></Image>
//           Add To Cart
//         </button>
//         <CartProps  text={product?.productName} />
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;





'use client'

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Product } from '../../../../type';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const ProductDetail = ({ params: { slug } }: { params: { slug: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<string | "">("");
  const router = useRouter();
  
  useEffect(() => {
    const fetchProductData = async () => {
      const query = `*[_type == "product" && slug.current == $slug][0]{                             // product detail page
        productName,
        image,
        price,
        description
      }`;

      const params = { slug };

      try {
        const productData = await client.fetch(query, params);
        setProduct(productData);
      } catch (error) {
        console.error('Failed to fetching product data:', error);
      }
    };

    fetchProductData();
  }, [slug]);


    //  function handleSearch() {
    //     if(product) {
    //       console.log(product);
    //       setCartItems([product]);
    //       router.push(`/cart`);
    //     }
    //   }

  // function handleClick() {
  //   if (product) {
  //     const taregtProduct = product.productName;
  //     setCartItems(taregtProduct);
  //     router.push(`/cart/${encodeURIComponent(cartItems)}`)
  //   }
  // }

  // console.log(ca   rtItems);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className='max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-[40%_auto] '>
      <Image
        src={urlFor(product.image).url()}
        alt={product.productName}
        width={300}
        height={10}
        className="mx-auto rounded-lg"
      />
      <div className='mx-10 mt-10 md:my-auto'>
        <h3 className='text-2xl'><strong>{product.productName}</strong></h3>
        <p className='my-4 text-s'>{product.description}</p>
        <p className='text-xl'><strong>&#8377;{product.price}</strong></p>
        <button className='bg-black text-white rounded-full px-4 py-1 my-3 flex gap-1 items-center'>
          <Image src='/cart.png' alt='add to cart' width={29} height={10}></Image>
          Add To Cart
        </button>
        {/* <CartProps  text={product?.productName} /> */}
      </div>
    </div>
  );
};

export default ProductDetail;



