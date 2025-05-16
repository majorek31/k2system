import React, { useState } from "react";
import SingleStar from "./SingleStar";

export default function StarRate({ rating, setRating }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((num) => {
        return (
          <SingleStar
            key={num}
            index={num}
            rating={rating}
            hovered={hovered}
            setHovered={setHovered}
            setRating={setRating}
          />
        );
      })}
    </div>
  );
}
