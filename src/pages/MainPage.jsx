import React, { useState, useEffect, Fragment } from "react";
import AnimatedOnScrollSection from "../animations/AnimatedOnScrollSection";
import AnimatedHoverCircle from "../animations/AnimatedHoverCircle";
import PrinterModel from "../components/3dModels/PrinterModel";
export default function MainPage() {
  const [showContent, SetShowConntent] = useState(false);
  return (
    <Fragment>
      <div className="flex h-fit flex-col gap-3 p-7 pt-25 text-black">
        <AnimatedOnScrollSection>
          <div className="rounded-xl bg-white p-5 text-center shadow-xl">
            <h1 className="m-2 text-2xl">
              <span className="font-extrabold">
                Drukarki dla Twojego biznesu!
              </span>
              <br />
              <br />
              kup lub wypożycz na korzystnych warunkach!
            </h1>
          </div>
        </AnimatedOnScrollSection>
        <AnimatedOnScrollSection>
          <div className="rounded-xl bg-white p-5 text-center">
            <p className="m-2">
              Szukasz niezawodnego sprzętu do biura lub domu?
              <br />
              Oferujemy nowoczesne drukarki w atrakcyjnych cenach.
              <br />
              Bez długoterminowych zobowiązań, z pełnym serwisem i wsparciem
              technicznym.
            </p>
            <br />
          </div>
        </AnimatedOnScrollSection>
        <AnimatedOnScrollSection>
          <div>
            <h1 className="rounded-xl bg-white p-5 text-center font-bold">
              Zajmujemy się takimi rzeczami jak:
            </h1>
          </div>
        </AnimatedOnScrollSection>
        <AnimatedOnScrollSection>
          <div
            className="flex items-center justify-center"
            onClick={() => SetShowConntent()}
          >
            <AnimatedHoverCircle
              image={"../public/icons/cart.svg"}
              text={"Sprzedaż detaliczna"}
            />
          </div>
        </AnimatedOnScrollSection>
        <AnimatedOnScrollSection>
          <div className="flex items-center justify-center">
            <AnimatedHoverCircle
              image={"../public/icons/rent.svg"}
              text={"Dzierżawa kserokopiarek"}
            />
          </div>
        </AnimatedOnScrollSection>
        <AnimatedOnScrollSection>
          <div className="flex items-center justify-center">
            <AnimatedHoverCircle
              image={"../public/icons/service.svg"}
              text={"Serwis,części,Tonery"}
            />
          </div>
        </AnimatedOnScrollSection>
        <AnimatedOnScrollSection>
          <div className="flex items-center justify-center">
            <AnimatedHoverCircle
              image={"../public/icons/cooperation.svg"}
              text={"współpraca z dystrybutorami"}
            />
          </div>
        </AnimatedOnScrollSection>
        {/* <PrinterModel /> */}
      </div>

      <AnimatedOnScrollSection>
        <div className="flex h-[110vh] items-center justify-center bg-blue-400">
          <h1 className="text-5xl text-white">Sekcja 2</h1>
        </div>
      </AnimatedOnScrollSection>

      <AnimatedOnScrollSection>
        <div className="flex h-[110vh] items-center justify-center bg-green-400">
          <h1 className="text-5xl text-white">Sekcja 3</h1>
        </div>
      </AnimatedOnScrollSection>
    </Fragment>
  );
}
