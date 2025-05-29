import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useValidToken } from "../../hooks/useValidToken";
import { useUserInfo } from "../../hooks/useContext/useUserInfo";

export default function SingleOrderDetail({ order, setSelectedOrder,orderStatuses }) {
  const {
    data,
    error,
    isPending,
    doFetch: GetSingleUserOrderData,
  } = useFetch();
  const { doFetch: changeOrderStatus } = useFetch();
  const { isAdmin } = useUserInfo();
  const { getToken } = useValidToken();


  const [orderStatus, setNewOrderStatus] = useState(1);
  const status = orderStatuses.find((s) => s.id === orderStatus)?.status;

  useEffect(() => {
    const fetchSingleUserOrderData = async () => {
      if (isAdmin && order?.userId) {
        const token = await getToken();
        if (!token) return;

        await GetSingleUserOrderData(`/user/${order.userId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    };

    fetchSingleUserOrderData();
  }, [isAdmin, order]);

  const newOrderStatus = async (id) => {
    if (isAdmin) {
      const token = await getToken();
      if (!token) return;
      changeOrderStatus(`/order/${id}/orderStatus`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderStatus: String(status) }),
      });
    }
  };

  const finalPrice = order.orderItems.reduce(
    (acc, item) => acc + item.quantityInStock * item.price,
    0,
  );

  return (
    <div className="relative flex h-[80vh] w-[70vw] flex-col justify-between gap-6 rounded-xl text-xl text-black">
      <button
        onClick={() => (setSelectedOrder(null), newOrderStatus(order.id))}
        className="absolute top-4 left-4 scale-75 transition-all duration-200 hover:scale-100"
      >
        <img src="/icons/arrow.svg" alt="arrow" />
      </button>

      <div className="flex h-full flex-col gap-5 p-20">
        <h1 className="text-6xl font-bold text-slate-700">
          Numer Zamówienia: {order.id}
        </h1>
        <div className="mt-10 flex h-full flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold">Adres dostawy:</h1>
            <p>Miasto: {order.city}</p>
            <p>Kod Pocztowy: {order.postalCode}</p>
            <p>Ulica: {order.streetName}</p>
            <p>
              Numer Domu / Numer Mieszkania: {order.buildingNumber}
              {order.flatNumber !== null ? "/" + order.flatNumber : ""}
            </p>
          </div>

          {isAdmin && (
            <div>
              <h1 className="text-2xl font-bold">Dane użytkownika:</h1>

              {isPending && <p>Ładowanie danych użytkownika...</p>}
              {error && <p>Nie znaleziono danych użytkownika...</p>}
              {data && (
                <div>
                  <p>
                    Imię i nazwisko: {data.firstName} {data.lastName}
                  </p>
                  <p>Email: {data.email}</p>
                  <p>
                    {data.userType === "Personal" ? "Osoba prywatna" : "Firma"}
                  </p>
                </div>
              )}
            </div>
          )}
          <div>
            <div
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              className="h-60 max-h-60 overflow-auto rounded-md border border-2 border-slate-700 p-4"
            >
              {order.orderItems.map((item) => (
                <div
                  key={item.id}
                  className="mb-4 flex gap-4 border-b border-slate-300 pb-4 last:mb-0 last:border-b-0"
                >
                  <div className="flex flex-col justify-between">
                    <h3 className="text-xl font-bold">{item.name}</h3>
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
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              Cena zamówienia: {finalPrice.toLocaleString("pl-PL")}zł
            </h1>
          </div>
          {/* bedzie to mozna zmienaic w przyszlosci */}
          <div>
            <h1 className="text-2xl font-bold">
              {isAdmin ? (
                <p>
                  Status Zamówienia:{" "}
                  <button
                    onClick={() =>
                      setNewOrderStatus((prev) =>
                        prev === orderStatuses.length ? 1 : prev + 1,
                      )
                    }
                    className="m-3 rounded border-3 border-slate-700 bg-white p-5 text-slate-700 shadow transition-all duration-300 hover:scale-110 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-125"
                  >
                    {status}
                  </button>
                </p>
              ) : (
                <p>Status Zamówienia: {order.orderStatus}</p>
              )}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
