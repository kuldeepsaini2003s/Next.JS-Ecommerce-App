import React from "react";
import styles from "@/utils/styles";
import { Link } from "next/link";
import ProductCard from "@/components/Products/ProductCard";

const BestSelling = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return (
    <div
      className={`${styles.section} grid grid-cols-5 max-[1200px]:grid-cols-4 max-[1000px]:grid-cols-3 max-[800px]:grid-cols-2 max-[500px]:grid-cols-1 gap-5 my-10`}
    >
      {data?.map((product) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </div>
  );
};

export default BestSelling;
