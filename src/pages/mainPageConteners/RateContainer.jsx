import AnimatedOnScrollSection from "../../animations/AnimatedOnScrollSection";

export default function RateContainer({ userName, text }) {
  return (
    <AnimatedOnScrollSection>
      <div className="m-5 rounded-xl bg-white p-5 lg:w-[calc(50vw-70px)]">
        <h1>{userName}</h1>
        <p>{text}</p>
      </div>
    </AnimatedOnScrollSection>
  );
}
