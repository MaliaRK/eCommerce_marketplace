import React from 'react'
import { Product } from '../../../../type';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

const NewFeatures = async () => {
  const query = `*[_type == "product" && category != "Men's Shoes" && category != "Women's Shoes"]{
        productName,
        image,
        price,
        description,
        category,
        "slug": slug.current
      }`

  const newFeatures: Product[] = await client.fetch(query);
  console.log(newFeatures);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {newFeatures.filter(product => product.productName && product.image && product.slug)
      .map((product) => {
        return (
          <Link href={`/products/${product.slug}`} key={product.slug}>
            <div>
              <Image
                src={urlFor(product.image).url()}
                alt={product.productName}
                width={348}
                height={10}
              />
              <div>
                <span className="text-[#9E3500]">{product.status}</span>
                <h3>
                  <strong>{product.productName}</strong>
                </h3>
                <p className="text-xs">
                  {product.category} <br />
                  {product.inventory} {product.colors?.join(', ')}
                </p>
                <h4>
                  <strong>MRP : &#8377;{product.price}</strong>
                </h4>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default NewFeatures;
