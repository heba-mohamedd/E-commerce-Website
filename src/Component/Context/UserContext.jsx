import React, { createContext, useEffect, useState } from "react";

export let UserContext = createContext(null);

export default function UserContextProvider({ children }) {
  const [userLogin, setUserLogin] = useState(() =>
    localStorage.getItem("token")
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setUserLogin(localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <UserContext.Provider value={{ userLogin, setUserLogin }}>
      {children}
    </UserContext.Provider>
  );
}
