//react
import { Fragment, useEffect, useState } from "react";

//hooks
import { useTheme } from "../hooks/useContext/useTheme";
import { useAnimation } from "../hooks/useContext/useAnimation";

//components
import NavBarBars from "./NavBarConteners/NavBarBars";
import AccountDetails from "./NavBarConteners/AccountDetails";
import ShoppingList from "./NavBarConteners/ShoppingList";
import UserList from "./NavBarConteners/UserList";

export default function NavBar({ showNavBar, setShowNavBar }) {
  const [showUsers, setShowUsers] = useState(false);
  const [showContentForNav, setShowContentForNav] = useState(false);
  const [showContentForAccountDetails, setShowContentForAccountDetails] =
    useState(false);
  const [showContentForShoppingList, setShowContentForShoppingList] =
    useState(false);
  const { scrollY, height } = useAnimation();
  const { bGcolor } = useTheme();

  // check if navbar schould be visible

  useEffect(() => {
    scrollY >= height ? setShowNavBar(true) : setShowNavBar(false),
      setShowContentForNav(false),
      setShowContentForAccountDetails(false),
      setShowContentForShoppingList(false)
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

  return (
    <Fragment>
      <div
        className={`fixed top-0 right-0 left-0 z-50 flex h-fit flex-col transition-all duration-500 ease-in-out ${showNavBar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className={`mx-5 my-2 h-fit rounded-xl ${bGcolor} shadow-lg`}>
          <div className="float-left flex items-center justify-center p-0">
            <img
              src="/icons/menu.svg"
              alt="menu"
              className="scale-80 object-contain p-2 brightness-0 filter"
              onClick={() =>
                handleToggleWithDelay({
                  toggleTarget: setShowContentForNav,
                  currentTargetValue: showContentForNav,
                  closeSetters: [
                    setShowContentForShoppingList,
                    setShowContentForAccountDetails,
                  ],
                  openFlags: [
                    showContentForShoppingList,
                    showContentForAccountDetails,
                  ],
                })
              }
            />
          </div>
          <div className="float-right w-fit">
            <div className="flex">
              <img
                src="/icons/shoping_cart.svg"
                alt="menu"
                className="scale-90 object-contain p-2 brightness-0 filter"
                onClick={() =>
                  handleToggleWithDelay({
                    toggleTarget: setShowContentForShoppingList,
                    currentTargetValue: showContentForShoppingList,
                    closeSetters: [
                      setShowContentForNav,
                      setShowContentForAccountDetails,
                    ],
                    openFlags: [
                      showContentForNav,
                      showContentForAccountDetails,
                    ],
                  })
                }
              />
              <img
                src="/icons/account.svg"
                alt="menu"
                className="scale-70 object-contain p-2 brightness-0 filter"
                onClick={() =>
                  handleToggleWithDelay({
                    toggleTarget: setShowContentForAccountDetails,
                    currentTargetValue: showContentForAccountDetails,
                    closeSetters: [
                      setShowContentForNav,
                      setShowContentForShoppingList,
                    ],
                    openFlags: [showContentForNav, showContentForShoppingList],
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
        />
        <ShoppingList showContentForShoppingList={showContentForShoppingList} />
      </div>
      <UserList showUsers={showUsers} setShowUsers={setShowUsers} />
    </Fragment>
  );
}


