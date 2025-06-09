import React from "react";
import styles from "@/lib/styles";
import ProductCardWrapper from "./productCardWrapper/ProductCardWrapper";
import { getBase64ImageUrl } from "@/lib/getBase64ImageUrl";

const BestSelling = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=50", {
    next: { revalidate: 60 },
  });
  const {products} = await res.json();

 const productsWithBlur = await Promise.all(
    products.map(async (product) => {
      const imagesWithBlur = await Promise.all(
        product.images.map(async (img) => ({
          src: img,
          blurDataURL: await getBase64ImageUrl(img),
        }))
      );

      return {
        ...product,
        images: imagesWithBlur,
      };
    })
  );
  

  if (!products) return;

  return (
    <div className={`${styles.section}`}>
      <h1 className="font-medium text-2xl">Best Selling</h1>
      <div
        className={`grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-5 my-5`}
      >
        {products?.map((product) => (
          <ProductCardWrapper key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
