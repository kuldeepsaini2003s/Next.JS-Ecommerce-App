"use client";
import React, { useState } from "react";
import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa6";
// import { removeFromWishlist } from "@/utils/redux/wishlistSlice";
import Image from "next/image";

const Wishlist_Page = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  //   const { wishlist: wishlistItems } = useSelector(
  //     (state) => state.wishlist.items
  //   );

  //   const dispatch = useDispatch();

  const removeFromWishlistHandler = (id) => {
    // dispatch(removeFromWishlist(id));
    toast.success("Item remove from wishlist successfully!");
  };

  return (
    <div className="py-5">
      <div className="flex justify-center items-center py-5 bg-[#DBE7EE]">
        <h1 className="font-medium text-2xl">WishList</h1>
      </div>
      <div>
        {wishlistItems && wishlistItems.length > 0 ? (
          <div className="space-y-4 mt-5">
            {wishlistItems.map((item) => (
              <div
                className="flex justify-between gap-5 max-[500px]:px-4"
                key={item._id}
              >
                <Link href={`/products/${item?._id}`}>
                  <div className="flex w-full max-[500px]:flex-col gap-5">
                    <Image
                      className="w-40 max-[500px]:w-full flex-shrink-0 min-[500px]:shadow-md h-40 max-[500px]:h-60 object-cover max-[500px]:object-contain object-top rounded-md"
                      src={item?.images[0].url}
                      width={0}
                      height={0}
                      alt=""
                    />
                    <div className="space-y-2 w-full">
                      <h1 className="text-lg font-medium line-clamp-2">
                        {item?.name}
                      </h1>
                      <h1 className="text-sm line-clamp-3">
                        {item?.description}
                      </h1>
                    </div>
                  </div>
                </Link>
                <div
                  className="pr-10 max-[500px]:absolute right-0"
                  onClick={() => removeFromWishlistHandler(item?._id)}
                >
                  <FaHeart
                    size={25}
                    className="stroke-2 fill-red-500 text-white cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col h-[25rem] justify-center items-center gap-5">
            <Image className="w-72" width={800} height={0} src="/empty-wishlist.png" alt="" />
            <h1 className="font-semibold">Your wishList is currently empty.</h1>
            <Link href={"/"}>
              <button className="bg-[#342ac8] text-white rounded-full px-4 py-1 font-light cursor-pointer">
                RETURN TO Shop
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist_Page;
