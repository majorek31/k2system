import React, { useState } from "react";

export default function DeleteButton({ onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`absolute -top-2 -right-2 z-[10] flex h-10 w-10 items-center justify-center rounded-full ${
        hover ? "bg-white" : "bg-red-600"
      } text-2xl text-white shadow-md transition-colors duration-200 ease-in-out`}
    >
      {hover ? (
        <img
          src="/icons/cross_red.svg"
          alt="delete icon"
          className="w-fit scale-70 object-contain p-2"
        />
      ) : (
        <img
          src="/icons/cross_black.svg"
          alt="delete icon"
          className="w-fit scale-70 object-contain p-2 invert filter"
        />
      )}
    </button>
  );
}
