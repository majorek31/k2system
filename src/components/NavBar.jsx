import React, { useState } from "react";
import { Fragment, useEffect } from "react";
import SingleBar from "./SingleBar";
import { useTheme } from "../hooks/useTheme";

export default function NavBar({ scrollY, height, showNavBar, setShowNavBar }) {
  const [showContentForNav, setShowContentForNav] = useState(false);

  const { bGcolor } = useTheme();

  // check if navbar schould be visible

  useEffect(() => {
    scrollY > height ? setShowNavBar(true) : setShowNavBar(false),
      setShowContentForNav(false);
  }, [scrollY, height]);

  return (
    <Fragment>
      <div
        className={`flex h-fit w-full flex-col transition-all duration-500 ease-in-out ${showNavBar ? "fixed top-0 translate-y-0 opacity-100" : "fixed top-0 -translate-y-full opacity-0"}`}
      >
        <div
          className={`w-[100% -24px] m-3 h-fit rounded-xl ${bGcolor} shadow-lg`}
        >
          <div className="float-left flex items-center justify-center p-3">
            <img
              src="/icons/menu.svg"
              alt="menu"
              className="object-contain brightness-0 invert filter"
              onClick={() => setShowContentForNav(!showContentForNav)}
            />
          </div>
          <div className="float-right">{/* logo */}</div>
        </div>
        <div
          className={`transition-all duration-500 ease-in-out ${showContentForNav ? "opacity-100" : "opacity-0"}`}
        >
          <SingleBar
            showContentForNav={showContentForNav}
            v1={"0ms"}
            v2={"0ms"}
          >
            Strona głowna
          </SingleBar>
          <SingleBar
            showContentForNav={showContentForNav}
            v1={"150ms"}
            v2={"25ms"}
          >
            Dostawa
          </SingleBar>
          <SingleBar
            showContentForNav={showContentForNav}
            v1={"300ms"}
            v2={"50ms"}
          >
            O nas
          </SingleBar>
          <SingleBar
            showContentForNav={showContentForNav}
            v1={"400ms"}
            v2={"75ms"}
          >
            Rejestracja
          </SingleBar>
          <SingleBar
            showContentForNav={showContentForNav}
            v1={"500ms"}
            v2={"100ms"}
          >
            Usługi
          </SingleBar>
          <SingleBar
            showContentForNav={showContentForNav}
            v1={"600ms"}
            v2={"125ms"}
          >
            Sklep
          </SingleBar>
          <SingleBar
            showContentForNav={showContentForNav}
            v1={"700ms"}
            v2={"150ms"}
          >
            Kontakt
          </SingleBar>
          <SingleBar
            showContentForNav={showContentForNav}
            v1={"800ms"}
            v2={"175ms"}
          >
            Ustawienia
          </SingleBar>
        </div>
      </div>
    </Fragment>
  );
}
