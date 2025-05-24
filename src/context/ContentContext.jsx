import React, { createContext, useContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [endpoint, setEndpoint] = useState(null);
  const baseUrl = "http://localhost:5000/content";
  const url = endpoint ? `${baseUrl}/${endpoint}` : null;

  const { data, isPending, error, doFetch } = useFetch(url, { method: "GET" }, true);
  const { doFetch: doUpdate } = useFetch();

  const loginData = JSON.parse(localStorage.getItem("loginData"));
  const decodedData = JSON.parse(localStorage.getItem("decodedData"));

  const refreshToken = async () => {
    const res = await fetch(`http://localhost:5000/auth/refresh?Token=${loginData.refreshToken}`);
    if (!res.ok) return null;
    const json = await res.json();
    localStorage.setItem("loginData", json.accessToken);
    localStorage.setItem("loginData", JSON.stringify({ ...loginData, accessToken: json.accessToken, exp: json.exp }));
    return json.accessToken;
  };

  const fetchContent = async (newEndpoint) => {
    setEndpoint(newEndpoint);
    if (!newEndpoint) return;
    await doFetch(`${baseUrl}/${newEndpoint}`, { method: "GET" });
  };

  const updateContent = async (updatedData) => {
    if (!endpoint || !updatedData.key) return null;

    let token = loginData.accessToken;
    const now = Math.floor(Date.now() / 1000);
    if (decodedData.exp < now) {
      token = await refreshToken();
      if (!token) return null;
    }

    const putUrl = `${baseUrl}/${endpoint}/${updatedData.key}`;

    await doUpdate(putUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: updatedData, 
    });

    await doFetch(url, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  return (
    <ContentContext.Provider value={{ data, isPending, error, fetchContent, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
