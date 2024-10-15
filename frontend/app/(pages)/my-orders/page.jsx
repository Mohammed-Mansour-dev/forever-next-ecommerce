"use client";

import SectionsTitle from "@/app/_components/SectionsTitle";
import { ShopContext } from "@/app/_context/ShopContextProvider";
import Image from "next/image";
import React, { useContext } from "react";

const page = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    // wrapper
    <div className="pt-10 px-7">
      {/* title */}
      <div className=" flex ">
        <SectionsTitle firstTitle="My" secondTitle="orders" />
      </div>

      {/* orders items */}
      <div className="">
        {products.slice(1, 4).map((item, index) => (
          <div key={index} className="flex py-5 md:items-center  max-md:flex-col gap-3 justify-between border-t border-b ">

         
            {/* img & desc item */}
            <div className="flex" >
              {/* item img */}
              <div className="w-24">
                <Image
                  alt="order item img"
                  className="w-full h-full object-cover"
                  src={item.image[0]}
                />
              </div>

              {/* item desc */}
              <div className="flex flex-col gap-4  p-3">
                <h1 className="text-xl font-outfit text-sodark font-medium">
                  {item.name}
                </h1>
                {/* price & quantity & size */}

                <div className="flex gap-3">
                  <h1 className="font-normal font-outfit text-dark text-lg ">
                    {currency}
                    {item.price}
                  </h1>
                  <h1 className="font-normal font-outfit text-dark text-lg ">
                    {" "}
                    Quantity : {1}{" "}
                  </h1>
                  <h1 className="font-normal font-outfit text-dark text-lg ">
                    Size : L
                  </h1>
                </div>

                {/* date */}
                <div className="">
                  <h1 className="capitalize text-dark font-outfit font-normal text-base  ">
                    Date :{" "}
                    <span className="text-semidark/80  text-sm ">
                      25,may,2024
                    </span>{" "}
                  </h1>
                </div>
              </div>
 </div>


              {/* order status */}
              <div className="flex items-center max-md:justify-center gap-3">
                <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse  " />
                <h1 className="font-outfit text-dark capitalize font-normal  ">
                  ready to ship
                </h1>
              </div>


              {/* track button */}
             
                <button className="font-outfit text-dark w-full hover:bg-gray-100 duration-100 active:scale-95 focus:bg-gray-100
                 md:w-fit  border px-3 py-1 max-md:py-2 rrounded capitalize " >track order</button>
            


           


            {/* end wrapper */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
