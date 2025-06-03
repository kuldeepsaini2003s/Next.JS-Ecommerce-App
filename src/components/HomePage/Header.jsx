"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "@/utils/styles";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import Navbar from "./Navbar";
import Image from "next/image";
import { X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const MenuRef = useRef();

  useEffect(() => {
    const handleOutSide = (e) => {
      if (MenuRef?.current && !MenuRef?.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutSide);
    return () => document.removeEventListener("mousedown", handleOutSide);
  }, []);

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden min-[800px]:flex items-center justify-between">
          <div>
            <Link href="/">
              <Image
                src="/logo.svg"
                width={0}
                height={0}
                className="h-full w-full"
                blurDataURL="/logo.svg"
                placeholder="blur"
                alt="Logo"
              />
            </Link>
          </div>
          {/* search box */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product..."
              // value={searchTerm}
              // onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {/* {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    return (
                      <Link href={`/product/${i._id}`}>
                        <div className="w-full flex items-start-py-3">
                          <Image
                            src={`${i.images[0]?.url}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null} */}
          </div>

          <div className={`${styles.button}`}>
            {/* <Link href={`${isSeller ? "/dashboard" : "/shop-create"}`}> */}
            <h1 className="text-[#fff] flex items-center">
              Become Seller
              <IoIosArrowForward className="ml-1" />
            </h1>
            {/* </Link> */}
          </div>
        </div>
      </div>

      {/* Mobile Screen Header */}
      <div
        className={`w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm min-[800px]:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            {/* <Link href="/"> */}
            <Image
              src="/logo.svg"
              alt=""
              width={0}
              height={0}
              className="mt-3 cursor-pointer w-full"
            />
            {/* </Link> */}
          </div>
          <div>
            <div className="relative mr-[20px]">
              <AiOutlineShoppingCart size={30} />
              <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                1
              </span>
            </div>
          </div>
        </div>

        {/* header sidebar */}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/50 w-dvh h-svh z-10">
          <div ref={MenuRef} className="bg-white w-72 p-4 h-svh">
            <div className="flex justify-between items-center">
              <Image
                src="/logo.svg"
                className="cursor-pointer"
                width={120}
                height={0}
                alt="Logo"
              />
              <X
                size={25}
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}

      {/* Navar */}
      <Navbar />
    </>
  );
};

export default Header;
