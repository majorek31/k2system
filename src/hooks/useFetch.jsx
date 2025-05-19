import { useState, useCallback } from "react";

export const useFetch = (defaultUrl = null, defaultOptions = {}, manual = false) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const doFetch = useCallback(async (url = defaultUrl, customOptions = {}) => {
    if (!url) return null;

    setIsPending(true);
    setError(null);

    const fetchOptions = {
      method: customOptions.method || defaultOptions.method || "GET",
      headers: {
        "Content-Type": "application/json",
        ...(customOptions.headers || defaultOptions.headers || {}),
      },
      signal: (new AbortController()).signal,
    };

    if (customOptions.body) {
      fetchOptions.body = JSON.stringify(customOptions.body);
    }

    try {
      const res = await fetch(url, fetchOptions);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const text = await res.text();
      const parsedData = text ? JSON.parse(text) : null;

      setData(parsedData);
      setIsPending(false);
      return parsedData;
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
      setIsPending(false);
      return null;
    }
  }, [defaultUrl, defaultOptions.method, defaultOptions.headers]);

  // Jeśli manual = false i jest url, to fetchuj od razu (nie musisz tego robić, ale możesz)
  // useEffect(() => {
  //   if (!manual && defaultUrl) {
  //     doFetch(defaultUrl, defaultOptions);
  //   }
  // }, [defaultUrl, defaultOptions, manual, doFetch]);

  return { data, isPending, error, doFetch };
};
