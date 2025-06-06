"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToCart } from "@/lib/redux/cartSlice";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const ProductCartActionButton = ({ product }) => {
  const { cart: cartItems } = useAppSelector((state) => state?.cart);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    const item = cartItems.find((item) => item.id === product.id);
    if (item) {
      toast.error("Item already in cart!");
    } else {
      toast.success("Item added to cart successfully!");
      dispatch(addToCart({ ...product, qty: 1 }));
    }
  };

  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="absolute right-4 top-2 flex flex-col gap-2"
      >
        <button className="p-1 rounded-full hover:bg-gray-100">
          <Heart className="w-5 h-5" />
        </button>
        <button className="p-1 rounded-full hover:bg-gray-100">
          <Eye className="w-5 h-5" />
        </button>
        <button
          onClick={handleAddToCart}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};

export default ProductCartActionButton;
