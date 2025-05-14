import AnimatedOnScrollSection from "../../animations/AnimatedOnScrollSection";

export default function RateContainer({ userName, text }) {
  return (
    <AnimatedOnScrollSection>
      <div className="m-5 lg:w-[calc(50vw-70px)] bg-white p-5 rounded-xl">
        <h1>{userName}</h1>
        <p>{text}</p>
      </div>
    </AnimatedOnScrollSection>
  );
}
