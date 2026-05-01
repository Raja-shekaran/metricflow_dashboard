import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

export const onRequest = (config: InternalAxiosRequestConfig) => {
  const url = `${config.baseURL || ''}${config.url || ''}`;
  console.log(`[REQUEST] ${config.method?.toUpperCase()} ${url}`);

  return config;
};

export const onResponse = (response: AxiosResponse) => {
  console.log('[RESPONSE]', {
    url: response.config.url,
    status: response.status,
    data: response.data,
  });
  return response;
};

export const onError = (error: AxiosError) => {
  let message = 'Something went wrong';

  if (error.response) {
    const data = error.response.data as { message?: string } | undefined;
    message = data?.message || `Error ${error.response.status}`;
  } else if (error.request) {
    message = 'No response from server';
  } else {
    message = error.message;
  }

  console.error(`[API ERROR] ${message}`);

  return Promise.reject(error);
};
