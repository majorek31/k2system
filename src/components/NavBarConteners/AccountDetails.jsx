import React, { Fragment, useState } from "react";
import { useUserInfo } from "../../hooks/useContext/useUserInfo";

function AccountDetails({
  showContentForAccountDetails,
  setShowContentForAccountDetails,
  setShowUsers,
  setInfo,
  setShowInfo,
  setShowOrders,
}) {
  const {
    isLogged,
    isAdmin,
    userInfo,
    setUserInfo,
    setShowLogOutInfo,
    isEditable,
    setIsEditable,
  } = useUserInfo();
  return (
    <div>
      <div
        className={`absolute top-full right-0 overflow-hidden transition-all duration-500 ease-in-out ${showContentForAccountDetails ? "pointer-events-auto max-h-[1000px] translate-y-0 opacity-100" : "pointer-events-none max-h-0 translate-y-[-120px] opacity-0"}`}
      >
        {isLogged && (
          <div className="m-2 mr-5 rounded-xl bg-white p-3 pr-7 pl-7 text-center shadow">
            <h1 className="p-5 font-bold">Zalogowano jako: </h1>
            {userInfo && (
              <div>
                <p className="p-1">{userInfo.firstName}</p>
                <p className="p-1">{userInfo.lastName}</p>
                <p className="p-1">{userInfo.email}</p>
                {userInfo.vatNumber !== null && <p>{userInfo.vatNumber}</p>}
                {userInfo.companyName !== null && <p>{userInfo.companyName}</p>}
              </div>
            )}
            <div className="m-5 flex flex-col gap-4">
              {isAdmin && (
                <Fragment>
                  <button
                    onClick={() => (
                      setShowContentForAccountDetails(false),
                      setIsEditable(!isEditable),
                      localStorage.setItem("isEditable", !isEditable),
                      setInfo("Jesteś w trybie edycji"),
                      setShowInfo(true)
                    )}
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
                </Fragment>
              )}
              <button
                onClick={() => (
                  setShowContentForAccountDetails(false), setShowOrders(true)
                )}
                className="rounded border-3 border-slate-700 bg-white p-5 text-slate-700 shadow transition-all duration-300 hover:scale-110 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-125"
              >
                Zobacz Zamówienia
              </button>
              <button
                onClick={() => (
                  localStorage.clear(), setUserInfo(""), setShowLogOutInfo(true)
                )}
                className="rounded border-3 border-slate-700 bg-white p-5 text-slate-700 shadow transition-all duration-300 hover:scale-110 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-125"
              >
                Wyloguj
              </button>
            </div>
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

export default React.memo(AccountDetails);
