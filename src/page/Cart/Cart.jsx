import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../Component/ProductCard/ProductCard";
import { v4 } from "uuid";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <div className="products-contianer">
        {cart.products?.map((product) => (
          <>
            <ProductCard product={product} key={product.id} isCartItem={true} />
          </>
        ))}
      </div>

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
