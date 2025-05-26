import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedDetailOnClick from "../../animations/AnimatedDetailOnClick";
import SingleUserCard from "./SingleUserCard";
import AniamtedOnChangeOpacity from "../../animations/AniamtedOnChangeOpacity";
import { useFetch } from "../../hooks/useFetch";
import { useUserInfo } from "../../hooks/useContext/useUserInfo";
import { useValidToken } from "../../hooks/useValidToken";
import * as jose from "jose";

export default function UserList({ showUsers, setShowUsers }) {
  const { isAdmin } = useUserInfo();
  const { data, isPending, error, doFetch } = useFetch();
  const [selectedUser, setSelectedUser] = useState(null);

  const { getToken } = useValidToken(); 

  useEffect(() => {
    const fetchUsers = async () => {
      if (isAdmin) {
        const token = await getToken();
        if (!token) return;

        await doFetch("http://localhost:5000/user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    };

    fetchUsers();
  }, [isAdmin]);

  return (
    <AnimatePresence>
      {showUsers && (
        <AnimatedDetailOnClick setActiveModal={setShowUsers}>
          <AnimatePresence mode="wait">
            {!selectedUser ? (
              <AniamtedOnChangeOpacity key="list" isVisible={true}>
                <div className="flex h-[80vh] w-[70vw] flex-wrap gap-4 overflow-y-auto">
                  {(data || []).map((el, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedUser(el)}
                      className="flex h-80 w-full scale-90 cursor-pointer flex-col items-center justify-center gap-4 rounded-xl bg-slate-700 p-4 text-white shadow transition-all duration-300 ease-in-out hover:scale-100 sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
                    >
                      <p className="text-3xl">{el.firstName}</p>
                      <p className="text-3xl">{el.lastName}</p>
                      <p className="text-2xl">
                        {el?.scopes?.some((scope) => scope.value === "admin")
                          ? "admin"
                          : "user"}
                      </p>
                    </div>
                  ))}
                </div>
              </AniamtedOnChangeOpacity>
            ) : (
              <AniamtedOnChangeOpacity key="single" isVisible={true}>
                <SingleUserCard
                  user={selectedUser}
                  onBack={() => setSelectedUser(null)}
                />
              </AniamtedOnChangeOpacity>
            )}
          </AnimatePresence>
        </AnimatedDetailOnClick>
      )}
    </AnimatePresence>
  );
}
