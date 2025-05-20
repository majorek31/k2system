import { useState } from "react";
import { useUserInfo } from "../../hooks/useContext/useUserInfo";

export default function AccountDetails({
  showContentForAccountDetails,
  setShowContentForAccountDetails,
  setShowUsers,
}) {
  const { isLogged, isAdmin, userInfo } = useUserInfo();
  console.log(userInfo)
  return (
    <div>
      <div
        className={`absolute top-full right-0 overflow-hidden transition-all duration-500 ease-in-out ${showContentForAccountDetails ? "pointer-events-auto max-h-[1000px] translate-y-0 opacity-100" : "pointer-events-none max-h-0 translate-y-[-120px] opacity-0"}`}
      >
        {isLogged && (
          <div className="m-2 mr-5 rounded-xl bg-white p-3 pr-7 pl-7 text-center shadow">
            <h1 className="p-5 font-bold">Zalogowano jako: </h1>
            <p className="p-1">Imie</p>
            <p className="p-1">Nazwisko</p>
            {isAdmin && (
              <div className="m-5 flex flex-col gap-4">
                <button
                  onClick={() => setShowContentForAccountDetails(false)}
                  className="rounded border-3 border-slate-700 bg-white p-5 pr-10 pl-10 text-slate-700 shadow transition-all duration-300 hover:scale-110 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-125"
                >
                  Włącz tryb edycji
                </button>
                <button
                  onClick={() => (
                    setShowContentForAccountDetails(false), setShowUsers(true)
                  )}
                  className="rounded border-3 border-slate-700 bg-white p-5 text-slate-700 shadow transition-all duration-300 hover:scale-110 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-125"
                >
                  Pokaż użytkowników
                </button>
              </div>
            )}
          </div>
        )}
        {!isLogged && (
          <div className="m-2 mr-5 rounded-xl bg-white p-3 pr-7 pl-7">
            <h1>nie jesteś zalogowany</h1>
          </div>
        )}
      </div>
    </div>
  );
}
