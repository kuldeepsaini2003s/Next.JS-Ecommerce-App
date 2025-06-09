import React from "react";
import styles from "@/lib/styles";
import ProductCardWrapper from "@/components/Products/productCardWrapper/ProductCardWrapper";

const BestSelling = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=50", {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  return (
    <div
      className={`${styles.section} grid gap-5 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] my-10`}
    >
      {data?.products?.map((product) => (
        <ProductCardWrapper key={product?.id} product={product} />
      ))}
    </div>
  );
};

export default BestSelling;
