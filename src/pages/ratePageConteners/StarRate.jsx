import React, { useState } from "react";
import SingleStar from "./SingleStar";

export default function StarRate({ rating, setRating, rateSetting }) {
  const [hovered, setHovered] = useState(0);
  return (
    <>
      {rateSetting && <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((num) => {
          return (
            <SingleStar
              rateSetting={true}
              key={num}
              index={num}
              rating={rating}
              hovered={hovered}
              setHovered={setHovered}
              setRating={setRating}
            />
          );
        })}
      </div>}

      {!rateSetting && <div className="flex items-center gap-1">
        {Array.from({ length: rating }).map((num) => {
          return (
            <SingleStar
              rateSetting={false}
              key={num}
              index={num}
              rating={rating}
              color={true}
            />
          );
        })}
        {Array.from({ length: 5 - rating }).map((num) => {
          return (
            <SingleStar
              rateSetting={false}
              key={num}
              index={num}
              color={false}
            />
          );
        })}
      </div>}
    </>
  );
}
