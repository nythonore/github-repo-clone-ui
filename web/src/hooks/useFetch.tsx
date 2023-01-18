import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { http } from '../utils';

export function useFetch<T>(url: string) {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const func = async () => {
      setLoading(true);
      setData(null);
      setError(null);

      try {
        const response = await http.get(url);
        setData(response.data);
      } catch (err) {
        setError(err as AxiosError);
      }

      setLoading(false);
    };

    func();
  }, [url]);

  return { loading, data, error };
}
