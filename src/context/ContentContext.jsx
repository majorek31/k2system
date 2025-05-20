import React, { createContext, useContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [endpoint, setEndpoint] = useState(null);
  const baseUrl = "http://localhost:5000/content";
  const url = endpoint ? `${baseUrl}/${endpoint}` : null;

  const { data, isPending, error, doFetch } = useFetch(url, { method: "GET" }, true);

  const accessToken = localStorage.getItem("accessToken"); // przykładowo

  const fetchContent = async (newEndpoint) => {
    setEndpoint(newEndpoint);
    if (!newEndpoint) return;
    await doFetch(`${baseUrl}/${newEndpoint}`, { method: "GET" });
  };

  const updateContent = async (updatedData) => {
    if (!endpoint || !updatedData.key) return null;
    const putUrl = `${baseUrl}/${endpoint}/${updatedData.key}`;

    const response = await doFetch(putUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
      },
      body: updatedData,
    });

    // Odświeżenie danych po update
    await doFetch(url, { method: "GET" });
    return response;
  };

  return (
    <ContentContext.Provider value={{ data, isPending, error, fetchContent, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  return useContext(ContentContext);
};
