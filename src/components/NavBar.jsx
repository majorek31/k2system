//react
import { Fragment, useEffect, useState } from "react";

//hooks
import { useTheme } from "../hooks/useContext/useTheme";
import { useUserInfo } from "../hooks/useContext/useUserInfo";
import { useAnimation } from "../hooks/useContext/useAnimation";
import { useLocation } from "react-router-dom";
import { useShopInfo } from "../hooks/useContext/useShopInfo";

import { AnimatePresence } from "framer-motion";
import AnimatedDetailOnClick from "../animations/AnimatedDetailOnClick";

//components
import NavBarBars from "./NavBarConteners/NavBarBars";
import AccountDetails from "./NavBarConteners/AccountDetails";
import ShoppingList from "./NavBarConteners/ShoppingList";
import LanguageContainer from "./NavBarConteners/LanguageContainer";
import UserList from "./NavBarConteners/UserList";
import FilterList from "./NavBarConteners/FilterList";

export default function NavBar({ showNavBar, setShowNavBar }) {
  const [showInfo, setShowInfo] = useState(false);
  const [info, setInfo] = useState("");
  const [showUsers, setShowUsers] = useState(false);
  const [showContentForNav, setShowContentForNav] = useState(false);
  const [showContentForLanguageContainer, setShowContentForLanguageContainer] =
    useState(false);
  const [showContentForAccountDetails, setShowContentForAccountDetails] =
    useState(false);
  const [showContentForShoppingList, setShowContentForShoppingList] =
    useState(false);
  const [showFilterList, setShowFilterList] =
    useState(false);
  const { scrollY, height } = useAnimation();
  const { bGcolor } = useTheme();
  const { isAdmin } = useUserInfo();
  const { setShowProductForm } = useShopInfo();

  // check if navbar schould be visible

  useEffect(() => {
    scrollY >= height ? setShowNavBar(true) : setShowNavBar(false),
      setShowContentForNav(false),
      setShowContentForAccountDetails(false),
      setShowContentForShoppingList(false);
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
    if (showUsers) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showUsers]);

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
                  ],
                  openFlags: [
                    showContentForShoppingList,
                    showContentForAccountDetails,
                    showContentForLanguageContainer,
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
                        ],
                        openFlags: [
                          showContentForNav,
                          showContentForAccountDetails,
                          showContentForLanguageContainer,
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
                    ],
                    openFlags: [
                      showContentForNav,
                      showContentForShoppingList,
                      showContentForAccountDetails,
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
                    ],
                    openFlags: [
                      showContentForNav,
                      showContentForShoppingList,
                      showContentForLanguageContainer,
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
          setShowInfo={setShowInfo}
          setInfo={setInfo}
        />
        <LanguageContainer
          showContentForLanguageContainer={showContentForLanguageContainer}
          setShowInfo={setShowInfo}
          setInfo={setInfo}
          setShowContentForLanguageContainer={
            setShowContentForLanguageContainer
          }
        />
        <ShoppingList showContentForShoppingList={showContentForShoppingList} />
        <FilterList showFilterList={showFilterList} />
      </div>
      <UserList showUsers={showUsers} setShowUsers={setShowUsers} />
      <AnimatePresence>
        {showInfo && (
          <AnimatedDetailOnClick setActiveModal={setShowInfo}>
            {info}
          </AnimatedDetailOnClick>
        )}
      </AnimatePresence>
    </Fragment>
  );
}
