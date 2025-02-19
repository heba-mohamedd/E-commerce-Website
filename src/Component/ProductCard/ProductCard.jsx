import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
} from "../../redux/Slice/cartSlice";
import { addToFav, removeFromFav } from "../../redux/Slice/favSlice";

const ProductCard = ({ product, isCartItem = false, isFavItem = false }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [count, setCount] = useState(0);

  function handleAddToFav(event) {
    // setCount(count + 1);
    event.stopPropagation();
    event.preventDefault();
    dispatch(addToFav(product));
  }
  function handleRemoveToFav(event) {
    // setCount(count - 1);
    event.stopPropagation();
    event.preventDefault();
    dispatch(removeFromFav(product));
  }

  function hangleIncreaseQuantity(event) {
    console.log("data not found");
    event.stopPropagation();
    event.preventDefault();
    dispatch(increaseQuantity(product));
  }

  function handleAddToCart(event) {
    event.stopPropagation();
    event.preventDefault();
    dispatch(addToCart(product));
    navigate("/cart");
  }

  function handleRemoveFromCart(event) {
    event.stopPropagation();
    event.preventDefault();
    dispatch(removeFromCart(product));
  }

  return (
    // <div
    //   onClick={() => {
    //     navigate(`/products/${product.id}`);
    //   }}
    // >
    <Link to={`/products/${product.id}`}>
      <div className="card mb-4" style={{ maxWidth: "18rem" }}>
        <img src={product.imgURL} alt={product.name} className="img" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Price: {product.price}</p>
          <p className="card-text">Quantity: {product.quantity}</p>
          <p className="card-text">Material: {product.matrial}</p>
          {/* <p className="card-text">
                      Description: {product.description}
                    </p> */}

          {isCartItem ? (
            <>
              <button
                className="btn btn-primary"
                onClick={handleRemoveFromCart}
              >
                Remove from Cart
              </button>
              <button className="addbtn" onClick={hangleIncreaseQuantity}>
                +
              </button>
            </>
          ) : (
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
          )}

          {isFavItem ? (
            <>
              <button className="addbtn" onClick={handleRemoveToFav}>
                ⭐
              </button>
            </>
          ) : (
            <button className="addbtn" onClick={handleAddToFav}>
              ✰
            </button>
          )}
        </div>
      </div>
    </Link>

    // </div>
  );
};

export default ProductCard;
