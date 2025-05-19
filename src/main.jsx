import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext";
import { UserInfoProvider } from "./context/UserInfoContext";
import { AnimationProvider } from "./context/AnimationContext";
import { ContentProvider } from "./context/ContentContext";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <ContentProvider>
    <UserInfoProvider>
      <AnimationProvider>
        <ThemeProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </ThemeProvider>
      </AnimationProvider>
    </UserInfoProvider>
  </ContentProvider>,
);
