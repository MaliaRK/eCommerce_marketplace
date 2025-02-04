import { defineType } from "sanity";

export const productSchema = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'productName',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'slug',                 // add slug field for dynamic routing
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'productName',
        maxLength: 200,
      },
    },
    {
      name: 'inventory',
      title: 'Inventory',
      type: 'number',
    },
    {
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image', // Using Sanity's image type for image field
      options: {
        hotspot: true,
      },
    },
    {
      name: 'rating',            //add rates field
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(5),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'productId',         // Add productId field
      title: 'Product ID',
      type: 'string',
      initialValue: () => {
        return Math.random().toString(36).substr(2, 9);  // Generates a random string
      },
      readOnly: true,  // Optionally, make it read-only
    },
  ],
});
