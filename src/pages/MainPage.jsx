import React, { useState, useEffect, Fragment } from "react";
import AnimatedOnScrollSection from "../animations/AnimatedOnScrollSection";
import AnimatedHoverCircle from "../animations/AnimatedHoverCircle";
import PrinterModel from "../components/3dModels/PrinterModel";
export default function MainPage() {
  return (
    <Fragment>
      <div className="flex h-fit flex-col gap-3 p-8">
        <AnimatedOnScrollSection>
          <h1 className="m-2">
            Drukarki dla Twojego biznesu
            <br />
            kup lub wypożycz na korzystnych warunkach!
          </h1>
        </AnimatedOnScrollSection>
        <AnimatedOnScrollSection>
          <p className="m-2">
            Szukasz niezawodnego sprzętu do biura lub domu?
            <br />
            Oferujemy nowoczesne drukarki w atrakcyjnych cenach.
            <br />
            Bez długoterminowych zobowiązań, z pełnym serwisem i wsparciem
            technicznym.
          </p>
        </AnimatedOnScrollSection>
        <AnimatedOnScrollSection>
          <div>
            <AnimatedHoverCircle
              image={"../public/icons/cart.svg"}
              text={"Sprzedaż detaliczna"}
            />
          </div>
        </AnimatedOnScrollSection>
        <AnimatedOnScrollSection>
          <div>
            <AnimatedHoverCircle
              image={"../public/icons/rent.svg"}
              text={"Dzierżawa kserokopiarek"}
            />
          </div>
        </AnimatedOnScrollSection>
        <AnimatedOnScrollSection>
          <div>
            <AnimatedHoverCircle
              image={"../public/icons/service.svg"}
              text={"Serwis,części,Tonery"}
            />
          </div>
        </AnimatedOnScrollSection>
        <AnimatedOnScrollSection>
          <div>
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
