"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setCartFromLocalStorage } from "@/lib/redux/cartSlice";
import { useEffect } from "react";

const CartStorageSync = () => {
  const cart = useAppSelector((state) => state.cart.cart);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      dispatch(setCartFromLocalStorage(JSON.parse(localCart)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return null;
};

export default CartStorageSync;
