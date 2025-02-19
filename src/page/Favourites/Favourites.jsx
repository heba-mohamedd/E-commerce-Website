import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../Component/ProductCard/ProductCard";

const Favourites = () => {
  const fav = useSelector((state) => state.fav);
  return (
    <div>
      <div className="products-contianer">
        {fav.products?.map((product) => (
          <>
            <ProductCard product={product} key={product.id} isFavItem={true} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
