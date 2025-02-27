import React, { createContext, useEffect, useState } from "react";

export let UserContext = createContext(0);
export default function UserContextProvider(props) {
  const [userLogin, setUserLogin] = useState(localStorage.getItem("token"));
  useEffect(() => {
    setUserLogin(localStorage.getItem("token"));
  }, [userLogin]);

  return (
    <UserContext.Provider value={{ userLogin, setUserLogin }}>
      {props.children}
    </UserContext.Provider>
  );
}
