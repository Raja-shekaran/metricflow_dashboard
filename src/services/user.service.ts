import { dummyJsonClient } from './api/dummyJsonClient';

export const userService = {
  getUsers: () => dummyJsonClient.get('/users'),
};
