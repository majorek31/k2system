//react
import { createContext, useState, useEffect } from "react";

export const UserInfoContext = createContext();

export function UserInfoProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (userInfo || token) {
      setIsLogged(true);
      if (userInfo?.scope?.includes("admin") || token) {
        setIsAdmin(true)
      } else {
        setIsAdmin(false)
      }
    } else {
      setIsLogged(false);
      setIsAdmin(false);
    }
  }, [userInfo]);

  useEffect(() => {
    console.log("Admin:", isAdmin, "Logged:", isLogged, "UserInfo:", userInfo);
  }, [isAdmin, isLogged, userInfo]);


  return (
    <UserInfoContext.Provider
      value={{ isLogged, setIsLogged, isAdmin, setIsAdmin, setUserInfo, userInfo }}
    >
      {children}
    </UserInfoContext.Provider>
  );
}