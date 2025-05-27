import React, { createContext, useContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { useValidToken } from "../hooks/useValidToken";
import { useUserInfo } from "../hooks/useContext/useUserInfo";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [endpoint, setEndpoint] = useState(null);
  const { isAdmin, isEditable, languageInUse } = useUserInfo();
  const baseUrl = "/content";
  const url = endpoint && languageInUse ? `${baseUrl}/${endpoint}?lang=${languageInUse}` : null;

  const { data, isPending, error, doFetch } = useFetch(url, { method: "GET" }, true);
  const { doFetch: doUpdate } = useFetch();
  const { getToken } = useValidToken();

  useEffect(() => {
    if (endpoint && languageInUse) {
      doFetch(`${baseUrl}/${endpoint}?lang=${languageInUse}`, {
        method: "GET",
      });
    }
  }, [endpoint, languageInUse]);

  const fetchContent = async (newEndpoint) => {
    if (!newEndpoint) return;
    setEndpoint(newEndpoint);
  };

  const updateContent = async (updatedData) => {
    if (!endpoint || !updatedData.key) return null;

    const token = await getToken();
    if (!token) return null;

    const putUrl = `${baseUrl}/${endpoint}/${updatedData.key}?lang=${languageInUse}`;

    await doUpdate(putUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: updatedData,
    });

    // Odśwież dane
    doFetch(`${baseUrl}/${endpoint}?lang=${languageInUse}`, {
      method: "GET",
    });
  };

  return (
    <ContentContext.Provider value={{ data, isPending, error, fetchContent, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
