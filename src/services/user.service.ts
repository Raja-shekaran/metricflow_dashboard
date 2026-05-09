import { dummyJsonClient } from './api/clients/dummyJsonClient';

export const userService = {
  getUsers: async () => {
    const response = await dummyJsonClient.get('/users');
    return response.data;
  },
};
