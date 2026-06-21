import type {
  Product,
  ProductCategory,
  Products,
  ProductsApiResponse,
} from './types';

export const transformProducts = (response: ProductsApiResponse): Products => ({
  totalProducts: response.total,
  productsData: countProductsByCategory(response.products),
});

const countProductsByCategory = (products: Product[]): ProductCategory[] => {
  const categoryCounts = products.reduce<Record<string, number>>(
    (acc, product) => {
      acc[product.category] = (acc[product.category] ?? 0) + 1;
      return acc;
    },
    {},
  );
  return Object.entries(categoryCounts).map(([category, count]) => ({
    category,
    count,
  }));
};
