import React, { createContext, useContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [endpoint, setEndpoint] = useState(null);
  // url do GET-ów i PUT-ów
  const baseUrl = "http://localhost:5000/content";
  const url = endpoint ? `${baseUrl}/${endpoint}` : null;

  // manual = true, bo chcemy mieć kontrolę kiedy fetchujemy
  const { data, isPending, error, doFetch } = useFetch(url, { method: "GET" }, true);

  // Funkcja do GET — fetchujemy dane z API i ustawiamy je w stanie hooka
  const fetchContent = async (newEndpoint) => {
    setEndpoint(newEndpoint);
    if (!newEndpoint) return;
    await doFetch(`${baseUrl}/${newEndpoint}`, { method: "GET" });
  };

  // Funkcja do PUT — aktualizacja contentu
const updateContent = async (updatedData) => {
  if (!endpoint || !updatedData.key) return null;
  const putUrl = `${baseUrl}/${endpoint}/${updatedData.key}`; // tu dokładny URL

  const response = await doFetch(putUrl, {
    method: "PUT",
    body: updatedData,
  });
  // Po update można odświeżyć dane:
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
