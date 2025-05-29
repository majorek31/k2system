import * as jose from "jose";
import useAxios from "./useAxios";

export const useValidToken = () => {
  const axios = useAxios();

  const getToken = async () => {
    const loginData = JSON.parse(localStorage.getItem("loginData"));
    const decodedData = JSON.parse(localStorage.getItem("decodedData"));
    const now = Math.floor(Date.now() / 1000);

    if (!loginData || !decodedData) return null;

    if (decodedData.exp < now) {
      console.log("NOWY TOKEN");

      try {
        const res = await axios.get("/auth/refresh", {
          params: { Token: loginData.refreshToken },
        });

        if (res.status !== 200) return null;

        const json = res.data;
        const decoded = jose.decodeJwt(json.accessToken);

        localStorage.setItem("loginData", JSON.stringify(json));
        localStorage.setItem("decodedData", JSON.stringify(decoded));

        return json.accessToken;
      } catch (error) {
        console.error("Error refreshing token:", error);
        return null;
      }
    }

    return loginData.accessToken;
  };

  return { getToken };
};
