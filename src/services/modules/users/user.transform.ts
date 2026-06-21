import type { User, Users, UserApiResponse, UserByGender } from './types';

export const transformUsers = (response: UserApiResponse): Users => ({
  totalUsers: response.total,
  usersData: userByGender(response.users),
});

const userByGender = (users: User[]): UserByGender[] => {
  const genderCounts = users.reduce<Record<string, number>>((acc, user) => {
    acc[user.gender] = (acc[user.gender] ?? 0) + 1;
    return acc;
  }, {});
  return Object.entries(genderCounts).map(([gender, count]) => ({
    gender,
    count,
  }));
};
