import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../../type';
import { urlFor } from '@/sanity/lib/image';

const ProductListing = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <Link href={`/products/${product.slug}`} key={product.slug}>
          <div>
            <Image
              src={urlFor(product.image).url()}
              alt={product.productName}
              width={348}
              height={348}
            />
            <div>
              <span className="text-[#9E3500]">{product.status}</span>
              <h3><strong>{product.productName}</strong></h3>
              <p className="text-xs">
                {product.category} <br />
                {product.inventory} {product.colors?.join(', ')}
              </p>
              <h4><strong>MRP : ₹{product.price}</strong></h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductListing;
