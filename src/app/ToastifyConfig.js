"use client";
import React from "react";
import { Slide, ToastContainer } from "react-toastify";

const ToastConfig = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      pauseOnHover
      theme="light"
      transition={Slide}
    />
  );
};

export default ToastConfig;
