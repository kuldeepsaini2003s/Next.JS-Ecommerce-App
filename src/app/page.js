import BestSelling from "@/components/BestSelling";
import Categories from "@/components/HomePage/Categories";
import Hero from "@/components/HomePage/Hero";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <BestSelling />
    </>
  );
};

export default HomePage;
