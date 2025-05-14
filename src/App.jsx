//react
import { useState, useRef } from "react";

//react router
import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import LandingPage from "./components/landingPage";
import NavBar from "./components/NavBar";
import FooterPage from "./components/FooterPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DeliveryPage from "./pages/DeliveryPage";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import ServicePage from "./pages/ServicePage";
import SettingsPage from "./pages/SettingsPage";
import ShopPage from "./pages/ShopPage";

function App() {
  const boxRef = useRef(null);
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <div ref={boxRef} className="overflow-hidden scroll-smooth">
      <div className="fixed top-0 left-0 -z-10 h-screen w-screen bg-[url('./public/backgrounds/wave_background.png')] bg-cover"></div>
      <div className="relative">
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
        <FooterPage/>
      </div>
    </div>
  );
}

export default App;
