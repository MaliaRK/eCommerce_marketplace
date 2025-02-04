// 'use client';
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useUser } from '@clerk/nextjs';
// import { Product } from '../../../../type';
// import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/image';
// import { client } from '@/sanity/lib/client';

// const ProductDetail = ({ params: { slug } }: { params: { slug: string } }) => {
//   const [product, setProduct] = useState<Product | null>(null);
//   const { user } = useUser();
//   const router = useRouter();

//   useEffect(() => {
//     const fetchProductData = async () => {
//       const query = `*[_type == "product" && slug.current == $slug][0]{ 
//         productName, category, image, price, description, _id
//       }`;

//       const params = { slug };

//       try {
//         const productData = await client.fetch(query, params);
//         setProduct(productData);
//       } catch (error) {
//         console.error('Failed to fetch product data:', error);
//       }
//     };

//     fetchProductData();
//   }, [slug]);

//   if (!product) {
//     return <p>Loading...</p>;
//   }

//   const handleClick = (product: Product) => {
//     if (!user) {
//       // Use Router for redirection
//       router.push('/sign-in');
//       return;
//     }

//     // Handle adding product to cart
//     const cart = JSON.parse(localStorage.getItem('cart') || '{}');
//     if (cart[product.productName]) {
//       cart[product.productName].quantity += 1;
//     } else {
//       cart[product.productName] = { ...product, quantity: 1 };
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));

//     // Dispatch a custom event to notify cart updates
//     window.dispatchEvent(new Event('cartUpdated'));

//     console.log(cart);
//     // alert(`${product.productName} has been added to the cart!`);
//   };

//   return (
//     <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-[40%_auto]">
//       <Image
//         src={urlFor(product.image).url()}
//         alt={product.productName}
//         width={300}
//         height={10}
//         className="mx-auto rounded-lg"
//       />
//       <div className="mt-10 md:my-auto">
//         <h3 className="text-2xl">
//           <strong>{product.productName}</strong>
//         </h3>
//         <p className="my-4 text-s">{product.category}</p>
//         <p className="my-4 text-s">{product.description}</p>
//         <p className="text-xl">
//           <strong>&#8377;{product.price}</strong>
//         </p>
//         <button
//           onClick={() => handleClick(product)}
//           className="bg-black text-white rounded-full px-4 py-1 my-3 flex gap-1 items-center hover:bg-gray-800 active:scale-95 duration-200"
//         >
//           <Image src="/cart.png" alt="add to cart" width={29} height={10} />
//           Add To Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;


import { client } from '@/sanity/lib/client';
import { Product } from '../../../../type';
import ProductDetail from '@/app/components/productDetail';

export const revalidate = 60; // Revalidate every 60 seconds for ISR

const ProductDetailPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const query = `*[_type == "product" && slug.current == $slug][0]{ 
    productName, category, image, price, description, _id
  }`;

  const product: Product | null = await client.fetch(query, { slug });

  if (!product) {
    return <p>Product not found</p>;
  }

  return <ProductDetail product={product} />;
};

export default ProductDetailPage;










// const handleClick = (product: Product) => {
//   if (!user) {
//     // Redirect to Clerk's sign-in page if user is not authenticated
//     <RedirectToSignIn/>; // This will navigate to the sign-in page
//     // return;
//   }

//   // Handle adding product to cart for authenticated users
//   const cart = JSON.parse(localStorage.getItem('cart') || '{}');
//   if (cart[product.productName]) {
//     cart[product.productName] = {
//       ...cart[product.productName],
//       quantity: cart[product.productName].quantity + 1,
//     };
//   } else {
//     cart[product.productName] = { ...product, quantity: 1 };
//   }

//   localStorage.setItem('cart', JSON.stringify(cart));
//   console.log(cart);
//   alert(`${product.productName} has been added to the cart!`);
// };