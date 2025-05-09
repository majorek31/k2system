import React, { useState, useEffect } from "react";
import AnimatedOnScrollSection from "../animations/AnimatedOnScrollSection"
// import PrinterModel from "../components/3dModels/PrinterModel"
export default function MainPage() {
  return (
    <div className="snap-y snap-mandatory h-screen">
      <AnimatedOnScrollSection>
        <div className="h-[110vh] bg-red-400 flex items-center justify-center">
          <h1 className="text-white text-5xl">Sekcja 1</h1>
        </div>
      </AnimatedOnScrollSection>

      <AnimatedOnScrollSection>
        <div className="h-[110vh] bg-blue-400 flex items-center justify-center">
          <h1 className="text-white text-5xl">Sekcja 2</h1>
        </div>
      </AnimatedOnScrollSection>

      <AnimatedOnScrollSection>
        <div className="h-[110vh] bg-green-400 flex items-center justify-center">
          <h1 className="text-white text-5xl">Sekcja 3</h1>
        </div>
      </AnimatedOnScrollSection>
    </div>
  )
}