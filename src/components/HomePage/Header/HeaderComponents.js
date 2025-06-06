"use client";
import { navigationLink } from "@/lib/constants";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleSlider } from "@/lib/redux/userSlice";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";

export const MobileMenuButton = () => {
  const dispatch = useAppDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSlider());
  };

  return (
    <>
      <BiMenuAltLeft size={40} onClick={handleToggleSidebar} />
    </>
  );
};

export const MobileCartButton = () => {
  const { cart: cartItems } = useAppSelector((state) => state.cart);
  return (
    <>
      <div className="relative">
        <AiOutlineShoppingCart size={30} />
        <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
          {cartItems.length}
        </span>
      </div>
    </>
  );
};

export const MobileSlider = () => {
  const MenuRef = useRef();
  const [active, setActive] = useState(null);
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.user.openSlider);

  const handleToggleSidebar = () => {
    dispatch(toggleSlider());
  };

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <>
      {open && (
        <div
          onClick={handleToggleSidebar}
          className={`${
            open ? "active " : ""
          }slider w-dvw h-svh z-10 bg-black/50`}
        ></div>
      )}
      <div
        ref={MenuRef}
        className={`${open ? "active" : ""} slider bg-white w-72 p-4 h-svh`}
      >
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
            onClick={handleToggleSidebar}
            className="cursor-pointer"
          />
        </div>
        <ul className="flex flex-col gap-5 mt-5 ">
          {navigationLink.map((item, index) => (
            <Link key={index} href={item.link}>
              <li
                key={index}
                onClick={() => {
                  setActive(item.link);
                  handleToggleSidebar();
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
      </div>
    </>
  );
};
