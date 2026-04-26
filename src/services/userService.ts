import { dummyJsonClient } from './clients/dummyJsonClient';

export const userService = {
  getUsers: () => dummyJsonClient.get('/users'),
};
