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