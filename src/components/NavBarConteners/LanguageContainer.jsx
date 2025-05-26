import React from "react";
import { useUserInfo } from "../../hooks/useContext/useUserInfo";

export default function LanguageContainer({
  showContentForLanguageContainer,
  setShowContentForLanguageContainer,
  setShowInfo,
  setInfo,
}) {
  const { setLanguageInUse } = useUserInfo();
  return (
    <div
      className={`absolute top-full right-0 overflow-hidden transition-all duration-500 ease-in-out ${showContentForLanguageContainer ? "pointer-events-auto max-h-[1000px] translate-y-0 opacity-100" : "pointer-events-none max-h-0 translate-y-[-120px] opacity-0"}`}
    >
      <div className="m-2 mr-5 rounded-xl bg-white p-3 pr-7 pl-7 text-center shadow">
        <h1 className="p-5 text-xl font-bold">Wybierz Język:</h1>
        <div className="flex gap-10">
          <img
            src="/photos/United_Kingdom.png"
            alt="Polska flaga"
            className="h-16 w-16 scale-90 rounded object-cover shadow transition-all duration-300 ease-in-out hover:scale-100"
            onClick={() => (
              setLanguageInUse("en"),
              localStorage.setItem("lang","en"),
              setInfo("Zmieniłeś język na Angielski"),
              setShowInfo(true),
              setShowContentForLanguageContainer(false)
            )}
          />
          <img
            src="/photos/Flag_of_the_Czech_Republic.png"
            alt="Polska flaga"
            className="h-16 w-16 scale-90 rounded object-cover shadow transition-all duration-300 ease-in-out hover:scale-100"
            onClick={() => (
              setLanguageInUse("cz"),
               localStorage.setItem("lang","cz"),
              setInfo("Zmieniłeś język na Czeski"),
              setShowInfo(true),
              setShowContentForLanguageContainer(false)
            )}
          />
          <img
            src="/photos/poland.png"
            alt="Polska flaga"
            className="h-16 w-16 scale-90 rounded object-cover shadow transition-all duration-300 ease-in-out hover:scale-100"
            onClick={() => (
              setLanguageInUse("pl"),
               localStorage.setItem("lang","pl"),
              setInfo("Zmieniłeś język na Polski"),
              setShowInfo(true),
              setShowContentForLanguageContainer(false)
            )}
          />
        </div>
      </div>
    </div>
  );
}
