import type { Users, UserApiResponse } from './types';

export const transformUsers = (data: UserApiResponse): Users => {
  return {
    total: data.total,
  };
};
