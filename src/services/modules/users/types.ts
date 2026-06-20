export type Users = {
  totalUsers: number;
  usersData: User[];
};

export type User = {
  firstName: string;
  lastName: string;
  age: number;
  address: {
    country: string;
  };
};

export type UserApiResponse = {
  total: number;
  users: User[];
};
