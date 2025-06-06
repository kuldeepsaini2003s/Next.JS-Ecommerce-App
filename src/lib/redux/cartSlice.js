const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    setCartFromLocalStorage: (state, action) => {
      state.cart = action.payload;
    },
    addToCart: (state, action) => {
      const item = state?.cart?.find(
        (item) => item?.id === action?.payload?.id
      );
      if (!item) {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateCartQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) item.qty = action.payload.qty;
        return item;
      });
    },
  },
});

export const {
  setCartFromLocalStorage,
  addToCart,
  removeFromCart,
  updateCartQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
