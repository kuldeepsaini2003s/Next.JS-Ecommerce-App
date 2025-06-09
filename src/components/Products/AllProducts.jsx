import React from "react";
import useFetch from "../../lib/hooks/useFetch";
import ProductCard from "./productCardWrapper/ProductCard";
import styles from "../../lib/styles";

const AllProducts = () => {
  const { data } = useFetch("https://dummyjson.com/products?limit=50");
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

export default AllProducts;
