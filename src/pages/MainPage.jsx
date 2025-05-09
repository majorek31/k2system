import React, { useState, useEffect } from "react";
import AnimatedOnScrollSection from "../animations/AnimatedOnScrollSection";
// import PrinterModel from "../components/3dModels/PrinterModel"
export default function MainPage() {
  return (
    <div className="h-screen snap-y snap-mandatory">
      <AnimatedOnScrollSection>
        <div className="flex h-[110vh] items-center justify-center bg-red-400">
          <h1 className="text-5xl text-white">Sekcja 1</h1>
        </div>
      </AnimatedOnScrollSection>

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
    </div>
  );
}
