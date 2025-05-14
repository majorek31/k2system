import React from "react";

export default function Input({ children, val, setVal }) {
  return (
    <div class="relative">
      <input
        id={`${children}`}
        name={`${children}`}
        onChange={(e) => setVal(e.target.value)}
        type="text"
        className="peer border-b border-slate-700 bg-inherit py-1 transition-colors focus:border-b-2 focus:outline-none"
      />
      <label
        htmlFor={`${children}`}
        className={`absolute left-0 cursor-text transition-all peer-focus:-top-4 peer-focus:text-xs ${(val || "").length === 0 ? "top-1 text-base" : "-top-4 text-xs"}`}
      >
        {children}
      </label>
    </div>
  );
}
