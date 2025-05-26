import React from "react";

export default function SingleCard({ user, onBack }) {
  const dataTest = [
    {
      id: 1,
      name: "Kurwa Męska Koszulka",
      description: "Bawełniana koszulka z mega wygodnego materiału, rozmiar L",
      quantityInStock: 25,
      createdAt: "2025-05-20T15:10:00.000Z",
      price: 59.99,
      sku: "KMK-L-001",
      productImages: [
        {
          id: 101,
          productId: 1,
          imagePath: "/images/products/koszulka1.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Spodnie Dresowe",
      description: "Ciepłe spodnie dresowe na zimę, rozmiar M",
      quantityInStock: 10,
      createdAt: "2025-04-15T11:45:00.000Z",
      price: 129.5,
      sku: "SD-M-007",
      productImages: [
        {
          id: 102,
          productId: 2,
          imagePath: "/images/products/spodnie1.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "Buty Sportowe",
      description: "Wygodne buty do biegania, czarne, rozmiar 42",
      quantityInStock: 5,
      createdAt: "2025-03-05T09:30:00.000Z",
      price: 299.99,
      sku: "BS-42-099",
      productImages: [
        {
          id: 103,
          productId: 3,
          imagePath: "/images/products/buty1.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Buty Sportowe",
      description: "Wygodne buty do biegania, czarne, rozmiar 42",
      quantityInStock: 5,
      createdAt: "2025-03-05T09:30:00.000Z",
      price: 299.99,
      sku: "BS-42-099",
      productImages: [
        {
          id: 103,
          productId: 3,
          imagePath: "/images/products/buty1.jpg",
        },
      ],
    },
    {
      id: 5,
      name: "Buty Sportowe",
      description: "Wygodne buty do biegania, czarne, rozmiar 42",
      quantityInStock: 5,
      createdAt: "2025-03-05T09:30:00.000Z",
      price: 299.99,
      sku: "BS-42-099",
      productImages: [
        {
          id: 103,
          productId: 3,
          imagePath: "/images/products/buty1.jpg",
        },
      ],
    },
    {
      id: 6,
      name: "Buty Sportowe",
      description: "Wygodne buty do biegania, czarne, rozmiar 42",
      quantityInStock: 5,
      createdAt: "2025-03-05T09:30:00.000Z",
      price: 299.99,
      sku: "BS-42-099",
      productImages: [
        {
          id: 103,
          productId: 3,
          imagePath: "/images/products/buty1.jpg",
        },
      ],
    },
  ];
  return (
    <div className="flex h-[80vh] w-[70vw] flex-col gap-6 rounded-xl text-xl text-black">
      <button onClick={onBack} className="absolute top-4 left-4 scale-70">
        <img src="/icons/arrow.svg" alt="arrow" />
      </button>
      <div className="flex flex-col gap-5 p-20">
        <h2 className="text-6xl font-bold text-slate-700">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-3xl">
          Rola:{" "}
          {user?.scopes?.some((scope) => scope.value === "admin")
            ? "admin"
            : "user"}
        </p>
        <p>Konto utworzone: {user.createdAt.slice(0, 10)}</p>
        {user.userType == "Personal" ? (
          <p>Osoba fizyczna</p>
        ) : (
          <div>
            <p>Firma</p>
            <p>Numer VAT: {user.vatNumber}</p>
            <p>Nazwa Firmy: {user.companyName}</p>
          </div>
        )}
        <div className="m-5 flex justify-center gap-15 p-5">
          <button className="text-md rounded border-3 border-slate-700 bg-white p-3 pr-6 pl-6 text-slate-700 shadow-xl transition-all duration-300 hover:scale-110 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-125">
            Nadaj role{" "}
            {user?.scopes?.some((scope) => scope.value === "admin")
              ? "usera"
              : "admina"}
          </button>
          <button className="text-md rounded border-3 border-slate-700 bg-white p-3 pr-6 pl-6 text-slate-700 shadow-xl transition-all duration-300 hover:scale-110 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-125">
            Usuń urzytkownika
          </button>
        </div>
        <p className="p-2 text-2xl font-bold text-slate-700">
          Historia Zakupów:
        </p>
        {dataTest.length === 0 ? (
          <div
            style={{
              scrollbarWidth: "none", // firefox
              msOverflowStyle: "none", // IE and Edge
            }}
            className="h-150 max-h-120 overflow-auto flex justify-center items-center rounded-md border border-2 border-slate-700 p-4"
          >
            <p>historia zakupów pusta</p>
          </div>
        ) : (
          <div
            style={{
              scrollbarWidth: "none", // firefox
              msOverflowStyle: "none", // IE and Edge
            }}
            className="h-full max-h-120 overflow-auto rounded-md border border-2 border-slate-700 p-4"
          >
            {dataTest.map((item) => (
              <div
                key={item.id}
                className="mb-4 flex gap-4 border-b border-slate-300 pb-4 last:mb-0 last:border-b-0"
              >
                <div className="flex flex-col justify-between">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p>
                    Ilość kupionych sztuk: <span>{item.quantityInStock}</span>
                  </p>
                  <p className="text-lg font-semibold">
                    Cena: {item.price.toFixed(2)} PLN
                  </p>
                  <p>SKU: {item.sku}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
