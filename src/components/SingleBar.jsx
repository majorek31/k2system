import React from 'react'
import { Link } from 'react-router-dom';
import { useTheme } from "../hooks/useTheme";

export default function SingleBar({ showContentForNav, v1, v2, children, height,where }) {

    // v1 is delay ehne opening a nav and v2 when closing

    const { bGcolor } = useTheme()
    console.log(height)
    return (
        <div
            className={`m-3 h-fit w-fit rounded-xl ${bGcolor} shadow-lg p-3 pl-10 pr-10 text-white transition-all duration-500 
                        ${showContentForNav ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-40px]"}`}
            style={{ transitionDelay: showContentForNav ? v1 : v2 }}
        >
            <Link to={where} onClick={() => window.scrollTo(0, height)}>
                {children}
            </Link>
        </div >
    )
}
