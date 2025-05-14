import AnimatedOnScrollSection from "../../animations/AnimatedOnScrollSection";

export default function ContactContainer({ title, pars, icon }) {
  return (
    <AnimatedOnScrollSection>
      <div className="m-4 flex h-80 w-80 flex-col items-center gap-4 rounded-3xl bg-slate-700 p-4 text-white">
        <img
          src={`../public/icons/${icon}.svg`}
          alt="mail"
          className="h-auto w-1/5 object-contain brightness-0 invert filter"
        />
        <h1 className="text-3xl">{title}</h1>
        {pars.map((val, i) => (
          <p key={i}>{val}</p>
        ))}
      </div>
    </AnimatedOnScrollSection>
  );
}
