import React, { useState } from "react";

import { useUserInfo } from "../../hooks/useContext/useUserInfo";
import AnimatedDetailOnClick from "../../animations/AnimatedDetailOnClick";
import { AnimatePresence } from "framer-motion";

export default function searchBar() {
  const { isAdmin } = useUserInfo();
  const [showProductForm, setShowProductForm] = useState();
  return (
    <div className="m-5 mb-5 flex h-fit w-[90wh] gap-[2%] lg:m-15">
      <div className="flex w-full items-center justify-between rounded-xl bg-white p-3">
        <div class="flex w-full items-center justify-center gap-[2%]">
          <div class="relative w-full">
            <input
              id="username"
              name="username"
              type="text"
              class="peer w-full border-b border-gray-300 bg-inherit py-1 transition-colors focus:border-b-2 focus:border-slate-700 focus:outline-none"
            />
            <label
              for="username"
              class="absolute top-1 left-0 w-full cursor-text text-xl tracking-wide transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-slate-700"
            >
              Szukaj...
            </label>
          </div>

          <img src="/icons/search.svg" alt="" className="scale-80" />
        </div>
      </div>
      <div className="flex w-fit items-center rounded-xl bg-white p-3">
        <img src="/icons/filter.svg" alt="" className="scale-80" />
      </div>
      {isAdmin && (
        <div className="flex w-fit items-center rounded-xl bg-white p-3 font-bold">
          <button onClick={() => setShowProductForm(true)}>
            Dodaj Produkt
          </button>
        </div>
      )}
      <AnimatePresence>
        {showProductForm && isAdmin && (
          <AnimatedDetailOnClick setActiveModal={setShowProductForm}>
            <div className="z-[100] m-3 flex w-[33vh] flex-col gap-7 p-3 select-none lg:w-[105]">
              <h1 className="text-center text-3xl font-bold">
                tu bedzie formularz z dodawaniem prod.
              </h1>
            </div>
          </AnimatedDetailOnClick>
        )}
      </AnimatePresence>
    </div>
  );
}
