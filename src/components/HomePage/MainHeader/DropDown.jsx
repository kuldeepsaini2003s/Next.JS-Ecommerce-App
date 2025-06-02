"use client";
import React from "react";
// import { useNavigate } from "react-router-dom";
import styles from "@/utils/styles";
import Image from "next/image";

const DropDown = ({ categoriesData, setDropDown }) => {
  // const navigate = useNavigate();
  const submitHandle = (i) => {
    // navigate(`/products?category=${i.title}`);
    setDropDown(false);
    window.location.reload();
  };
  return (
    <div className="pb-4 w-60 rounded-b-md text-black bg-[#fff] absolute z-30 rounded-b-md shadow-sm">
      {categoriesData &&
        categoriesData.map((i, index) => (
          <div
            key={index}
            className={`${styles.noramlFlex}`}
            onClick={() => submitHandle(i)}
          >
            <Image
              src={i.image_Url}
              style={{
                width: "30px",
                height: "30px",
                objectFit: "contain",
                marginLeft: "10px",
                userSelect: "none",
              }}
              alt=""
            />
            <h3 className="m-3 cursor-pointer select-none">{i.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default DropDown;
