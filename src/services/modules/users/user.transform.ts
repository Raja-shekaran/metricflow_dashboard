import type { Users, UserApiResponse } from './types';

export const transformUsers = (response: UserApiResponse): Users => ({
  totalUsers: response.total,
  usersData: response.users,
});
