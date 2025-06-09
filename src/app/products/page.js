import React from "react";
import styles from "@/lib/styles";
import ProductCardWrapper from "@/components/Products/productCardWrapper/ProductCardWrapper";

const ProductsList = async () => {
  const res = await fetch(" https://dummyjson.com/products?limit=50");
  const data = await res.json();

  return (
    <div className={`${styles.section} my-5`}>
      <div
        className={`grid gap-5 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]`}
      >
        {data?.products?.map((product) => (
          <ProductCardWrapper key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
