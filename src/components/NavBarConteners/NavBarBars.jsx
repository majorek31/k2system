import React, { useEffect } from "react";
import SingleBar from "../SingleBar";
import SingleWord from "../SingleWord";

function NavBarBars({ showContentForNav }) {

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
        <SingleWord  whichOne={"MainPageLink"} whichContent={"NavBar"} />
      </SingleBar>
      <SingleBar
        showContentForNav={showContentForNav}
        v1={"100ms"}
        v2={"25ms"}
        where={"/delivery"}
      >
        {/* {delivery} */}
      </SingleBar>
      <SingleBar
        showContentForNav={showContentForNav}
        v1={"200ms"}
        v2={"50ms"}
        where={"/about"}
      >
        {/* {aboutUs} */}
      </SingleBar>
      <SingleBar
        showContentForNav={showContentForNav}
        v1={"300ms"}
        v2={"75ms"}
        where={"/service"}
      >
        {/* {service} */}
      </SingleBar>
      <SingleBar
        showContentForNav={showContentForNav}
        v1={"400ms"}
        v2={"100ms"}
        where={"/contact"}
      >
        {/* {contact} */}
      </SingleBar>
      <SingleBar
        showContentForNav={showContentForNav}
        v1={"500ms"}
        v2={"125ms"}
        where={"/register"}
      >
        {/* {register} */}
      </SingleBar>
      <SingleBar
        showContentForNav={showContentForNav}
        v1={"600ms"}
        v2={"150ms"}
        where={"/shop"}
      >
        {/* {shop} */}
      </SingleBar>
      <SingleBar
        showContentForNav={showContentForNav}
        v1={"700ms"}
        v2={"175ms"}
        where={"/rateForm"}
      >
        {/* {rateForm} */}
      </SingleBar>
      <SingleBar
        showContentForNav={showContentForNav}
        v1={"800ms"}
        v2={"200ms"}
        where={"/settings"}
      >
        {/* {settings} */}
      </SingleBar>
    </div>
  );
}

export default React.memo(NavBarBars);
