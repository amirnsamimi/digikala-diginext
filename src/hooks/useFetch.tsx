import { useState, useEffect } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T,>(
  url: string,
  initialData: T | null = null
): FetchState<T> => {
  const [data, setData] = useState<T | null>(initialData);
  const [loading, setLoading] = useState<boolean>(!initialData);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!initialData) {
      const fetchData = async () => {
        try {
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const result: T = await response.json();
          setData(result);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [url, initialData]);

  return { data, loading, error };
};

export default useFetch;
