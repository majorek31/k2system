import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./components/landingPage";
import NavBar from "./components/NavBar";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DeliveryPage from "./pages/DeliveryPage";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import ServicePage from "./pages/ServicePage";
import SettingsPage from "./pages/SettingsPage";
import ShopPage from "./pages/ShopPage";

function App() {
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <div className="overflow-y-scroll scroll-smooth">
      <LandingPage />
      <BrowserRouter>
        <NavBar
          className="sticky top-0 z-50"
          setShowNavBar={setShowNavBar}
          showNavBar={showNavBar}
        />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
      <div className="h-1000">
        {/* content later */}
        {/* https://examples.motion.dev/ */}
      </div>
    </div>
  );
  <br />;
}

export default App;
