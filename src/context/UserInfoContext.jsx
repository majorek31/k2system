//react
import { createContext, useState } from "react";

export const UserInfoContext = createContext();

export function UserInfoProvider({ children }) {
  const [isLogged, setIsLogged] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <UserInfoContext.Provider
      value={{ isLogged, isAdmin, setIsLogged, setIsAdmin }}
    >
      {children}
    </UserInfoContext.Provider>
  );
}
