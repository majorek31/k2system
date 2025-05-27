// useAxios.ts
import axios from "axios";

const useAxios = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true, 
  });

  return instance;
};

export default useAxios;
