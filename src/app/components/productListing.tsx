'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Product } from '../../../type'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

const ProductListing = () => {
    const [products, setProducts] = useState<Product[] | []>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const query = `*[_type == "product"] | order(_createdAt asc)[0..22]{
          image, status, productName, category, colors, price, inventory, "slug": slug.current
        }`;

                const res: Product[] = await client.fetch(query);
                setProducts(res);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []); // Run once on mount

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => {
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
                );
            })}
        </div>
    )
}

export default ProductListing;
