//react
import { useState, useRef, useEffect } from "react";

//react router
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

//components
import NavBar from "./components/NavBar";
import FooterPage from "./components/FooterPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DeliveryPage from "./pages/DeliveryPage";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterLoginPage";
import ServicePage from "./pages/ServicePage";
import SettingsPage from "./pages/SettingsPage";
import ShopPage from "./pages/ShopPage";
import LandingPage from "./components/LandingPage";
import RatePage from "./pages/RatePage";
import MediaPage from "./pages/MediaPage";

import AnimationOnNavigate from "./animations/AnimationOnNavigate";
import { AnimatePresence } from "framer-motion";
import { useUserInfo } from "./hooks/useContext/useUserInfo";

function App() {
  const boxRef = useRef(null);
  const { showLogInfo, setShowLogInfo, showLogOutInfo, setShowLogOutInfo } = useUserInfo();
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
            <Route path="/rateForm" element={<RatePage />} />
            <Route path="/media" element={<MediaPage/>} />
          </Routes>
        </BrowserRouter>
        <FooterPage />
      </div>
      <AnimatePresence>
        {showLogInfo && (
          <AnimationOnNavigate setActiveModal1={setShowLogInfo} setActiveModal2={setShowLogOutInfo}>
            <p>Zostałeś zalogowany</p>
          </AnimationOnNavigate>
        )}
        {showLogOutInfo && (
          <AnimationOnNavigate setActiveModal1={setShowLogInfo} setActiveModal2={setShowLogOutInfo}>
            <p>Zostałeś wylogowany!</p>
          </AnimationOnNavigate>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
