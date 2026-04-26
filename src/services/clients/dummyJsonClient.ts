import axios from 'axios';

export const dummyJsonClient = axios.create({
  baseURL: 'https://dummyjson.com/',
  timeout: 5000,
});

dummyJsonClient.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error('DummyJSON Error:', error);
    return Promise.reject(error);
  },
);
