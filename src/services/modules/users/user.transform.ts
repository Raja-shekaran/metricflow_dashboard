import type { User, UserApiResponse } from './types';

export const transformUser = (data: UserApiResponse): User => {
  return {
    firstName: data.firstName,
    lastName: data.lastName,
    age: data.age,
    country: data.address.country,
  };
};
