import React, { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useValidToken } from "../../hooks/useValidToken";

export default function SingleCard({ user, onBack }) {
  const dataTest = []

  const { doFetch: DeleteSingleUser } = useFetch();
  const { doFetch: GiveRoleToSingleUser } = useFetch();
  const { data, isPending, doFetch: getHistory } = useFetch();
  const { getToken } = useValidToken();

  useEffect(() => {
    const fetchData = async () => {
      const token = await getToken();
      if (!token) return;

      getHistory(`/user/${user.id}/order`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    };

    fetchData();
  }, [user.id]); // dodaj zależności!


  const DeleteUser = async () => {
    const token = await getToken();
    if (!token) return;
    DeleteSingleUser(`/user/${user.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const GiveRole = async (user) => {
    const token = await getToken();
    if (!token) return;

    const isAdmin = user.scopes.some(scope => scope.value === 'admin');

    const scopes = isAdmin
      ? user.scopes.filter(scope => scope.value !== 'admin')
      : [...user.scopes, { id: 1, value: 'admin' }];

    console.log(scopes);

    GiveRoleToSingleUser(`/user/${user.id}/scope`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ scopes })
    });
  };
  return (
    <div className="flex h-[80vh] w-[70vw] flex-col gap-6 rounded-xl justify-between text-xl text-black">
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
          <button onClick={() => GiveRole(user)} className="text-md rounded border-3 border-slate-700 bg-white p-3 pr-6 pl-6 text-slate-700 shadow-xl transition-all duration-300 hover:scale-110 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-125">
            Nadaj role{" "}
            {user?.scopes?.some((scope) => scope.value === "admin")
              ? "usera"
              : "admina"}
          </button>
          <button onClick={() => DeleteUser()} className="text-md rounded border-3 border-slate-700 bg-white p-3 pr-6 pl-6 text-slate-700 shadow-xl transition-all duration-300 hover:scale-110 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-125">
            Usuń urzytkownika
          </button>
        </div>
        <p className="p-2 text-2xl font-bold text-slate-700">
          Historia Zakupów:
        </p>
        {isPending && <div
          style={{
            scrollbarWidth: "none", // firefox
            msOverflowStyle: "none", // IE and Edge
          }}
          className="h-60 max-h-60 overflow-auto flex justify-center items-center rounded-md border border-2 border-slate-700 p-4"
        >
          <p>Loading..</p>
        </div>}
        {data && data.length === 0 ? (
          <div
            style={{
              scrollbarWidth: "none", // firefox
              msOverflowStyle: "none", // IE and Edge
            }}
            className="h-60 max-h-60 overflow-auto flex justify-center items-center rounded-md border border-2 border-slate-700 p-4"
          >
            <p>historia zakupów pusta</p>
          </div>
        ) : (
          <div
            style={{
              scrollbarWidth: "none", // firefox
              msOverflowStyle: "none", // IE and Edge
            }}
            className="h-60 max-h-60 overflow-auto rounded-md border border-2 border-slate-700 p-4"
          >
            {data && data.orderItems.map((item) => (
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
