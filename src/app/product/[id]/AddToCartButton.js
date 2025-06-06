"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToCart } from "@/lib/redux/cartSlice";
import styles from "@/lib/styles";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { toast } from "react-toastify";

const AddToCartButton = ({ product }) => {
  const { cart: cartItems } = useAppSelector((state) => state?.cart);

  const dispatch = useAppDispatch();
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };
  const addProductToCart = () => {
    const item = cartItems?.find((item) => item?.id === product?.id);
    if (item) {
      toast.error("Item already in cart!");
    } else {
      toast.success("Item added to cart successfully!");
      dispatch(addToCart({ ...product, qty: count }));
    }
  };

  return (
    <>
      <div className="flex items-center sm:mt-12 mt-5 justify-between pr-3">
        <div className="flex items-center">
          <button
            className="bg-gradient-to-r p-1 from-teal-400 px-4 py-2 cursor-pointer to-teal-500 text-white font-bold rounded-l shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
            onClick={decrementCount}
          >
            -
          </button>
          <input
            value={count || (count === 0 && 1)}
            type="number"
            onChange={(e) => setCount(Number(e.target.value))}
            className="no-spinner bg-gray-200 text-gray-800 font-medium w-10 p-1 text-center py-2 outline-none"
          />
          <button
            className="bg-gradient-to-r from-teal-400 to-teal-500 px-4 cursor-pointer py-2 text-white font-bold rounded-r shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
            onClick={incrementCount}
          >
            +
          </button>
        </div>
        {/* <div>
          {click ? (
            <AiFillHeart
              size={30}
              className="cursor-pointer"
              onClick={() => removeFromWishlistHandler(product)}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={30}
              className="cursor-pointer"
              onClick={() => addToWishlistHandler(product)}
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}
        </div> */}
      </div>
      <div
        className={`${styles.button} !mt-6 !rounded !h-11 flex items-center`}
        onClick={() => addProductToCart(product._id)}
      >
        <span className="text-white flex items-center">
          Add to cart <AiOutlineShoppingCart className="ml-1" />
        </span>
      </div>
    </>
  );
};

export default AddToCartButton;
