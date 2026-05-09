export type User = {
  firstName: string;
  lastName: string;
  age: number;
  country: string;
};

export type UserApiResponse = {
  firstName: string;
  lastName: string;
  age: number;
  address: {
    country: string;
  };
};
