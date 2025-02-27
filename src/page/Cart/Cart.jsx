import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../Component/ProductCard/ProductCard";
import { v4 } from "uuid";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const checkIsEmpty = useSelector((state) => state.cart.products);

  return (
    <>
      {checkIsEmpty.length === 0 ? (
        <div class="alert alert-warning" role="alert">
          <p className="mb-5 fs-1 fw-bolder text-center text-capitalize">
            cart is empty
          </p>
        </div>
      ) : (
        <div className="products-contianer">
          {cart.products?.map((product) => (
            <>
              <ProductCard
                product={product}
                key={product.id}
                isCartItem={true}
              />
            </>
          ))}
        </div>
      )}

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>totalQuantity</th>
              <th>totalPrice</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{cart.totalQuantity}</td>
              <td>{cart.totalPrice}</td>
            </tr>
          </tbody>
              
        </table>
      </div>
    </>
  );
};

export default Cart;
