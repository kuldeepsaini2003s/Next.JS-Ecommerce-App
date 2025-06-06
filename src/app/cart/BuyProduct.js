"use client";
import React from "react";
import { RiShoppingBag4Line } from "react-icons/ri";

const BuyProduct = ({ cartItems }) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };

  // const handleBuyClick = async (productId) => {
  //   const order = await axios.post(
  //     BASE_URL + "/payment/create",
  //     {
  //       productId: productId,
  //     },
  //     { withCredentials: true }
  //   );
  //   const { amount, keyId, currency, notes, orderId } = order.data;
  //   const options = {
  //     key: keyId,
  //     amount,
  //     currency,
  //     name: "GraniMart",
  //     description: "Shop MArvels",
  //     order_id: orderId,
  //     prefill: {
  //       username: notes.username,
  //       email: notes.emailId,
  //     },
  //     theme: {
  //       color: "#F37254",
  //     },
  //   };
  //   const rzp = new window.Razorpay(options);
  //   rzp.open();
  // };
  return (
    <div className="min-w-fit h-fit border max-[750px]:hidden max-[750px]:fixed top-5 right-5 max-[750px]:bg-white max-[750px]:w-28 min-[750px]:inset-0 border-gray-300 space-y-5 max-[500px]:self-end  rounded-md p-2 shadow-xl py-5">
      <h1 className="text-lg font-medium">
        Subtotal ({cartItems && cartItems.length}) <br /> Total Price: $
        {calculateTotalPrice()}
      </h1>
      <button
        // onClick={() => handleBuyClick(15)}
        className="px-5 w-full py-2 rounded-md font-medium bg-orange-400 flex gap-2 items-center justify-center cursor-pointer"
      >
        <RiShoppingBag4Line size={20} />
        Proceed to Buy{" "}
      </button>
    </div>
  );
};

export default BuyProduct;
