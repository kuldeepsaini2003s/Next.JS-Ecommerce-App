"use client";
import { useRouter } from "next/navigation";
import React from "react";
import ProductCard from "./ProductCard";
const ProductCardWrapper = ({ product }) => {
  const router = useRouter();

  const scrollTop = () => {
    window.scrollTo({ behavior: "auto", top: 0 });
  };

  const handleNavigate = () => {
    scrollTop();
    router.push(`/product/${product.id}`);
  };
  return (
    <div onClick={handleNavigate}>
      <ProductCard product={product} />
    </div>
  );
};

export default ProductCardWrapper;
