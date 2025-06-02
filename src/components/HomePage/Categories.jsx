"use client";
import React from "react";
import { brandingData, categoriesData } from "@/utils/constants";
import styles from "@/utils/styles";
import { Link } from "next/link";
import Image from "next/image";

const Categories = () => {
  return (
    <>
      <div className={`${styles.section} hidden sm:block`}>
        <div
          className={`branding my-12 flex justify-between shadow-xl w-full shadow-sm bg-white p-5 rounded-md`}
        >
          {brandingData &&
            brandingData.map((i, index) => (
              <div className="flex items-start" key={index}>
                {i.icon}
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
                  <p className="text-xs md:text-sm">{i.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div
        className={`${styles.section} bg-white sm:p-6 p-4 rounded-lg shadow-xl my-10`}
        id="categories"
      >
        <div className="grid gap-y-5 grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
          {categoriesData &&
            categoriesData.map((i) => (
              // <Link key={i.id} href={`/products?category=${i.title}`}>
              <div
                className="w-full h-fit gap-2 flex flex-col items-center justify-between cursor-pointer"
                onClick={() => handleSubmit(i)}
                key={i.id}
              >
                <Image
                  src={i.image_Url}
                  className="w-[100px] h-[80px] rounded-xl object-center mix-blend-multiply object-contain"
                  width={0}
                  height={0}
                  alt=""
                />
                <h5 className={`max-sm:text-center leading-[1.3]`}>{i.title}</h5>
              </div>
              // </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
