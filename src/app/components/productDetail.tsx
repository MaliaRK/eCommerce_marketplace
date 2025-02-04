'use client';

import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { Product } from '../../../type';

const ProductDetail = ({ product }: { product: Product }) => {
  const { user } = useUser();
  const router = useRouter();

  const handleClick = (product: Product) => {
    if (!user) {
      router.push('/sign-in');
      return;
    }

    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    if (cart[product.productName]) {
      cart[product.productName].quantity += 1;
    } else {
      cart[product.productName] = { ...product, quantity: 1 };
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    console.log(cart);
  };

  return (
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-[40%_auto]">
      <Image
        src={urlFor(product.image).url()}
        alt={product.productName}
        width={300}
        height={300}
        className="mx-auto rounded-lg"
      />
      <div className="mt-10 md:my-auto">
        <h3 className="text-2xl">
          <strong>{product.productName}</strong>
        </h3>
        <p className="my-4 text-s">{product.category}</p>
        <p className="my-4 text-s">{product.description}</p>
        <p className="text-xl">
          <strong>&#8377;{product.price}</strong>
        </p>
        <button
          onClick={() => handleClick(product)}
          className="bg-black text-white rounded-full px-4 py-1 my-3 flex gap-1 items-center hover:bg-gray-800 active:scale-95 duration-200"
        >
          <Image src="/cart.png" alt="add to cart" width={29} height={29} />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
