import React, { useState } from "react";
import AnimatedOnScrollSection from "../../animations/AnimatedOnScrollSection";
import DeleteButton from "./DeleteButton";

import { useUserInfo } from "../../hooks/useContext/useUserInfo";
import { useFetch } from "../../hooks/useFetch";
import { useValidToken } from "../../hooks/useValidToken";

export default function SingleItem({ el, onProductDeleted, handleItemClick }) {
  const { isAdmin } = useUserInfo();
  const { doFetch: DeleteSingleProduct } = useFetch();
  const { getToken } = useValidToken();
  const [hover, setHover] = useState(false);

  const Delete = async (val) => {
    const token = await getToken();
    if (!token) return;
    DeleteSingleProduct(`/product/${el.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (onProductDeleted) onProductDeleted();
  };

  return (
    <AnimatedOnScrollSection className="flex w-full flex-col gap-5 sm:w-[48%] md:w-[30%] lg:w-[23%]">
      <div className="relative flex h-100 cursor-pointer flex-col rounded-xl bg-white p-4 shadow-md">
        {isAdmin && <DeleteButton onClick={Delete} />}
        <div onClick={() => handleItemClick(el)}>
          <img
            src={el.productImages[0].imagePath}
            alt={el.productImages[0].imagePath}
            className="h-48 w-full rounded-md object-cover"
          />
          <h1 className="text-3xl font-semibold">{el.name}</h1>
          <p className="text-gray-600">{el.tag}</p>
          <p className="text-gray-600">{el.manufacturer}</p>
          <p className="mt-auto font-bold text-green-600">{el.price}</p>
        </div>
      </div>
    </AnimatedOnScrollSection>
  );
}
