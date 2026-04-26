import axios from 'axios';

const apiKey = import.meta.env.VITE_COIN_GECKO_API_KEY;

export const coinGeckoClient = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/',
  headers: {
    'x-cg-demo-api-key': apiKey,
  },
  timeout: 5000,
});

coinGeckoClient.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error('CoinGecko Error:', error);
    return Promise.reject(error);
  },
);
