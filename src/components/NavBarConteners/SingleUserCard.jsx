import React, { useState } from "react";

export default function SingleUserCard({
  firstName,
  lastName,
  userEmail,
  userRole,
  userShopHistory,
}) {
  const [showSingleUser, setShowSingleUser] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowSingleUser(true)}
      onMouseLeave={() => setShowSingleUser(false)}
      onClick={() => setShowSingleUser(!showSingleUser)}
      className={`transition-all duration-500 ease-in-out flex items-center justify-center gap-[4%] rounded-xl p-5 shadow text-center ${showSingleUser ? "text-3xl" : ""}`}
    >
      <h1 className="text-lg font-bold">
        {firstName} {lastName}
      </h1>
      <p>{userEmail}</p>
      <p>{userRole}</p>
      <button className="rounded border-3 border-slate-700 bg-white p-2 text-sm text-slate-700 shadow transition-all duration-300 hover:scale-110 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-125">
        historia zakupów
      </button>
      <button className="rounded border-3 border-slate-700 bg-white p-2 text-sm text-slate-700 shadow transition-all duration-300 hover:scale-110 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-125">
        zmiena roli na {userRole === "admin" ? "user" : "admin"}
      </button>
    </div>
  );
}
