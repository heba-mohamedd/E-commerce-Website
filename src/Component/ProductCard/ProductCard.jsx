import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/Slice/cartSlice";
import { addToFav, removeFromFav } from "../../redux/Slice/favSlice";
import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";

const ProductCard = ({ product, isCartItem = false }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.fav.products);
  const isFavItem = favorites.some(
    (favProduct) => favProduct.id === product.id
  );

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
  function hangleIndecreaseQuantity(event) {
    console.log("data not found");
    event.stopPropagation();
    event.preventDefault();
    dispatch(decreaseQuantity(product));
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
    <Link to={`/products/${product.id}`}>
      <div className="card mb-4" style={{ maxWidth: "18rem" }}>
        <img src={product.imgURL} alt={product.name} className="img" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Price: {product.price}</p>

          <div className="increasing">
            {isCartItem ? (
              <>
                <button className="cartBtn " onClick={handleRemoveFromCart}>
                  Remove
                </button>

                <IoIosArrowDropup
                  className="arrowBtn"
                  onClick={hangleIncreaseQuantity}
                />

                <span>{product.quantity}</span>

                <IoIosArrowDropdown
                  className="arrowBtn"
                  onClick={hangleIndecreaseQuantity}
                />
              </>
            ) : (
              <button className="cartBtn " onClick={handleAddToCart}>
                Add to Cart
              </button>
            )}

            <button
              className={`addbtnfav ${isFavItem ? "fav-active" : ""}`}
              onClick={isFavItem ? handleRemoveToFav : handleAddToFav}
            >
              {isFavItem ? "❤️" : "🤍"}
            </button>
          </div>
        </div>
      </div>
    </Link>

    // </div>
  );
};

export default ProductCard;
