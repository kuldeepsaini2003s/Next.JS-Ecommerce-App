"use client";
import { AlignLeft, ChevronDown, Heart, ShoppingCart } from "lucide-react";
import DropDown from "../DropDown";
import { categoriesData, navigationLink } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useAppSelector } from "@/lib/hooks";

export const NavbarComponent = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <CategoryButton dropDown={dropDown} setDropDown={setDropDown} />
      <NavigationLinks setDropDown={setDropDown} />
      <LinkIcons setDropDown={setDropDown} />
    </>
  );
};

export const CategoryButton = ({ dropDown, setDropDown }) => {
  return (
    <>
      <div className="relative max-[900px]:hidden">
        <button
          onClick={() => setDropDown(!dropDown)}
          className={`flex font-medium text-lg w-[16rem] justify-between items-center bg-white text-black p-2 ${
            dropDown ? "rounded-t-md" : "rounded-md"
          }`}
        >
          <div className="flex gap-3 items-center">
            <AlignLeft className="h-5 w-5" />
            <span>All Categories</span>
          </div>
          <ChevronDown />
        </button>
        {dropDown ? <DropDown /> : null}
      </div>
    </>
  );
};

export const NavigationLinks = ({ setDropDown }) => {
  const pathname = usePathname();
  const [active, setActive] = useState(null);

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <>
      <ul className="flex gap-5 items-center ">
        {navigationLink.map((item, index) => (
          <Link key={index} href={item.link}>
            <li
              key={index}
              onClick={() => {
                setActive(item.link);
                setDropDown(false);
              }}
              className={`${
                item.link === active ? "text-green-400" : ""
              } font-medium`}
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export const LinkIcons = ({ setDropDown }) => {
  const { cart: cartItems } = useAppSelector((state) => state.cart);

  const closeDropDown = () => {
    setDropDown(false);
  };

  return (
    <>
      <div className="flex gap-2 items-center">
        <Link onClick={closeDropDown} href={"/wishlist"}>
          <div className="relative mx-2">
            <Heart size={25} />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </div>
        </Link>
        <Link onClick={closeDropDown} href={"/cart"}>
          <div className="relative mx-2">
            <ShoppingCart size={25} />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          </div>
        </Link>
        <div className="mx-2">
          <Link href={"/login"}>
            <CgProfile size={27} />
          </Link>
        </div>
      </div>
    </>
  );
};
