export default function FilterList({ showFilterList }) {
  return (
    <div
      className={`absolute top-full right-0 overflow-hidden transition-all duration-500 ease-in-out ${showFilterList ? "pointer-events-auto max-h-[1000px] translate-y-0 opacity-100" : "pointer-events-none max-h-0 translate-y-[-120px] opacity-0"}`}
    >
      <div className="m-2 mr-5 rounded-xl bg-white p-3 pr-7 pl-7 text-center shadow">
          <h1 className="p-5 font-bold">Filtruj</h1>
        </div>
    </div>
  );
}
