import React from "react";
import ProductDetailsPage from "./productDetails";

const page = async ({ params }) => {
  const resolveParams = await params;
  const res = await fetch(
    `https://fakestoreapi.com/products/${resolveParams?.id}`
  );
  const product = await res.json();
  return <ProductDetailsPage product={product} />;
};

export default page;
