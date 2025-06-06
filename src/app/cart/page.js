"use client";
import React from "react";
import CartPage from "./CartPage";
import { useAppSelector } from "@/lib/hooks";

const CartPageWrapper = () => {
  const { cart: cartItems } = useAppSelector((state) => state.cart);
  return <CartPage cartItems={cartItems} />;
};

export default CartPageWrapper;
