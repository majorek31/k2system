import { useEffect, useState } from "react";
import LandingPage from "./components/landingPage";
import NavBar from "./components/NavBar";

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
      <NavBar
        scrollY={scrollY}
        height={height}
        setShowNavBar={setShowNavBar}
        showNavBar={showNavBar}
      />
      <div className="h-1000">
        {/* content later */}
        {/* https://examples.motion.dev/ */}
      </div>
    </div>
  );
  <br />;
}

export default App;
