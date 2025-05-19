import React from "react";

import SingleItem from "./SingleItem";

export default function ItemsContener() {
  return (
    <div className="m-5 mt-1 flex h-fit min-h-screen w-[90vw] flex-wrap justify-center gap-5 rounded-xl p-5 lg:m-auto">
      {Array.from({ length: 17 }).map((_, i) => (
        <SingleItem
          key={i}
          howMuch={"1000zł"}
          image={"/products/drukarka_sample.jpg"}
          name={`kserokopiarka ${i + 1}`}
          brand={"Minolca"}
        />
      ))}
    </div>
  );
}
