import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../redux/Slice/productsSlice";
import ProductCard from "../../Component/ProductCard/ProductCard";
import styles from "./ProductsWithThunk.module.css";

const ProductsWithThunk = () => {
  const { products, isLoading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <div className="container mt-4">
      {isLoading && (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <span className={styles.loader}></span>
        </div>
      )}

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {!isLoading && !error && (
        <div className={`row ${styles.productsContainer}`}>
          {products?.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className=" col-md-3 mb-4">
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <h3 className="text-center">No products available</h3>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsWithThunk;
