import React from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedDetailOnClick from "../../animations/AnimatedDetailOnClick";
import SingleUserCard from "./SingleUserCard";

export default function UserList({ showUsers, setShowUsers }) {
  const data = {};
  return (
    <AnimatePresence>
      {showUsers && (
        <AnimatedDetailOnClick setActiveModal={setShowUsers}>
          <div className="h-[80vh] w-[70vw] overflow-y-auto">
            <SingleUserCard
              firstName={"Olek"}
              lastName={"hansel"}
              userEmail={"aaa@gmail.com"}
              userRole={"user"}
              userShopHistory={data}
            />
            <SingleUserCard
              firstName={"Maks"}
              lastName={"Borucki"}
              userEmail={"bbb@gmail.com"}
              userRole={"admin"}
              userShopHistory={data}
            />
            <SingleUserCard
              firstName={"Jakub"}
              lastName={"Barwicki"}
              userEmail={"ccc@gmail.com"}
              userRole={"user"}
              userShopHistory={data}
            />
          </div>
        </AnimatedDetailOnClick>
      )}
    </AnimatePresence>
  );
}
