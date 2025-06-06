"use client";
import { useAppDispatch } from "@/lib/hooks";
import { removeFromCart, updateCartQuantity } from "@/lib/redux/cartSlice";
import React from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";

const UpdateQuantityButton = ({ item }) => {
  const dispatch = useAppDispatch();

  const removeItem = (id) => {
    toast.success("Item removed from cart successfully!");
    dispatch(removeFromCart(id));
  };

  const incrementCount = (id, qty) => {
    dispatch(updateCartQuantity({ id, qty: qty + 1 }));
  };

  const decrementCount = (id, qty) => {
    if (qty > 1) {
      dispatch(updateCartQuantity({ id, qty: qty - 1 }));
    }
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="min-[1100px]:space-y-4 text-sm max-[1100px]:flex justify-between"
    >
      <div className="space-y-2">
        <h1 className="font-semibold">Price : ${item?.price * item?.qty}</h1>
        <div>
          <button
            className="bg-gradient-to-r from-teal-400 h-7 to-teal-500 text-white font-bold rounded-l px-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
            onClick={() => decrementCount(item?._id, item?.qty)}
          >
            -
          </button>
          <span className="bg-gray-200 py-1 text-gray-800 font-medium px-2">
            {item?.qty}
          </span>
          <button
            className="bg-gradient-to-r from-teal-400 h-7 to-teal-500 text-white font-bold rounded-r px-2  shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
            onClick={() => incrementCount(item?._id, item?.qty)}
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => removeItem(item?.id)}
        className="text-xs px-4 py-2 h-fit rounded-md font-medium bg-black text-white flex gap-2 items-center justify-center cursor-pointer"
      >
        Remove{" "}
        <IoMdRemoveCircleOutline size={20} className="stroke-2 text-white" />
      </button>
    </div>
  );
};

export default UpdateQuantityButton;
