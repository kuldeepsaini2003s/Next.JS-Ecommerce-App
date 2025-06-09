"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProductImages = ({ product }) => {  
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex gap-2 w-full min-[800px]:w-[50%]">
      <div className="w-16 flex-shrink-0 flex flex-col gap-2">
        {product &&
          product.images.map((i, index) => (
            <div
              key={index}
              className={`${
                selected === index ? "border" : "null"
              } cursor-pointer rounded-md p-1`}
            >
              <Image
                src={`${i?.src}`}
                alt="product image"
                width={400}
                placeholder="blur"
                blurDataURL={i?.blurDataURL}
                height={0}
                className="overflow-hidden border rounded-md"
                onClick={() => setSelected(index)}
              />
            </div>
          ))}
      </div>
      <div className="flex-grow w-full flex items-center justify-center max-h-[400px] min-h-[300px] sm:max-h-[400px] sm:min-h-[250px]">
        <Image
          src={product?.images[selected]?.src}
          alt="product image"
          placeholder="blur"
          blurDataURL={product?.images[selected]?.blurDataURL}
          width={400}
          height={0}
          className="w-auto h-full max-h-full object-contain rounded-md"
        />
      </div>
    </div>
  );
};

export default ProductImages;
