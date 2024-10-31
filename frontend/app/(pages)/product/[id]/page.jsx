"use client";

import RelatedProducts from "@/app/_components/RelatedProducts";
import SectionsTitle from "@/app/_components/SectionsTitle";
import { ShopContext } from "@/app/_context/ShopContextProvider";
import { assets } from "@/app/assets/frontend_assets/assets";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
const Page = () => {
  const { id } = useParams();
  const { products, currency, addToCart_ ,token } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [mainImage, setMainImage] = useState();
  const [activeSize, setactiveSize] = useState("");

  // fetching product data
  const fetchingProductData_ = async () => {
    const product = products.find((product) => product._id === id);
    if (product) {
      setProductData(product);
      setMainImage(product.img[0]);
    }
  };

  useEffect(() => {
    fetchingProductData_();
  }, [id,products]);







  // handlE Add to Cart btn FUNCTION

  const handleAddtoCart_ = () => {


  

    addToCart_(productData._id, activeSize);
   
  
  };

  return (
 <>
 <ToastContainer />
    <div className="md:py-10 overflow-hidden ">
      {productData ? (
        <div>
          {/* // wrapper */}
          <div className="  w-full  flex flex-col lg:flex-row  py-5 ">
            {/* images section */}

            <div className="flex  flex-row max-sm:flex-col-reverse w-full lg:w-1/2   sm:h-[600px]  px-4 gap-5 ">
              {/* images queue */}
              <motion.div   initial={{ opacity: 0 ,x:-500 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.9 , delay:.3 }} className="flex flex-col max-sm:flex-row max-sm:w-full hide-scroll max-sm:overflow-auto max-lg:w-[20%] gap-[1%] ">
                {productData.img.map((image, index) => (
              
                  <Image

                
                    key={index}
                    src={image}
                    width={150}
                    height={250}
                    onClick={() => setMainImage(image)}
                    alt="product image  "
                    className="rounded-md cursor-pointer  max-sm:w-[40%] object-contain lg:w-28 max-sm:!max-w-[27%] h-[24%] "
                  />
               
                ))}
              </motion.div>

              {/* main image */}
              <motion.div   initial={{ opacity: 0 ,x:-500 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.9 ,delay:.2 }} className={` ${!mainImage && "animate-pulse bg-gray-300 rounded"} flex-1 `}>
                <Image
                    width={350}
                    height={550}
                  src={mainImage}
                  alt="product image  "
                  className="w-full h-full object-contain max-sm:max-h-[400px] "
                />
              </motion.div>
            </div>

            {/* detail section */}

            <div className="py-5 px-10 w-full lg:w-1/2 ">
              <div className="flex flex-col gap-3">
                {/* product name */}
                <motion.h1   initial={{ opacity: 0 ,x:500 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.9, delay:.1 }} className="font-outfit text-2xl font-medium ">
                  {productData.name}
                </motion.h1>

                {/* stars */}
                <motion.div    initial={{ opacity: 0 ,x:500 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.9, delay:.2 }} className="flex gap-1 items-center ">
                  {[1, 2, 3, 4].map((item) => (
                    <Image
                      className="w-4 h-4"
                      src={assets.star_icon}
                      alt="star icon"
                    />
                  ))}
                  <Image
                    className="w-4 h-4"
                    src={assets.star_dull_icon}
                    alt="star icon"
                  />

                  <span className="font-outfit font-normal  ">(122)</span>
                </motion.div>

                {/* price */}

                <motion.h1     initial={{ opacity: 0 ,x:500 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.9, delay:.3 }} className="font-semibold text-2xl ">
                  {currency}
                  {productData.price}
                </motion.h1>
                {/* desc */}
                <motion.p    initial={{ opacity: 0 ,x:500 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.9, delay:.4 }} className="font-outfit text-base w-full md:w-3/4 font-normal text-semidark py-5 ">
                  {productData.description}
                </motion.p>

                {/* select size */}
                <motion.div    initial={{ opacity: 0 ,x:500 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.9, delay:.5 }} >
                  <h1 className="capitalize text-xl font-semibold text-neutral-500 font-outfit  ">
                    select size
                  </h1>

                  {/* sizes */}

                  <div className="flex flex-wrap flex-row my-3 gap-3  ">
                    {productData.sizes.map((size, index) => (
                      <button
                        key={index}
                        onClick={() => setactiveSize(size)}
                        className={` ${
                          size === activeSize && "!border-[#FF8551] border-2 "
                        } capitalize py-3 px-5 bg-gray-100 border border-gray-200 `}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/*    add to cart button         */}

                <motion.button    initial={{ opacity: 0 ,x:500 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.9, delay:.6 }}
                  onClick={handleAddtoCart_}
                  className="uppercase w-fit text-white bg-black py-4 px-7 font-outfit text-sm my-3 "
                >
                  add to cart
                </motion.button>

                <motion.hr    initial={{ opacity: 0 ,x:500 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.9, delay:.7 }} className="w-4/5 border my-3 bg-gray-500 " />

                <div className="flex flex-col gap-1">
                  <motion.p    initial={{ opacity: 0 ,x:500 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.9, delay:.7 }} className="text-dark text-base font-outfit font-normal ">
                    100% Original product
                  </motion.p>
                  <motion.p    initial={{ opacity: 0 ,x:500 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.9, delay:.8 }}  className="text-dark text-base font-outfit font-normal ">
                    Cash on delivery is available on this product.
                  </motion.p>
                  <motion.p    initial={{ opacity: 0 ,x:500 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.9, delay:.9 }}  className="text-dark text-base font-outfit font-normal ">
                    Easy return and exchange policy within 7 days.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>

          {/* description and reviews  */}

          <div className="px-5 py-7 ">
            <div className="flex  mt-7 ">
              <p className="capitalize text-base text-dark font-bold font-outfit border w-fit  px-7 py-5 ">
                description
              </p>
              <p className="capitalize text-base font-bold text-gray-400 font-outfit border w-fit  px-7 py-5 ">
                reviews(122)
              </p>
            </div>

            <div className="border px-7 py-14 ">
              <motion.p         initial={{ opacity: 0 ,y:100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once: true}}
        transition={{ duration: 0.9, delay:.2  ,type:"spring", stiffness:50 ,damping :10 }}  className="  text-dark font-outfit text-base ">
                An e-commerce website is an online platform that facilitates the
                buying and selling of products or services over the internet. It
                serves as a virtual marketplace where businesses and individuals
                can showcase their products, interact with customers, and
                conduct transactions without the need for a physical presence.
                E-commerce websites have gained immense popularity due to their
                convenience, accessibility, and the global reach they offer.
              </motion.p>

              <motion.p
                      initial={{ opacity: 0 ,y:100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{once: true}}
                      transition={{ duration: 0.9, delay:.4 ,type:"spring", stiffness:50 ,damping :10 }}  
              className="pt-7 text-dark font-outfit text-base ">
                E-commerce websites typically display products or services along
                with detailed descriptions, images, prices, and any available
                variations (e.g., sizes, colors). Each product usually has its
                own dedicated page with relevant information
              </motion.p>
            </div>
          </div>

          {/* Related products */}
          <div className="py-10">
            <SectionsTitle firstTitle={"Related"} secondTitle={"products"} />
            <div>
              <RelatedProducts
                category={productData.category}
                products={products}
                currency={currency}
                subCategory={productData.subCategory}
              />
            </div>
          </div>
        </div>
      ):(
        <div className="flex items-center justify-center h-screen ">
        <h1 className="text-2xl font-outfit text-dark text-center">
        <div class="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </h1>
      </div>
      )}
    </div>
 </>
  );
};

export default Page;
