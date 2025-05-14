import AnimatedOnScrollSection from "../../animations/AnimatedOnScrollSection";

import { useState} from "react";

export default function SubscribeContainer({
  title,
  features,
  price,
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <AnimatedOnScrollSection>
      <div
        className="flex h-120 w-80 flex-col items-center justify-center gap-5 rounded-xl border-3 border-slate-700 p-4 text-slate-700 transition-all duration-[300ms] ease-in-out hover:bg-slate-700 hover:text-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={`../public/icons/printer_${isHovered ? "white" : "stale"}.svg`}
          alt="dasd"
        />
        <h1 className="p-5 text-center text-4xl">{title}</h1>
        <div className="text-center">
          {features.map((val, i) => (
            <p key={i}>{val}</p>
          ))}
        </div>
        <h1 className="p-5 text-center text-xl font-bold">
          od {price} miesięcznie
        </h1>
      </div>
    </AnimatedOnScrollSection>
  );
}
