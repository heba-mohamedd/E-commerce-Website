import React from "react";
// import products from "./product";
import "./product.css";
import ProductCard from "../../Component/ProductCard/ProductCard";
import axiosInstance from "../../utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "react-bootstrap";

const Products = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["PRODUCTS"],
    queryFn: async () => {
      const response = await axiosInstance.get("/products");
      return response.data;
    },
  });

  const { data: users } = useQuery({
    queryKey: ["USERS"],
    queryFn: async () => {
      const response = await axiosInstance.get("/users");
      return response.data;
    },
  });

  return (
    <>
      {isLoading && (
        <div className="d-flex justify-content-center mt-5 align-items-center">
          <Spinner animation="border" />
        </div>
      )}
      {error ? (
        <p>{error.message}</p>
      ) : (
        <div className="products-contianer">
          {products?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
