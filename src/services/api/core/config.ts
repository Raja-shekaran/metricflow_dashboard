export const API_CONFIG = {
  coinGecko: {
    baseURL: import.meta.env.VITE_COIN_GECKO_BASE_URL,
    apiKey: import.meta.env.VITE_COIN_GECKO_DEMO_API_KEY,
  },
  dummyJson: {
    baseURL: import.meta.env.VITE_DUMMY_JSON_BASE_URL,
  },
  timeout: 5000,
};
