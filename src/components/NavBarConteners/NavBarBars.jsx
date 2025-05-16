import React from "react";
import SingleBar from "../SingleBar";
import { useWord } from "../../hooks/useContext/useWord";

export default function NavBarBars({ showContentForNav }) {
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
  return (
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
        {register}
      </SingleBar>
      <SingleBar
        showContentForNav={showContentForNav}
        v1={"500ms"}
        v2={"100ms"}
        where={"/service"}
      >
        {service}
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
  );
}
