import axios from 'axios';
import { API_CONFIG } from '../core/config';
import { onRequest, onResponse, onError } from '../core/interceptors';

export const dummyJsonClient = axios.create({
  baseURL: API_CONFIG.dummyJson.baseURL,
  timeout: API_CONFIG.timeout,
});

dummyJsonClient.interceptors.request.use(onRequest, onError);
dummyJsonClient.interceptors.response.use(onResponse, onError);
