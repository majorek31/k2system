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
  const [scrollY, setScrollY] = useState(0);
  const [height, setHeight] = useState(0);
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    //get scroll position to compare with landing page height
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-smooth">
      <LandingPage setHeight={setHeight} height={height} />
      <BrowserRouter>
        <NavBar
          scrollY={scrollY}
          height={height}
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
