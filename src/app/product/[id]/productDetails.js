import React from "react";
import styles from "@/lib/styles";
import { AiOutlineMessage } from "react-icons/ai";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

const ProductDetailsPage = ({ product }) => {
  return (
    <div className="bg-white">
      {product ? (
        <div className={`${styles.section} w-[90%] min-[800px]:w-[80%]`}>
          <div className="w-full py-5">
            <div className="block w-full min-[800px]:flex">
              <div className="w-full min-[800px]:w-[50%] place-items-center">
                <Image
                  src={`${product && product.image}`}
                  alt="product image"
                  width={400}
                  height={0}
                  className="w-[80%] rounded-md"
                />
                {/* <div className="w-full flex">
                  {product &&
                    product.images.map((i, index) => (
                      <div
                        className={`${
                          select === 0 ? "border" : "null"
                        } cursor-pointer`}
                      >
                        <Image
                          src={`${i?.url}`}
                          alt=""
                          className="h-[200px] overflow-hidden border mr-3 mt-3 rounded-md"
                          onClick={() => setSelect(index)}
                        />
                      </div>
                    ))}
                  <div
                    className={`${
                      select === 1 ? "border" : "null"
                    } cursor-pointer`}
                  ></div>
                </div> */}
              </div>
              <div className="w-full min-[800px]:w-[50%] pt-5">
                <h1 className={`${styles.productTitle}`}>{product.title}</h1>
                <p>{product.description}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {product.price}$
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {product.price ? product.price + "$" : null}
                  </h3>
                </div>

                <AddToCartButton product={product} />

                <div className="flex items-center pt-8">
                  {/* <Link href={`/shop/preview/${product?.shop._id}`}>
                    <Image
                      src={`${product?.shop?.avatar?.url}`}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />
                  </link> */}
                  {/* <div className="pr-8">
                    <Link href={`/shop/preview/${product?.shop._id}`}>
                      <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                        {product.shop.name}
                      </h3>
                    </link>
                    <h5 className="pb-3 text-[15px]">
                      ({averageRating}/5) Ratings
                    </h5>
                  </div> */}
                  <div
                    className={`${styles.button} bg-[#6443d1] mt-4 !rounded !h-11`}
                    // onClick={handleMessageSubmit}
                  >
                    <span className="text-white flex items-center">
                      Send Message <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <ProductDetailsInfo
            product={product}
            products={products}
            totalReviewsLength={totalReviewsLength}
            averageRating={averageRating}
          /> */}
          <br />
          <br />
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailsPage;

// const ProductDetailsInfo = ({
//   product,
//   products,
//   totalReviewsLength,
//   averageRating,
// }) => {
//   const [active, setActive] = useState(1);

//   return (
//     <div className="bg-[#f5f6fb] px-3 min-[800px]:px-10 py-2 rounded">
//       <div className="w-full flex justify-between border-b pt-10 pb-2">
//         <div className="relative">
//           <h5
//             className={
//               "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer min-[800px]:text-[20px]"
//             }
//             onClick={() => setActive(1)}
//           >
//             Product Details
//           </h5>
//           {active === 1 ? (
//             <div className={`${styles.active_indicator}`} />
//           ) : null}
//         </div>
//         <div className="relative">
//           <h5
//             className={
//               "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer min-[800px]:text-[20px]"
//             }
//             onClick={() => setActive(2)}
//           >
//             Product Reviews
//           </h5>
//           {active === 2 ? (
//             <div className={`${styles.active_indicator}`} />
//           ) : null}
//         </div>
//         <div className="relative">
//           <h5
//             className={
//               "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer min-[800px]:text-[20px]"
//             }
//             onClick={() => setActive(3)}
//           >
//             Seller Information
//           </h5>
//           {active === 3 ? (
//             <div className={`${styles.active_indicator}`} />
//           ) : null}
//         </div>
//       </div>
//       {active === 1 ? (
//         <>
//           <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
//             {product.description}
//           </p>
//         </>
//       ) : null}

//       {active === 2 ? (
//         <div className="w-full min-h-[40vh] flex flex-col items-center py-3 overflow-y-scroll">
//           {product &&
//             product.reviews.map((item, index) => (
//               <div className="w-full flex my-2">
//                 <Image
//                   src={`${item.user.avatar?.url}`}
//                   alt=""
//                   className="w-[50px] h-[50px] rounded-full"
//                 />
//                 <div className="pl-2 ">
//                   <div className="w-full flex items-center">
//                     <h1 className="font-[500] mr-3">{item.user.name}</h1>
//                     <Ratings rating={product?.ratings} />
//                   </div>
//                   <p>{item.comment}</p>
//                 </div>
//               </div>
//             ))}

//           <div className="w-full flex justify-center">
//             {product && product.reviews.length === 0 && (
//               <h5>No Reviews have for this product!</h5>
//             )}
//           </div>
//         </div>
//       ) : null}

//       {active === 3 && (
//         <div className="w-full block min-[800px]:flex p-5">
//           <div className="w-full min-[800px]:w-[50%]">
//             <Link href={`/shop/preview/${product.shop._id}`}>
//               <div className="flex items-center">
//                 <Image
//                   src={`${product?.shop?.avatar?.url}`}
//                   className="w-[50px] h-[50px] rounded-full"
//                   alt=""
//                 />
//                 <div className="pl-3">
//                   <h3 className={`${styles.shop_name}`}>{product.shop.name}</h3>
//                   <h5 className="pb-2 text-[15px]">
//                     ({averageRating}/5) Ratings
//                   </h5>
//                 </div>
//               </div>
//             </link>
//             <p className="pt-2">{product.shop.description}</p>
//           </div>
//           <div className="w-full min-[800px]:w-[50%] mt-5 min-[800px]:mt-0 min-[800px]:flex flex-col items-end">
//             <div className="text-left">
//               <h5 className="font-[600]">
//                 Joined on:{" "}
//                 <span className="font-[500]">
//                   {product.shop?.createdAt?.slice(0, 10)}
//                 </span>
//               </h5>
//               <h5 className="font-[600] pt-3">
//                 Total Products:{" "}
//                 <span className="font-[500]">
//                   {products && products.length}
//                 </span>
//               </h5>
//               <h5 className="font-[600] pt-3">
//                 Total Reviews:{" "}
//                 <span className="font-[500]">{totalReviewsLength}</span>
//               </h5>
//               <Link href="/">
//                 <div
//                   className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
//                 >
//                   <h4 className="text-white">Visit Shop</h4>
//                 </div>
//               </link>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
