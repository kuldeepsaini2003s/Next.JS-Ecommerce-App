import React from "react";
import Link from "next/link";
import styles from "@/lib/styles";
import Image from "next/image";
import BuyProduct from "./BuyProduct";
import UpdateQuantityButton from "./UpdateQuantityButton";

const CartPage = ({ cartItems }) => {
  return (
    <div
      className={`relative flex max-[500px]:flex-col my-5 gap-5 ${styles.section}`}
    >
      <div className="w-full">
        <h1 className="lg:text-3xl font-semibold text-xl">Shopping Cart</h1>
        {cartItems && cartItems?.length > 0 ? (
          <div className="grid max-[500px]:grid-cols-1 grid-cols-2 gap-5 mt-5">
            {cartItems?.map((item) => (
              <div
                key={item.id}
                className="flex border w-full border-gray-200 max-[1100px]:flex-col rounded-md shadow-sm p-2 gap-3 justify-between w-full"
              >
                <Link href={`/product/${item?.id}`}>
                  <Image
                    className="min-[1100px]:w-28 h-40 max-[600px]:w-full flex-shrink-0 min-[1100px]:h-28 max-[600px]:h-60 object-contain max-[600px]:object-contain object-top rounded-md"
                    src={item?.image}
                    width={400}
                    height={0}
                    alt=""
                  />
                  <div className="space-y-2 w-full">
                    <h1 className="font-semibold leading-5 line-clamp-2">
                      {item?.title}
                    </h1>
                    <h1 className="text-sm line-clamp-3">
                      {item?.description}
                    </h1>
                  </div>
                </Link>
                <UpdateQuantityButton item={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full flex flex-col justify-center items-center max-sm:mt-10 max-sm:gap-5">
            <Image
              src="/Cart_img.png"
              width={400}
              height={0}
              className="w-48"
              alt="Empty Cart"
            />
            <p className="text-sm font-medium">Your cart is currently empty.</p>
          </div>
        )}
      </div>
      {cartItems && cartItems.length > 0 && (
        <BuyProduct cartItems={cartItems} />
      )}
    </div>
  );
};

export default CartPage;
