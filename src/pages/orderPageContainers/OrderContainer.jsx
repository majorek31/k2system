import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useValidToken } from "../../hooks/useValidToken";
import { useUserInfo } from "../../hooks/useContext/useUserInfo";
import SingleOrder from "./SingleOrder";
import SingleOrderDetail from "./SingleOrderDetail";
import { AnimatePresence } from "framer-motion";
import AniamtedOnChangeOpacity from "../../animations/AniamtedOnChangeOpacity";
import Radio from "../registerPageConteners/Radio";

export default function OrderContainer() {
  const { data, isePending, doFetch: GetOrders } = useFetch();
  const { isAdmin, isLogged } = useUserInfo();
  const { getToken } = useValidToken();

  const [selectedOrder, setSelectedOrder] = useState(null);

  // selectedType to status string albo "" dla wszystkich
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      const token = await getToken();
      if (!token) return;

      const userId = localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData")).id
        : null;

      const url = isAdmin
        ? "/order"
        : isLogged
          ? `/user/me/order?userId=${userId}`
          : null;
      if (!url) return;

      await GetOrders(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    };

    fetchOrders();
  }, [isAdmin, isLogged]);

  const orderStatuses = [
    { id: 1, status: "Pending" },
    { id: 2, status: "Paid" },
    { id: 3, status: "Shipped" },
    { id: 4, status: "Delivered" },
    { id: 5, status: "Cancelled" },
  ];

  // Filtrujemy zamówienia wg statusu, jeśli selectedType jest pusty, pokazujemy wszystko
  const filteredOrders = !data
    ? []
    : selectedType === ""
      ? data
      : data.filter((order) => order.orderStatus === selectedType);

  return (
    <AnimatePresence mode="wait">
      {isePending && <p>Loading...</p>}
      {!selectedOrder ? (
        <AniamtedOnChangeOpacity key="orders-list" isVisible={true}>
          <div className="flex flex-col gap-6 p-5">
            <h1 className="text-5xl font-bold text-slate-700">Zamówienia:</h1>
            {isAdmin && (
              <div className="flex flex-wrap justify-between gap-4">
                {orderStatuses.map((el) => (
                  <Radio
                    key={el.id}
                    name="orderStatus"
                    value={el.status}
                    checked={selectedType === el.status}
                    onChange={() => setSelectedType(el.status)}
                  >
                    {el.status}
                  </Radio>
                ))}
                <Radio
                  key="all"
                  name="orderStatus"
                  value=""
                  checked={selectedType === ""}
                  onChange={() => setSelectedType("")}
                >
                  Wszystkie
                </Radio>
              </div>
            )}

            {filteredOrders.length === 0 ? (
              <div className="flex h-[80vh] max-h-[80vh] w-[70vw] items-center justify-center">
                <h1 className="text-center text-5xl font-bold">
                  Nie znaleziono zamówień o wybranym statusie
                </h1>
              </div>
            ) : (
              <div className="flex h-[80vh] max-h-[80vh] w-[70vw] flex-wrap gap-4 overflow-y-auto">
                {filteredOrders.map((el, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedOrder(el)}
                    className="flex h-80 w-1/3 cursor-pointer flex-col items-center justify-center gap-4 rounded-xl bg-slate-700 p-4 text-white shadow transition-transform duration-300 hover:scale-105 sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
                  >
                    <SingleOrder el={el} i={i} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </AniamtedOnChangeOpacity>
      ) : (
        <AniamtedOnChangeOpacity key="order-detail" isVisible={true}>
          <SingleOrderDetail
            orderStatuses={orderStatuses}
            order={selectedOrder}
            setSelectedOrder={setSelectedOrder}
          />
        </AniamtedOnChangeOpacity>
      )}
    </AnimatePresence>
  );
}
