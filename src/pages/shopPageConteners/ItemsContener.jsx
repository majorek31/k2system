import React, { useState } from "react";
import SingleItem from "./SingleItem";
import SingleItemDetail from "./SingleItemDetail";
import AnimatedDetailOnClick from "../../animations/AnimatedDetailOnClick"; // Upewnij się, że ścieżka jest poprawna

export default function ItemsContener({ data, isPending, onProductDeleted }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="m-5 mt-1 flex h-fit min-h-screen w-[90vw] flex-wrap justify-center gap-5 rounded-xl p-5 lg:m-auto">
      {isPending && <p>Loading...</p>}
      {data?.map((el, i) => (
        <SingleItem
          el={el}
          handleItemClick={handleItemClick}
          key={i}
          onProductDeleted={onProductDeleted}
        />
      ))}

      {selectedItem && (
        <AnimatedDetailOnClick setActiveModal={handleClose} >
          <SingleItemDetail
            el={selectedItem}
          />
        </AnimatedDetailOnClick>
      )}
    </div>
  );
}
