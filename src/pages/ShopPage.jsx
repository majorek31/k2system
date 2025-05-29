import { useEffect, useState } from "react";
import ItemsContener from "./shopPageConteners/ItemsContener";
import { useShopInfo } from "../hooks/useContext/useShopInfo";
import { useUserInfo } from "../hooks/useContext/useUserInfo";
import { useFetch } from "../hooks/useFetch";
import AnimatedDetailOnClick from "../animations/AnimatedDetailOnClick";
import { AnimatePresence } from "framer-motion";
import AddProductForm from "./shopPageConteners/AddProductForm";

export default function ShopPage() {
  const { showProductForm, setShowProductForm, selectedFilterType } =
    useShopInfo();
  const { isAdmin } = useUserInfo();
  const { data, isPending, doFetch } = useFetch();
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (showProductForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showProductForm]);

  useEffect(() => {
    doFetch("/product", {
      method: "GET",
    });
  }, [refreshTrigger]);

  useEffect(() => {
    if (selectedFilterType !== "all") {
      setFilterData(data.filter((el) => el.tag === selectedFilterType));
    }
  }, [selectedFilterType]);

  const refreshData = () => setRefreshTrigger((prev) => prev + 1);

  return (
    <div className="mt-55">
      <ItemsContener
        data={selectedFilterType === "all" ? data : filterData}
        isPending={isPending}
        onProductDeleted={refreshData}
      />
      <AnimatePresence>
        {showProductForm && isAdmin && (
          <AnimatedDetailOnClick setActiveModal={setShowProductForm}>
            <div className="m-3 flex flex-col gap-7 p-3">
              <AddProductForm onProductAdded={refreshData} setShowProductForm={setShowProductForm} />
            </div>
          </AnimatedDetailOnClick>
        )}
      </AnimatePresence>
    </div>
  );
}
