"use client";
import React from "react";
import styles from "@/lib/styles";
import Image from "next/image";
import { categoriesData } from "@/lib/constants";
import Link from "next/link";

const DropDown = ({ setDropDown }) => {
  return (
    <div className="pb-4 w-[16rem] rounded-b-md text-black bg-[#fff] absolute z-30 rounded-b-md shadow-sm">
      {categoriesData &&
        categoriesData.map((i, index) => (
          <Link key={index} href={`/products?category=${i.title}`}>
            <div
              key={index}
              className={`${styles.noramlFlex} relative px-2 text-sm my-1 hover:bg-gray-200`}
              onClick={() => setDropDown(false)}
            >
              <Image
                src={i.image_Url}
                width={400}
                height={0}
                className="w-10 object-contain mix-blend-multiply"
                alt="Category Image"
              />
              <h3 className="m-3 cursor-pointer select-none">{i.title}</h3>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default DropDown;
