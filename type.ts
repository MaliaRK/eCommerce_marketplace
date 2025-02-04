export type Product = {
  _id: string;
  productName: string;
  image: any;
  price: number;
  slug: string;
  category: string;
  colors: string[];
  rate: number;
  description: string;
  inventory: number;
  status: string;
  quantity: number;
  uid: number | string | undefined;
}

export interface CartSummaryProps {
  products: Product[];
  subTotal: number;
  showCheckoutLink?: boolean; // Optional: Only show checkout link if needed
}
