export type Product = {
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

interface Params {
    params: {
      slug: string;
    };
  };
  
