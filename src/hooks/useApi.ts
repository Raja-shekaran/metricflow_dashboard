import { useState } from 'react';
import { AxiosError } from 'axios';

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const request = async <T>(apiCall: () => Promise<T>): Promise<T> => {
    try {
      setLoading(true);
      setError(null);
      return await apiCall();
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err);
      } else {
        setError(null);
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };
  return { request, loading, error };
};
