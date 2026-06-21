export type Products = {
  totalProducts: number;
  productsData: ProductCategory[];
};

export type ProductCategory = {
  category: string;
  count: number;
};

export type Product = {
  category: string;
};

export type ProductsApiResponse = {
  total: number;
  products: Product[];
};
