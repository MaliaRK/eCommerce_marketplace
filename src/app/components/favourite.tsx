'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Product } from '../../../type';

const FavouriteProduct = () => {
  const [favProduct, setFavProduct] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "product"] | order(_createdAt asc)[0..1] {
        productName,
        image,
        price,
        "slug": slug.current
      }`;
      const data: Product[] = await client.fetch(query);
      setFavProduct(data);
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {favProduct.map((product) => (
        <Link href={`/products/${product.slug}`} key={product.slug}>
          <div>
            <Image
              src={urlFor(product.image).url()}
              alt={product.productName}
              width={348}
              height={10}
            />
            <div>
              <h3><strong>{product.productName}</strong></h3>
              <h4><strong>MRP : &#8377;{product.price}</strong> </h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FavouriteProduct;
