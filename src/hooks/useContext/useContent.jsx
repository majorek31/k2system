import { useContext } from "react";
import { ContentContext } from "../../context/ContentContext"; 

export const useContent = () => {
  const context = useContext(ContentContext);

  if (!context) {
    throw new Error("useContent musi być używany wewnątrz ContentProvidera!");
  }

  const { data, isPending, error, fetchContent, updateContent } = context;

  const putWithLogging = async (updatedData) => {
    return await updateContent(updatedData);
  };

  return {
    data,
    isPending,
    error,
    fetchContent,
    updateContent: putWithLogging,
  };
};
