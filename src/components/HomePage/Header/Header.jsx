import React from "react";
import Link from "next/link";
import styles from "@/lib/styles";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import {
  MobileCartButton,
  MobileMenuButton,
  MobileSlider,
} from "./HeaderComponents";

const Header = () => {
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
                placeholder="blur"
                blurDataURL="/logo.svg"
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
        className={`${styles.section} px-4 w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm min-[800px]:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <MobileMenuButton />
          <Link href="/">
            <Image
              src="/logo.svg"
              placeholder="blur"
              blurDataURL="/logo.svg"
              alt="logo"
              width={400}
              height={400}
              className="mt-3 cursor-pointer w-full"
            />
          </Link>
          <Link href={"/cart"}>
            <MobileCartButton />
          </Link>
        </div>
      </div>

      <MobileSlider />
      <Navbar />
    </>
  );
};

export default Header;
