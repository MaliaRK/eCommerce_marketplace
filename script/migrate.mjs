import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN,
  apiVersion: '2021-08-31'
});


async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop()
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function importData() {                                 // code for migration
  try {
    console.log('Migrating data, please wait...');

    // API endpoint containing product data
    const response = await axios.get('https://template-03-api.vercel.app/api/products');              //API integration
    const products = response.data.data;

    for (const product of products) {
      let imageRef = null;
      if (product.image) {
        imageRef = await uploadImageToSanity(product.image);
      }
    
      const existingProduct = await client.fetch(
        `*[_type == "product" && productName == $productName][0]`,
        { productName: product.productName }
      );
    
      if (existingProduct) {
        // Update the slug for existing products
        await client.patch(existingProduct._id).set({
          slug: {
            _type: 'slug',
            current: product.productName.toLowerCase().replace(/\s+/g, '-'),
          },
        }).commit();
        console.log(`Updated slug for product "${product.productName}"`);
      } else {
        // Create new product if it doesn't exist
        const sanityProduct = {
          _type: 'product',
          productName: product.productName,
          category: product.category,
          price: product.price,
          inventory: product.inventory,
          colors: product.colors || [], // Optional, as per your schema
          status: product.status,
          description: product.description,
          image: imageRef
            ? {
                _type: 'image',
                asset: {
                  _type: 'reference',
                  _ref: imageRef,
                },
              }
            : undefined,
          slug: {
            _type: 'slug',
            current: product.productName.toLowerCase().replace(/\s+/g, '-'),
          },
        };
    
        await client.create(sanityProduct);
        console.log(`Added new product "${product.productName}"`);
      }
    }
    
  } catch (error) {
    console.error('Error in migrating data:', error);
  }
}

importData();
