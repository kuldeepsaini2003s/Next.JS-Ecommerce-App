import React from "react";
import styles from "@/lib/styles";
import { NavbarComponent } from "./NavbarComponents";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white">
      <div
        className={`${styles.section} mx-auto hidden min-[800px]:flex items-center justify-between py-4`}
      >
        <NavbarComponent />
      </div>
    </nav>
  );
};

export default Navbar;
