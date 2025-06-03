"use client";
import styles from "@/utils/styles";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

export const EventCard = ({ active, product }) => {
  // const addToCartHandler = (product) => {
  //   const isItemExists = cart && cart.find((i) => i._id === product._id);
  //   if (isItemExists) {
  //     toast.error("Item already in cart!");
  //   } else {
  //     if (product.stock < 1) {
  //       toast.error("Product stock limited!");
  //     } else {
  //       const cartData = { ...product, qty: 1 };
  //       dispatch(addTocart(cartData));
  //       toast.success("Item added to cart successfully!");
  //     }
  //   }
  // }

  return (
    <div
      className={`w-full block rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex gap-5 p-2`}
    >
      <div className="w-[70%] m-auto">
        <Image
          width={400}
          height={0}
          src={`${product && product[9]?.image}`}
          className="w-full h-72 rounded-md"
          alt="product image"
        />
      </div>
      <div className="w-full lg:[w-40%] flex flex-col justify-start">
        <h2 className={`${styles.productTitle}`}>
          {product && product[9]?.title}
        </h2>
        <p>{product && product[9]?.description}</p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              {product && product[9]?.price}$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              {product && product[9]?.price}$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            {product && product[9]?.sold_out} sold
          </span>
        </div>
        {/* <CountDown product={product} /> */}
        <div className="flex items-center">
          <Link href={`/product/${product && product[9]?._id}?isEvent=true`}>
            <div className={`${styles.button} text-[#fff]`}>See Details</div>
          </Link>
          <div
            className={`${styles.button} text-[#fff] ml-5`}
            // onClick={() => addToCartHandler(product)}
          >
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};
