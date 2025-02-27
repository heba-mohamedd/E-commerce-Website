import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../Component/ProductCard/ProductCard";

const Favourites = () => {
  const fav = useSelector((state) => state.fav.products);
  // const favs = useSelector((state) => state.fav.products);
  return (
    <div>
      {fav.length == 0 ? (
        <div class="alert alert-warning" role="alert">
          <p className="fs-1 fw-bolder text-center text-capitalize">
            Favorite List is empty
          </p>
        </div>
      ) : (
        <div className="products-contianer">
          {fav?.map((product) => (
            <>
              <ProductCard
                product={product}
                key={product.id}
                isFavItem={true}
              />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
