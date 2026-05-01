import axios from 'axios';
import { API_CONFIG } from '../core/config';
import { onRequest, onResponse, onError } from '../core/interceptors';

export const coinGeckoClient = axios.create({
  baseURL: API_CONFIG.coinGecko.baseURL,
  headers: {
    'x-cg-demo-api-key': API_CONFIG.coinGecko.apiKey,
  },
  timeout: API_CONFIG.timeout,
});

coinGeckoClient.interceptors.request.use(onRequest, onError);
coinGeckoClient.interceptors.response.use(onResponse, onError);
