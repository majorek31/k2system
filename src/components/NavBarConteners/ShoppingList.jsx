import { useShopInfo } from "../../hooks/useContext/useShopInfo";

export default function ShoppingList({ showContentForShoppingList }) {
  const {
    productsForOdrder,
    setProductsForOdrder,
    setShowContentForShoppingList,
    setShowOrderContainer,
  } = useShopInfo();

  const DeleteFromShopingCart = (id) => {
    setProductsForOdrder(productsForOdrder.filter((el) => el.id !== id));
  };

  return (
    <div
      className={`absolute top-full right-0 overflow-hidden transition-all duration-500 ease-in-out ${showContentForShoppingList ? "pointer-events-auto max-h-[1000px] translate-y-0 opacity-100" : "max-h- pointer-events-none translate-y-[-120px] opacity-0"}`}
    >
      <div
        style={{
          scrollbarWidth: "none", // firefox
          msOverflowStyle: "none", // IE and Edge
        }}
        className="m-2 mr-5 max-h-200 overflow-auto rounded-xl bg-white p-10 text-center text-black shadow"
      >
        <h1 className="p-5 text-3xl font-bold">
          Ilość elementów w koszyku: {productsForOdrder.length}
        </h1>
        {productsForOdrder.map((el, i) => (
          <div
            key={i}
            className="flex flex-row items-center justify-between gap-10 p-5"
          >
            <img
              src={el.image}
              alt="img"
              className="h-18 w-18 rounded-md object-cover"
            />
            <p className="text-xl">{el.name}</p>
            <p className="text-xl">{el.quantity}</p>
            <button
              onClick={() => DeleteFromShopingCart(el.id)}
              className="rounded border-3 border-slate-700 bg-white pr-4 pl-4 text-xl text-slate-700 shadow-xl transition-all duration-300 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-140"
            >
              usuń z koszyka
            </button>
          </div>
        ))}
        {productsForOdrder.length === 0 ? (
          <p>Koszyk pusty</p>
        ) : (
          <button
            onClick={() => (
              setShowContentForShoppingList(false), setShowOrderContainer(true)
            )}
            className="mt-4 mr-auto ml-auto rounded border-3 border-slate-700 bg-white p-2 pr-4 pl-4 text-xl text-slate-700 shadow-xl transition-all duration-300 hover:scale-120 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-140"
          >
            Idz do kasy
          </button>
        )}
      </div>
    </div>
  );
}
