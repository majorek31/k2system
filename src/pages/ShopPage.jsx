import {useEffect} from "react";
import ItemsContener from "./shopPageConteners/ItemsContener";
import SearchBar from "./shopPageConteners/SearchBar";

export default function ShopPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-35">
      <SearchBar />
      <ItemsContener />
    </div>
  );
}
