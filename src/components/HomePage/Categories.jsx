"use client"
import React from "react";
import { brandingData, categoriesData } from "@/utils/constants";
import styles from "@/utils/styles";
import { Link } from "next/link";


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
        className={`${styles.section} bg-white p-6 rounded-lg shadow-xl my-10 `}
        id="categories"
      >
        <div className="grid gap-[5px] grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
          {categoriesData &&
            categoriesData.map((i) => (
              // <Link key={i.id} href={`/products?category=${i.title}`}>
                <div
                  className="w-full h-fit gap-2 flex flex-col items-center justify-between cursor-pointer"
                  onClick={() => handleSubmit(i)}
                  key={i.id}
                >
                  <img
                    src={i.image_Url}
                    className="w-[130px] h-[100px] rounded-xl object-center mix-blend-multiply object-contain"
                    alt=""
                  />
                  <h5 className={`text-[18px] leading-[1.3]`}>{i.title}</h5>
                </div>
              // </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
