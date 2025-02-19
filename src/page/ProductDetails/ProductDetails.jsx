import React from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../Component/ProductCard/ProductCard";

const ProductDetails = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["PRODUCT", id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/products/${id}`);
      return response.data;
    },
  });

  return <>{data && <ProductCard product={data} />}</>;
};

export default ProductDetails;
