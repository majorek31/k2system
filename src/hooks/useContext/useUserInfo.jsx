import { useContext } from "react";
import { UserInfoContext } from "../../context/UserInfoContext";

// hook to get the context and show error if there is one

export const useUserInfo = () => {
  const context = useContext(UserInfoContext);

  if (context === undefined) {
    throw new Error("UseTheme() must be used inside a ThemeProvider");
  }

  return context;
};
