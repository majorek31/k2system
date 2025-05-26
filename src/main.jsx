import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext";
import { UserInfoProvider } from "./context/UserInfoContext";
import { AnimationProvider } from "./context/AnimationContext";
import { ContentProvider } from "./context/ContentContext";
import { ShopProvider } from "./context/ShopContext";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <UserInfoProvider>
    <ShopProvider>
      <ContentProvider>
        <AnimationProvider>
          <ThemeProvider>
            <StrictMode>
              <App />
            </StrictMode>
          </ThemeProvider>
        </AnimationProvider>
      </ContentProvider>
    </ShopProvider>,
  </UserInfoProvider>,
);
