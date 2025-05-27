import React from "react";
import AnimatedOnScrollSection from "../../animations/AnimatedOnScrollSection";

import { useUserInfo } from "../../hooks/useContext/useUserInfo";
import { useFetch } from "../../hooks/useFetch";
import { useValidToken } from "../../hooks/useValidToken";

export default function SingleItem({
  el,
  onProductDeleted,
  handleItemClick
}) {
  const { isAdmin } = useUserInfo();
  const { doFetch: DeleteSingleProduct } = useFetch();
  const { getToken } = useValidToken();
  const Delete = async () => {
    const token = await getToken();
    if (!token) return;
    DeleteSingleProduct(`http://localhost:5000/product/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (onProductDeleted) onProductDeleted();
  };
  return (
    <AnimatedOnScrollSection className="flex w-full flex-col gap-5 sm:w-[48%] md:w-[30%] lg:w-[23%]">
      <div className="relative flex h-100 flex-col rounded-xl bg-white p-4 shadow-md" onClick={() => handleItemClick(el)}>
        {isAdmin && (
          <button
            className="absolute -top-2 -right-2 z-[10] flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-2xl text-white shadow-md"
            onClick={() => Delete()}
          >
            &times;
          </button>
        )}
        <img
          src={el.productImages[0].imagePath}
          alt={el.productImages[0].imagePath}
          className="h-48 w-full rounded-md object-cover"
        />
        <h1 className="text-xl font-semibold">{el.name}</h1>
        <p className="text-gray-600">brand</p>
        <p className="mt-auto font-bold text-green-600">{el.price}</p>
      </div>
    </AnimatedOnScrollSection>
  );
}
