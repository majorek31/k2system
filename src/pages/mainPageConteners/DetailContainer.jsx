import AnimatedOnScrollSection from "../../animations/AnimatedOnScrollSection";

export default function DetailContainer({title,content,image}) {
  return (
    <AnimatedOnScrollSection>
      <div className="m-3 flex w-[33vh] flex-col gap-7 p-3 lg:w-[100vh]">
        <h1 className="text-center text-3xl font-bold">{title}</h1>
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="text-justify">
           {content}
          </div>
          <div>
            <img
              src={`/photos/${image}.jpg`}
              alt="retail_sale_ecetronic"
            />
          </div>
        </div>
      </div>
    </AnimatedOnScrollSection>
  );
}
