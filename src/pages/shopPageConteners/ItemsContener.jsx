import React from "react";

import SingleItem from "./SingleItem";

export default function ItemsContener({data,isPending ,onProductDeleted}) {
  return (
    <div className="m-5 mt-1 flex h-fit min-h-screen w-[90vw] flex-wrap justify-center gap-5 rounded-xl p-5 lg:m-auto">
      {isPending && <p>Loading...</p>}
      {data && data.map((el, i) => (
        <SingleItem
          key={i}
          howMuch={el.price}
          image={"/products/drukarka_sample.jpg"}
          name={el.name}
          brand={"Minolca"}
          productId={el.id}
          onProductDeleted={onProductDeleted}
        />
      ))}
    </div>
  );
}
