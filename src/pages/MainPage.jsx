import React from "react";
import AnimatedOnScrollSection from "../animations/AnimatedOnScrollSection"
import PrinterModel from "../components/3dModels/PrinterModel"
export default function MainPage() {

  return (
    <div className="z-0 ">
      <AnimatedOnScrollSection duration={1}>
        <div className="h-[110vh] bg-[#ff6b6b] flex items-center justify-center" >
          <PrinterModel/>
        </div>
      </AnimatedOnScrollSection>

      <AnimatedOnScrollSection duration={1}>
        <div className="h-[110vh] bg-[#f77b6b] flex items-center justify-center">
          <h1 className="text-white">Sekcja 2</h1>
        </div>
      </AnimatedOnScrollSection>

      <AnimatedOnScrollSection duration={1}>
        <div className="h-[110vh] bg-[#af6a6b] flex items-center justify-center">
          <h1 className="text-white">Sekcja 3</h1>
        </div>
      </AnimatedOnScrollSection>
    </div>
  );
}
