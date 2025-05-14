//react
import { Fragment, useEffect,useState } from "react";

//hooks
import { useTheme } from "../hooks/useContext/useTheme";
import { useWord } from "../hooks/useContext/useWord";
import { useAnimation } from "../hooks/useContext/useAnimation";

//components
import SingleBar from "./SingleBar";

export default function NavBar({ showNavBar, setShowNavBar }) {
  const [showContentForNav, setShowContentForNav] = useState(false);
  const { scrollY, height } = useAnimation();
  const { bGcolor } = useTheme();
  const {
    mainPage,
    delivery,
    aboutUs,
    register,
    service,
    shop,
    contact,
    settings,
  } = useWord();

  // check if navbar schould be visible

  useEffect(() => {
    scrollY >= height ? setShowNavBar(true) : setShowNavBar(false),
      setShowContentForNav(false);
  }, [scrollY, height]);

  return (
    <Fragment>
      <div
        className={`fixed top-0 right-0 left-0 z-50 flex h-fit flex-col transition-all duration-500 ease-in-out ${showNavBar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className={`mx-5 my-2 h-fit rounded-xl ${bGcolor} shadow-lg`}>
          <div className="float-left flex items-center justify-center p-0">
            <img
              src="/icons/menu.svg"
              alt="menu"
              // if you want black type inverted in class
              className="scale-80 object-contain brightness-0 filter"
              onClick={() => setShowContentForNav(!showContentForNav)}
            />
          </div>
          <div className="float-right">{/* logo */}</div>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${showContentForNav ? "pointer-events-auto max-h-[1000px] opacity-100" : "pointer-events-none max-h-0 opacity-0"}`}
        >
          <SingleBar
            showContentForNav={showContentForNav}
            v1={"0ms"}
            v2={"0ms"}
            where={"/"}
          >
            {mainPage}
          </SingleBar>
          <SingleBar
            showContentForNav={showContentForNav}
            v1={"150ms"}
            v2={"25ms"}
            where={"/delivery"}
          >
            {delivery}
          </SingleBar>
          <SingleBar
            showContentForNav={showContentForNav}
            v1={"300ms"}
            v2={"50ms"}
            where={"/about"}
          >
            {aboutUs}
          </SingleBar>
          <SingleBar
            showContentForNav={showContentForNav}
            v1={"400ms"}
            v2={"75ms"}
            where={"/register"}
          >
            {service}
          </SingleBar>
          <SingleBar
            showContentForNav={showContentForNav}
            v1={"500ms"}
            v2={"100ms"}
            where={"/service"}
          >
            {register}
          </SingleBar>
          <SingleBar
            showContentForNav={showContentForNav}
            v1={"600ms"}
            v2={"125ms"}
            where={"/shop"}
          >
            {shop}
          </SingleBar>
          <SingleBar
            showContentForNav={showContentForNav}
            v1={"700ms"}
            v2={"150ms"}
            where={"/contact"}
          >
            {contact}
          </SingleBar>
          <SingleBar
            showContentForNav={showContentForNav}
            v1={"800ms"}
            v2={"175ms"}
            where={"/settings"}
          >
            {settings}
          </SingleBar>
        </div>
      </div>
    </Fragment>
  );
}
