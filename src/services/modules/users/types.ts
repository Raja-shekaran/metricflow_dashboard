export type Users = {
  totalUsers: number;
  usersData: UserByGender[];
};

export type UserByGender = {
  gender: string;
  count: number;
};

export type User = {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  address: {
    country: string;
  };
};

export type UserApiResponse = {
  total: number;
  users: User[];
};
