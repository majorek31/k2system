import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext";
import { UserInfoProvider } from "./context/UserInfoContext";
import { AnimationProvider } from "./context/AnimationContext";
import { WordProvider } from "./context/WordContext";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <UserInfoProvider>
    <WordProvider>
      <AnimationProvider>
        <ThemeProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </ThemeProvider>
      </AnimationProvider>
    </WordProvider>,
  </UserInfoProvider>,
);
