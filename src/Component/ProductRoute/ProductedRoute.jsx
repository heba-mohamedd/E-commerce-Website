import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProductedRoute = (props) => {
  const { user } = useSelector((state) => state.auth);
  if (localStorage.getItem("token") !== null) {
    return props.children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default ProductedRoute;
