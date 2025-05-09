import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { useContext } from "react";
import { AnimationContext } from "../context/AnimationContext";

export default function SingleBar({
  showContentForNav,
  v1,
  v2,
  children,
  where
}) {
  // v1 is delay ehne opening a nav and v2 when closing
  const { height } = useContext(AnimationContext);
  const { bGcolor } = useTheme();
  return (
    <div
      className={`m-3 h-fit w-fit rounded-xl ${bGcolor} p-3 pr-10 pl-10 text-white shadow-lg transition-all duration-500 ${showContentForNav ? "translate-y-0 opacity-100" : "translate-y-[-40px] opacity-0"}`}
      style={{ transitionDelay: showContentForNav ? v1 : v2 }}
    >
      <Link to={where} onClick={() => window.scrollTo(0, height)}>
        {children}
      </Link>
    </div>
  );
}
