import { useEffect, useState } from 'react';

const useFakeFetch = resolvedData => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;
    setTimeout(() => {
      if (isMounted) {
        setData(resolvedData);
        setLoading(false);
      }
    }, 500);

    return () => (isMounted = false);
  }, [resolvedData]);

  return { loading, setLoading, data, setData };
};

export default useFakeFetch;
