import React from "react";
import styles from "@/lib/styles";
import ProductCardWrapper from "./productCardWrapper/ProductCardWrapper";

const BestSelling = async () => {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  if (!data) return;

  return (
    <div className={`${styles.section}`}>
      <h1 className="font-medium text-2xl">Best Selling</h1>
      <div
        className={`grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-5 my-5`}
      >
        {data?.map((product) => (
          <ProductCardWrapper key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
