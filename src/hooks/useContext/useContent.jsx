import { useContext } from "react";
import { ContentContext } from "../../context/ContentContext"; // <- ścieżka zależy gdzie trzymasz ten kontekst

export const useContent = () => {
  const context = useContext(ContentContext);

  if (!context) {
    throw new Error("useContent musi być używany wewnątrz ContentProvidera!");
  }

  const { data, isPending, error, fetchContent, updateContent } = context;

  // 💥 Można tu coś jeszcze dopierdolić np. logi, toasty itd.
  const putWithLogging = async (updatedData) => {
    console.log("PUT request leci z danymi:", updatedData);
    return await updateContent(updatedData);
  };

  return {
    data,
    isPending,
    error,
    fetchContent,
    updateContent: putWithLogging, // nadpisujemy nazwę
  };
};
