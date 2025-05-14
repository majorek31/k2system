import React from "react";

export default function FooterPage() {
  return (
    <div className="flex flex-col gap-20 bg-white">
      <div className="flex flex-col gap-20 bg-white lg:flex-row">
        <div className="m-5 mb-0 flex flex-col gap-10 p-5 lg:w-[33%]">
          <p className="text-center text-4xl font-bold">k2system</p>
          <div className="flex justify-center gap-5">
            <button className="h-fit w-fit rounded-4xl bg-slate-700">
              <img
                src="/icons/facebook.svg"
                className="object-contain brightness-0 invert filter"
                alt="facebook"
              />
            </button>
            <button className="h-fit w-fit rounded-4xl bg-slate-700">
              <img
                src="/icons/instagram.svg"
                className="object-contain brightness-0 invert filter"
                alt="instagram"
              />
            </button>
          </div>
        </div>
        <div className="jusify-center m-5 flex flex-col items-center gap-10 p-3lg:w-[33%]">
          <p className="text-center text-2xl font-bold">kontakt</p>
          <p className="text-center">Zapytaj o ofertę i wycenę sprzętu</p>
          <div className="jusify-center flex items-center gap-5">
            <img
              src="/icons/mail_slate.svg"
              className="scale-80 object-contain"
              alt=""
            />
            <p className="w-20">aaaa@gmail.com</p>
          </div>
          <div className="jusify-center flex items-center gap-5">
            <img
              src="/icons/map_pin_slate.svg"
              className="scale-80 object-contain"
              alt=""
            />
            <p className="w-20">Skoczów ul.asdas 28</p>
          </div>
          <div className="jusify-center flex items-center gap-5">
            <img
              src="/icons/phone_slate.svg"
              className="scale-80 object-contain"
              alt=""
            />
            <p className="w-20">111222333</p>
          </div>
        </div>
        <div className="jusify-center m-5 flex flex-col items-center gap-10 p-3 lg:w-[33%]">
          <p className="text-center text-2xl font-bold">Nasza oferta</p>
          <p>sprzedaz drukarek</p>
          <p>sprzedaz drukarek wielofunkcyjnych</p>
          <p>sprzedaz kserokopiarek</p>
          <p>wynajem drukarek</p>
          <p>wynajem drukarek wielofunkcyjnych</p>
          <p>wynajem kserokopiarek</p>
        </div>
      </div>
        <div className="m-5 mb-0 flex flex-row items-center justify-center gap-0 p-3">
          <img
            src="/icons/copyright.svg"
            className="scale-50 object-contain"
            alt=""
          />
          <p> Copyright 2019 nazwa_firmy. Wszystkie prawa zastrzeżone.</p>
        </div>
    </div>
  );
}
