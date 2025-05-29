import { useState, useCallback } from "react";
import useAxios from "./useAxios";
import axiosLib from "axios";

export const useFetch = (
  defaultUrl = null,
  defaultOptions = {},
  manual = false,
) => {
  const axios = useAxios();
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const doFetch = useCallback(
    async (url = defaultUrl, customOptions = {}) => {
      if (!url) return null;

      setIsPending(true);
      setError(null);

      try {
        const method = customOptions.method || defaultOptions.method || "GET";
        const headers = {
          "Content-Type": "application/json",
          ...(defaultOptions.headers || {}),
          ...(customOptions.headers || {}),
        };

        const response = await axios({
          url,
          method,
          headers,
          data: customOptions.body || defaultOptions.body || undefined,
        });

        setData(response.data);
        return response.data;
      } catch (err) {
        if (!axiosLib.isCancel(err)) {
          // Tu ustawiamy CAŁY response jako error, nie tylko message
          setError(err.response.data.errors || { message: err.message });
        }
        return null;
      } finally {
        setIsPending(false);
      }
    },
    [axios, defaultUrl, defaultOptions],
  );

  return { data, isPending, error, doFetch };
};
