import { useShopInfo } from "../../hooks/useContext/useShopInfo";
import Radio from "../../pages/registerPageConteners/Radio";
import { useState } from "react";

export default function FilterList({ showFilterList }) {
  const { selectedFilterType, setSelectedFilterType } = useShopInfo();

  const [visible, setVisible] = useState(true);
  return (
    <div
      className={`absolute top-full right-0 overflow-hidden transition-all duration-500 ease-in-out ${showFilterList ? "pointer-events-auto max-h-[1000px] translate-y-0 opacity-100" : "pointer-events-none max-h-0 translate-y-[-120px] opacity-0"}`}
    >
      <div className="m-2 mr-5 h-100 rounded-xl bg-white p-3 pr-7 pl-7 text-center shadow">
        <div className="items-left flex h-full flex-col justify-between p-5 text-center">
          <h1 className="text-4xl font-bold">Filtruj produkty:</h1>
          <Radio
            name="manufacturer"
            value="Drukarka"
            checked={selectedFilterType === "Drukarka"}
            onChange={() => setSelectedFilterType("Drukarka")}
            onClick={() => setVisible(true)}
          >
            <p className="text-xl text-black">Drukarka</p>
          </Radio>
          <Radio
            name="manufacturer"
            value="Kserokopiarka"
            checked={selectedFilterType === "Kserokopiarka"}
            onChange={() => setSelectedFilterType("Kserokopiarka")}
            onClick={() => setVisible(true)}
          >
            <p className="text-xl text-black">Kserokopiarka</p>
          </Radio>
          <Radio
            name="manufacturer"
            value="kopiarka"
            checked={selectedFilterType === "kopiarka"}
            onChange={() => setSelectedFilterType("kopiarka")}
            onClick={() => setVisible(true)}
          >
            <p className="text-xl text-black">kopiarka</p>
          </Radio>
          <Radio
            name="manufacturer"
            value="DrukarkaWielofunkcyjna"
            checked={selectedFilterType === "DrukarkaWielofunkcyjna"}
            onChange={() => setSelectedFilterType("DrukarkaWielofunkcyjna")}
            onClick={() => setVisible(true)}
          >
            <p
              style={{
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE i Edge
              }}
              className="text-xl whitespace-nowrap text-black"
            >
              Drukarka Wielofunkcyjna
            </p>
          </Radio>
          <Radio
            name="manufacturer"
            value="all"
            checked={selectedFilterType === "all"}
            onChange={() => setSelectedFilterType("all")}
            onClick={() => setVisible(true)}
          >
            <p className="text-xl whitespace-nowrap text-black">
              Wszystkie produkty
            </p>
          </Radio>
        </div>
      </div>
    </div>
  );
}
