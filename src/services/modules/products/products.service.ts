import { dummyJsonClient } from '../../api/clients/dummyJsonClient';

export const productsService = {
  getProducts: async () => {
    const response = await dummyJsonClient.get('/products');
    return response.data;
  },
};
