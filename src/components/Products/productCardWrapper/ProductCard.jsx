import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import Image from "next/image";
import ProductCartActionButton from "./ProductCartActionButton";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full bg-white cursor-pointer rounded-lg shadow-xl overflow-hidden">
      {/* Product Image Container */}
      <div className="relative rounded-lg p-4 mb-2">
        <Image
          src={product?.image}
          alt="Product image"
          width={300}
          height={300}
          className="w-full h-40 object-contain mx-auto"
        />
        {/* Action Buttons */}
        <ProductCartActionButton product={product} />
      </div>

      {/* Product Info */}
      <div className="px-4 pb-4 flex flex-col gap-2 justify-center">
        {/* Seller Name */}
        <h1 className="text-blue-500 text-sm">Chandan kumal</h1>
        {/* Product Title */}
        <h3 className="font-medium line-clamp-2 text-gray-800 leading-tight">
          {product?.title}
        </h3>
        {/* Rating Stars */}
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star, index) => (
            <AiOutlineStar
              key={index}
              size={20}
              color="#f6ba00"
              className="mr-2 cursor-pointer"
            />
          ))}
        </div>
        {/* Price Information */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold">{product?.price}$</span>
          <span className="text-sm text-red-500 line-through">
            {product?.price}$
          </span>
          <span className="ml-auto text-green-500 text-sm">0 sold</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
