//react
import { createContext, useState, useEffect } from "react";

export const UserInfoContext = createContext();

export function UserInfoProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [showLogInfo, setShowLogInfo] = useState(false);
  const [showLogOutInfo, setShowLogOutInfo] = useState(false);
  const [userInfo, setUserInfo] = useState(() => {
    const storedData = localStorage.getItem("userData");
    return storedData ? JSON.parse(storedData) : null;
  });

  const [loginData, setLoginData] = useState(() => {
    const storedData = localStorage.getItem("loginData");
    return storedData ? JSON.parse(storedData) : null;
  });

  const [userDecodedInfo, setUserDecodedInfo] = useState(() => {
    const storedData = localStorage.getItem("decodedData");
    return storedData ? JSON.parse(storedData) : null;
  });

  useEffect(() => {
    const admin = userInfo?.scopes?.some(scope => scope.value === "admin")

    if (userInfo) {
      setIsLogged(true);
      if (admin) {
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
    console.log("Admin:", isAdmin, "Logged:", isLogged, "UserInfo:", userInfo, "loginData", loginData, "userDecodedInfo", userDecodedInfo);
  }, [isAdmin, isLogged, userInfo, loginData]);

  return (
    <UserInfoContext.Provider
      value={{
        isLogged, setIsLogged,
        isAdmin, setIsAdmin,
        userInfo, setUserInfo,
        showLogInfo, setShowLogInfo,
        showLogOutInfo, setShowLogOutInfo,
        loginData, setLoginData,
        userDecodedInfo, setUserDecodedInfo
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
}
