import { useShopInfo } from "../../hooks/useContext/useShopInfo";

export default function ShoppingList({ showContentForShoppingList }) {
  const { productsForOdrder } = useShopInfo()
  return (
    <div
      className={`absolute top-full right-0 overflow-hidden transition-all duration-500 ease-in-out ${showContentForShoppingList ? "pointer-events-auto max-h-[1000px] translate-y-0 opacity-100" : "pointer-events-none max-h-0 translate-y-[-120px] opacity-0"}`}
    >
      <div className="m-2 mr-5 rounded-xl bg-white p-10 text-center shadow">
        <h1 className="p-5 font-bold text-3xl">Ilość elementów w koszyku: {productsForOdrder.length}</h1>
        {productsForOdrder.map((el, i) => (
          <div key={i} className="p-5 flex flex-row gap-10 items-center justify-between">
            <img src={el.image} alt="" className="h-18 w-18 rounded-md object-cover" />
            <p className="text-xl">{el.name}</p>
            <p className="text-xl">{el.quantity}</p>
          </div>
        ))}
        <button className="ml-auto mr-auto mt-4 rounded border-3 border-slate-700 bg-white p-2 pr-4 pl-4 text-xl text-slate-700 shadow-xl transition-all duration-300 hover:scale-120 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-140"

        >Idz do kasy</button>
      </div>
    </div>
  );
}
