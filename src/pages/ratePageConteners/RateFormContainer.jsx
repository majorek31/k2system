import { useState, useEffect } from "react";
import StarRate from "./StarRate";
import AnimatedDetailOnClick from "../../animations/AnimatedDetailOnClick";

import { AnimatePresence } from "framer-motion";

export default function RateFormContainer() {
  const [rating, setRating] = useState(0);
  const [textAreaVal, setTextAreaVal] = useState("");
  const [msgTextAreaVal, setMsgTextAreaVal] = useState("");
  const [showFinalInormationContainer, setShowFinalInormationContainer] =
    useState("");
  const [showErrorContainer, setShowErrorContainer] = useState("");

  const checkRegExtextAreaVal = (val) => {
    const trimmed = val.trim();
    const noHtmlCharsRegEx = /^[^<>/&"'`]*$/;
    return noHtmlCharsRegEx.test(trimmed);
  };

  const sendData = () => {
    if (checkRegExtextAreaVal(textAreaVal) && textAreaVal !== "") {
      const data = {
        textAreaVal: textAreaVal,
        rating: rating,
      };
      console.log("Dane do wysłania:", data);
      setShowFinalInormationContainer(true);
      setShowErrorContainer(false);
      setMsgTextAreaVal("");
    } else if (!checkRegExtextAreaVal(textAreaVal) && textAreaVal !== "") {
      console.log("Nie wypełniłeś danych poprawnie lub masz błędy");
      setShowErrorContainer(true);
      setShowFinalInormationContainer(false);
      setMsgTextAreaVal(
        "Hasło nie może zawierać znaków HTML (np. <, >, &, \", ')",
      );
    } else {
      console.log("Nie wypełniłeś danych poprawnie lub masz błędy");
      setShowErrorContainer(true);
      setShowFinalInormationContainer(false);
      setMsgTextAreaVal("");
    }
  };

  return (
    <form
      onDoubleClick={() => setRating(0)}
      className="m-5 m-20 mt-50 mb-50 flex h-fit w-[70wh] flex-col items-start justify-center gap-5 rounded-xl bg-white p-5 shadow"
      onSubmit={(e) => {
        e.preventDefault();
        sendData();
      }}
    >
      <p className="p-1 text-xl text-black">Opinia: </p>
      <textarea
        onChange={(e) => setTextAreaVal(e.target.value)}
        id="message"
        rows="4"
        className="block w-full rounded-lg border border-gray-200 bg-slate-700 p-3 text-sm text-gray-100"
        placeholder="Napisz opinie na teamat naszych usług :)"
      />
      <StarRate rating={rating} setRating={setRating} />
      <button
        type="submit"
        className="rounded border-3 border-slate-700 bg-white p-5 pr-10 pl-10 text-xl text-slate-700 shadow-xl transition-all duration-300 hover:scale-110 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-125"
      >
        Dodaj opinie
      </button>
      <AnimatePresence>
        {showFinalInormationContainer && (
          <AnimatedDetailOnClick
            setActiveModal={setShowFinalInormationContainer}
          >
            <div className="z-[100] m-3 flex w-[33vh] flex-col gap-7 p-3 select-none lg:w-[105]">
              <h1 className="text-center text-3xl font-bold text-black">
                Dane zostały dodane
              </h1>
            </div>
          </AnimatedDetailOnClick>
        )}
        {showErrorContainer && (
          <AnimatedDetailOnClick setActiveModal={setShowErrorContainer}>
            <div className="z-[100] m-3 flex w-[33vh] flex-col gap-7 p-3 select-none lg:w-[105]">
              <h1 className="text-center text-3xl font-bold text-black">
                Nie wypełniłeś danych poprawnie lub podałeś błedne dane
                <br />
                {msgTextAreaVal}
              </h1>
            </div>
          </AnimatedDetailOnClick>
        )}
      </AnimatePresence>
    </form>
  );
}
