//react
import { Fragment, useEffect, useState } from "react";

//hooks
import { useTheme } from "../hooks/useContext/useTheme";
import { useUserInfo } from "../hooks/useContext/useUserInfo";
import { useAnimation } from "../hooks/useContext/useAnimation";
import { useLocation } from "react-router-dom";
import { useShopInfo } from "../hooks/useContext/useShopInfo";
import { useShowError } from "../hooks/useContext/useShowError";

import { AnimatePresence } from "framer-motion";
import AnimatedDetailOnClick from "../animations/AnimatedDetailOnClick";

//components
import NavBarBars from "./NavBarConteners/NavBarBars";
import AccountDetails from "./NavBarConteners/AccountDetails";
import ShoppingList from "./NavBarConteners/ShoppingList";
import LanguageContainer from "./NavBarConteners/LanguageContainer";
import UserList from "./NavBarConteners/UserList";
import FilterList from "./NavBarConteners/FilterList";
import AddOrderContainer from "../pages/orderPageContainers/AddOrderContainer";
import OrderContainer from "../pages/orderPageContainers/OrderContainer";

export default function NavBar({ showNavBar, setShowNavBar }) {
  const [showOrders, setShowOrders] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [showContentForNav, setShowContentForNav] = useState(false);
  const [showContentForLanguageContainer, setShowContentForLanguageContainer] =
    useState(false);
  const [showContentForAccountDetails, setShowContentForAccountDetails] =
    useState(false);
  const [showFilterList, setShowFilterList] = useState(false);
  const { scrollY, height } = useAnimation();
  const { bGcolor } = useTheme();
  const { isAdmin } = useUserInfo();
  const {
    setShowProductForm,
    showContentForShoppingList,
    setShowContentForShoppingList,
    setShowOrderContainer,
    showOrderContainer,
  } = useShopInfo();
  const { isError, setIsError, errorContent, setErrorContent } = useShowError();

  // check if navbar schould be visible

  useEffect(() => {
    scrollY >= height ? setShowNavBar(true) : setShowNavBar(false),
      setShowContentForNav(false),
      setShowContentForAccountDetails(false),
      setShowContentForShoppingList(false);
    setShowFilterList(false);
  }, [scrollY, height]);

  function handleToggleWithDelay({
    toggleTarget,
    currentTargetValue,
    closeSetters,
    openFlags,
    delay = 500,
  }) {
    const shouldDelay = openFlags.some((flag) => flag);

    // Zamknij wszystkie inne panele
    closeSetters.forEach((set) => set(false));

    if (shouldDelay) {
      setTimeout(() => {
        toggleTarget(!currentTargetValue);
      }, delay);
    } else {
      toggleTarget(!currentTargetValue);
    }
  }

  useEffect(() => {
    if (showUsers || showOrderContainer || showOrders) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showUsers, showOrderContainer,showOrders]);

  const location = useLocation();

  return (
    <Fragment>
      <div
        className={`fixed top-0 right-0 left-0 z-50 flex h-fit flex-col transition-all duration-500 ease-in-out ${showNavBar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div
          className={`mx-5 my-2 h-fit rounded-xl ${bGcolor} flex justify-between shadow-lg`}
        >
          <div
            className={`${location.pathname === "/shop" ? "float-left flex items-center justify-center p-3" : "float-left flex items-center justify-center p-0"} `}
          >
            <img
              src="/icons/menu.svg"
              alt="menu"
              className={`${location.pathname === "/shop" ? "scale-100 object-contain p-2 brightness-0 filter" : "scale-80 object-contain p-2 brightness-0 filter"} `}
              onClick={() =>
                handleToggleWithDelay({
                  toggleTarget: setShowContentForNav,
                  currentTargetValue: showContentForNav,
                  closeSetters: [
                    setShowContentForShoppingList,
                    setShowContentForAccountDetails,
                    setShowContentForLanguageContainer,
                    setShowFilterList,
                  ],
                  openFlags: [
                    showContentForShoppingList,
                    showContentForAccountDetails,
                    showContentForLanguageContainer,
                    showFilterList,
                  ],
                })
              }
            />
          </div>
          <div>
            <div className="flex items-center p-3">
              {location.pathname === "/shop" && (
                <Fragment>
                  {isAdmin && (
                    <div className="flex w-50 items-center pr-2 pl-2 text-xl font-bold">
                      <button onClick={() => setShowProductForm(true)}>
                        Dodaj Produkt
                      </button>
                    </div>
                  )}
                  <img
                    src="/icons/filter.svg"
                    alt="filter"
                    className="w-fit scale-80 object-contain p-2 brightness-0 filter"
                    onClick={() =>
                      handleToggleWithDelay({
                        toggleTarget: setShowFilterList,
                        currentTargetValue: showFilterList,
                        closeSetters: [
                          setShowContentForNav,
                          setShowContentForAccountDetails,
                          setShowContentForLanguageContainer,
                        ],
                        openFlags: [
                          showContentForNav,
                          showContentForAccountDetails,
                          showContentForLanguageContainer,
                        ],
                      })
                    }
                  />
                  <img
                    src="/icons/shoping_cart.svg"
                    alt="menu"
                    className="w-fit scale-90 object-contain p-2 brightness-0 filter"
                    onClick={() =>
                      handleToggleWithDelay({
                        toggleTarget: setShowContentForShoppingList,
                        currentTargetValue: showContentForShoppingList,
                        closeSetters: [
                          setShowContentForNav,
                          setShowContentForAccountDetails,
                          setShowContentForLanguageContainer,
                          setShowFilterList,
                        ],
                        openFlags: [
                          showContentForNav,
                          showContentForAccountDetails,
                          showContentForLanguageContainer,
                          showFilterList,
                        ],
                      })
                    }
                  />
                </Fragment>
              )}
              <img
                src="/icons/language.svg"
                alt="language"
                className="w-fit scale-100 object-contain p-2 brightness-0 filter"
                onClick={() =>
                  handleToggleWithDelay({
                    toggleTarget: setShowContentForLanguageContainer,
                    currentTargetValue: showContentForLanguageContainer,
                    closeSetters: [
                      setShowContentForNav,
                      setShowContentForShoppingList,
                      setShowContentForAccountDetails,
                      setShowFilterList,
                    ],
                    openFlags: [
                      showContentForNav,
                      showContentForShoppingList,
                      showContentForAccountDetails,
                      showFilterList,
                    ],
                  })
                }
              />
              <img
                src="/icons/account.svg"
                alt="menu"
                className="w-fit scale-70 object-contain p-2 brightness-0 filter"
                onClick={() =>
                  handleToggleWithDelay({
                    toggleTarget: setShowContentForAccountDetails,
                    currentTargetValue: showContentForAccountDetails,
                    closeSetters: [
                      setShowContentForNav,
                      setShowContentForShoppingList,
                      setShowContentForLanguageContainer,
                      setShowFilterList,
                    ],
                    openFlags: [
                      showContentForNav,
                      showContentForShoppingList,
                      showContentForLanguageContainer,
                      showFilterList,
                    ],
                  })
                }
              />
            </div>
          </div>
        </div>
        <NavBarBars showContentForNav={showContentForNav} />
        <AccountDetails
          showContentForAccountDetails={showContentForAccountDetails}
          setShowContentForAccountDetails={setShowContentForAccountDetails}
          setShowUsers={setShowUsers}
          setShowOrders={setShowOrders}
          setShowInfo={setIsError}
          setInfo={setErrorContent}
        />
        <LanguageContainer
          showContentForLanguageContainer={showContentForLanguageContainer}
          setShowInfo={setIsError}
          setInfo={setErrorContent}
          setShowContentForLanguageContainer={
            setShowContentForLanguageContainer
          }
        />
        <ShoppingList showContentForShoppingList={showContentForShoppingList} />
        <FilterList showFilterList={showFilterList} />
      </div>
      <AnimatePresence mode="wait">
        {showUsers && (
          <AnimatedDetailOnClick setActiveModal={setShowUsers} key={"userList"}>
            <UserList />
          </AnimatedDetailOnClick>
        )}
        {showOrders && (
          <AnimatedDetailOnClick setActiveModal={setShowOrders} key={"orderList"}>
            <OrderContainer />
          </AnimatedDetailOnClick>
        )}
        {showOrderContainer && (
          <AnimatedDetailOnClick setActiveModal={setShowOrderContainer} key={"addOrderContainer"}>
            <AddOrderContainer />
          </AnimatedDetailOnClick>
        )}
        {isError && (
          <AnimatedDetailOnClick setActiveModal={setIsError} key={"errorContainer"}>
            {errorContent}
          </AnimatedDetailOnClick>
        )}
      </AnimatePresence>
    </Fragment>
  );
}
