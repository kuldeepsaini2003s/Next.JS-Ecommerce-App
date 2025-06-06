import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import wishlistSlice from "./wishlistSlice";

export const store = () => {
  return configureStore({
    reducer: {
        user: userSlice,
        cart: cartSlice,
        product: productSlice,
        wishlist: wishlistSlice,
      },
  })
}