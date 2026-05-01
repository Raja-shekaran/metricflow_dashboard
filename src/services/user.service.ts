import { dummyJsonClient } from './api/clients/dummyJsonClient';

export const userService = {
  getUsers: () => dummyJsonClient.get('/users'),
};
