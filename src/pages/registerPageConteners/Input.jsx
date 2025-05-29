import React, { useState, useRef } from "react";
import AnimatedDetailOnClick from "../../animations/AnimatedDetailOnClick";
import { AnimatePresence } from "framer-motion";

export default function Input({ children, val, setVal, msg, type }) {
  const [showWhatsWrong, setShowWhatsWrong] = useState(false);
  const hasMsg = msg && msg.trim && msg.trim().length > 0;

  const timerRef = useRef(null);

  const startPress = () => {
    timerRef.current = setTimeout(() => {
      setShowWhatsWrong(true);
    }, 500); // 600ms przytrzymania
  };

  const cancelPress = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div className="relative">
      <input
        id={`${children}`}
        name={`${children}`}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        type={type}
        className={`peer border-b bg-inherit py-1 font-bold transition-colors focus:border-b-2 focus:outline-none ${
          hasMsg ? "border-red-700" : "border-slate-700"
        }`}
      />
      <label
        htmlFor={`${children}`}
        className={`absolute left-0 cursor-text transition-all select-none peer-focus:-top-5 peer-focus:text-lg ${
          (val || "").length === 0 ? "top-1 text-xl" : "-top-5 text-lg"
        }`}
        onTouchStart={startPress}
        onTouchEnd={cancelPress}
        onMouseDown={startPress}
        onMouseUp={cancelPress}
        onMouseLeave={cancelPress}
      >
        {children}
        {msg?.length > 0 ? (
          <span className="text-xs"> - przytrzymaj</span>
        ) : (
          <span></span>
        )}
      </label>
      <AnimatePresence>
        {showWhatsWrong && msg?.length > 0 && (
          <AnimatedDetailOnClick setActiveModal={setShowWhatsWrong}>
            <div className="z-[1002] m-3 flex w-120 flex-col gap-7 p-3 select-none">
              <h1 className="text-center text-3xl font-bold">
                {children} - warunki
              </h1>
              <div className="flex flex-col gap-5 lg:flex-row">
                <div className="text-justify">
                  {msg.split(":").map((part, index, arr) => (
                    <React.Fragment key={index}>
                      {part}
                      {index !== arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedDetailOnClick>
        )}
      </AnimatePresence>
    </div>
  );
}
