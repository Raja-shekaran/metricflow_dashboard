import { useQuery } from '@tanstack/react-query';
import { transformProducts } from '../services/modules/products/products.transform';
import { productsService } from '../services/modules/products/products.service';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => productsService.getProducts(),
    select: transformProducts,
  });
};
