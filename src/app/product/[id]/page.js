import React from "react";
import ProductDetailsPage from "./productDetails";
import { getBase64ImageUrl } from "@/lib/getBase64ImageUrl";

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products?limit=25");
  const data = await res.json();

  return data.products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await res.json();

  return {
    title: `${product.title} | My Store`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [{ url: product.thumbnail, width: 800, height: 600 }],
    },
  };
}

const page = async ({ params }) => {
  const resolveParams = await params;
  const res = await fetch(
    `https://dummyjson.com/products/${resolveParams?.id}`,
    {
      next: { revalidate: 3600 },
    }
  );
  const product = await res.json();

  const imageWithBLur = await Promise.all(
    product.images.map(async (img) => ({
      src: img,
      blurDataURL: await getBase64ImageUrl(img),
    }))
  );

  const productWithBlur = {
    ...product,
    images: imageWithBLur,
  };

  return <ProductDetailsPage product={productWithBlur} />;
};

export default page;
