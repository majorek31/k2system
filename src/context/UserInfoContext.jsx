//react
import { createContext, useState, useEffect } from "react";

export const UserInfoContext = createContext();

export function UserInfoProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [userInfo, setUserInfo] = useState(
    localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : null,
  );

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (userInfo || token) {
      setIsLogged(true);
      if (token) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
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
      value={{
        isLogged,
        setIsLogged,
        isAdmin,
        setIsAdmin,
        setUserInfo,
        userInfo,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
}
