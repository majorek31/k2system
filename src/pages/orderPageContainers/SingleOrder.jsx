import React from "react";

export default function SingleOrder({ el, i }) {
  console.log(el);
  return (
    <div key={i}>
      <h1 className="text-2xl font-bold">numer zamówienia: {el.id}</h1>
      <p>status zamówienia: {el.orderStatus}</p>
      <p>
        {el.city} {el.streetName}
      </p>
    </div>
  );
}
