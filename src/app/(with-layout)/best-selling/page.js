import React from "react";
import styles from "@/utils/styles";
import ProductCard from "@/components/Products/ProductCard";

const BestSelling = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return (
    <div      
      className={`${styles.section} grid gap-5 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] my-10`}
    >
      {data?.map((product) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </div>
  );
};

export default BestSelling;
