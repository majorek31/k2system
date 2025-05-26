import * as jose from "jose";

export const useValidToken = () => {
  const getToken = async () => {
    const loginData = JSON.parse(localStorage.getItem("loginData"));
    const decodedData = JSON.parse(localStorage.getItem("decodedData"));
    const now = Math.floor(Date.now() / 1000);

    if (!loginData || !decodedData) return null;

    if (decodedData.exp < now) {
        console.log("NOWY TOKEN")
      const res = await fetch(
        `http://localhost:5000/auth/refresh?Token=${loginData.refreshToken}`,
      );
      if (!res.ok) return null;

      const json = await res.json();
      const decoded = jose.decodeJwt(json.accessToken);

      localStorage.setItem("loginData", JSON.stringify(json));
      localStorage.setItem("decodedData", JSON.stringify(decoded));

      return json.accessToken;
    }

    return loginData.accessToken;
  };

  return { getToken };
};
