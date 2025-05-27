import { useState } from "react";
import StarRate from "./StarRate";
import AnimatedDetailOnClick from "../../animations/AnimatedDetailOnClick";
import { AnimatePresence } from "framer-motion";
import { useUserInfo } from "../../hooks/useContext/useUserInfo";
import { useFetch } from "../../hooks/useFetch";
import { useValidToken } from "../../hooks/useValidToken";

export default function RateFormContainer({ onReviewAdded }) {
  const [rating, setRating] = useState(0);
  const [textAreaVal, setTextAreaVal] = useState("");
  const [msgTextAreaVal, setMsgTextAreaVal] = useState("");
  const [showFinal, setShowFinal] = useState(false);
  const [showError, setShowError] = useState(false);
  const { isLogged } = useUserInfo();
  const { doFetch } = useFetch();
  const { getToken } = useValidToken();

  const checkRegEx = (val) => /^[^<>/&"'`]*$/.test(val.trim());

  const sendData = async () => {
    if (isLogged && rating !== 0 && textAreaVal && checkRegEx(textAreaVal)) {
      const token = await getToken();
      if (!token) return;

      doFetch("/review", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          content: textAreaVal,
          rating: rating,
        },
      });

      setShowFinal(true);
      setShowError(false);
      setMsgTextAreaVal("");
      setTextAreaVal("");
      setRating(0);
      if (onReviewAdded) onReviewAdded();
    } else {
      setShowError(true);
      setShowFinal(false);
      setMsgTextAreaVal(
        !isLogged
          ? "Musisz być zalogowany"
          : !textAreaVal
            ? "Treść opinii nie może być pusta"
            : "Opinia zawiera niedozwolone znaki (np. < > / &)",
      );
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendData();
      }}
      className="m-5 mt-50 mb-25 flex h-fit w-[70wh] flex-col items-start justify-center gap-5 rounded-xl bg-white p-10 shadow"
    >
      <p className="p-1 text-xl text-black">Opinia: </p>
      <textarea
        value={textAreaVal}
        onChange={(e) => setTextAreaVal(e.target.value)}
        rows="4"
        className="block h-40 w-full rounded-lg border border-gray-200 bg-slate-700 p-3 text-sm text-gray-100"
        placeholder="Napisz opinię na temat naszych usług :)"
      />
      <StarRate rating={rating} setRating={setRating} rateSetting={true} />
      <button
        type="submit"
        className="rounded border-3 border-slate-700 bg-white p-5 pr-10 pl-10 text-xl text-slate-700 shadow-xl transition-all duration-300 hover:scale-110 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-125"
      >
        Dodaj opinię
      </button>

      <AnimatePresence>
        {showFinal && (
          <AnimatedDetailOnClick setActiveModal={setShowFinal}>
            <div className="z-[100] m-3 flex w-[33vh] flex-col gap-7 p-3 select-none lg:w-[105]">
              <h1 className="text-center text-3xl font-bold text-black">
                Opinia została dodana!
              </h1>
            </div>
          </AnimatedDetailOnClick>
        )}
        {showError && (
          <AnimatedDetailOnClick setActiveModal={setShowError}>
            <div className="z-[100] m-3 flex w-[33vh] flex-col gap-7 p-3 select-none lg:w-[105]">
              <h1 className="text-center text-3xl font-bold text-black">
                Błąd: {msgTextAreaVal}
              </h1>
            </div>
          </AnimatedDetailOnClick>
        )}
      </AnimatePresence>
    </form>
  );
}
