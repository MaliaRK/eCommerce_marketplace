import { NextResponse } from 'next/server';
import { Product } from '../../../../type';
import { client } from '@/sanity/lib/client';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url); // Extract query params
    const q = searchParams.get('q'); // Get the 'q' parameter

    if (!q) {
        return NextResponse.json({ message: "Query parameter 'q' is required." }, { status: 400 });
    }

    // Sanitize the search term
    const searchTerm = q.trim().toLowerCase();

    // Example: Fetch data from Sanity
    const query = `*[_type == "product"]{
        productName,
        image,
        price,
        description,
        category,
        "slug": slug.current
    }`;
    const products: Product[] = await client.fetch(query);

    // Simple filtering logic
    const results = products.filter(product => 
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.productName.toLowerCase().includes(searchTerm)
    );

    if (results.length === 0) {
        return NextResponse.json({ message: "No results found" }, { status: 200 });
    }

    return NextResponse.json(results, { status: 200 });
}
