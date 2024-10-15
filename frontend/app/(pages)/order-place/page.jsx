"use client";

import CartTotals from "@/app/_components/CartTotals";
import SectionsTitle from "@/app/_components/SectionsTitle";
import { assets } from "@/app/assets/frontend_assets/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [payMethod, setPayMethod] = useState("cod");
const router =useRouter();


  return (
    <div className="min-h-screen px-5 ">
      {/* wrapper */}
      <div
        className="md:grid md:grid-cols-2 py-10 gap-10
  "
      >
        {/* forms SIDE   */}
        <div className="lg:pr-20 ">
          {/* title */}
          <div className="flex mb-3 ">
            <SectionsTitle firstTitle="delivery" secondTitle="information" />
          </div>

          {/* forms */}

          <div className="flex flex-col gap-5">
            {/* name inputs */}
            <div className="w-full gap-2 flex flex-row ">
              <input
                type="text"
                placeholder="First name"
                className="border rounded w-1/2 font-outfit  p-2 "
              />
              <input
                type="text"
                placeholder="Last name"
                className="border rounded w-1/2 font-outfit  p-2 "
              />
            </div>

            {/* email input */}
            <div className="w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="border rounded font-outfit w-full p-2 "
              />
            </div>

            {/* street input */}
            <div className="w-full">
              <input
                type="text"
                placeholder="Street "
                className="border rounded font-outfit w-full p-2 "
              />
            </div>

            {/* city state inputs */}
            <div className="w-full gap-2 flex flex-row ">
              <input
                type="text"
                placeholder="City"
                className="border rounded w-1/2 font-outfit  p-2 "
              />
              <input
                type="text"
                placeholder="State"
                className="border rounded w-1/2 font-outfit  p-2 "
              />
            </div>

            {/* Zip code Country inputs */}
            <div className="w-full gap-2 flex flex-row ">
              <input
                type="text"
                placeholder="Zip code "
                className="border rounded w-1/2 font-outfit  p-2 "
              />
              <input
                type="text"
                placeholder="Country"
                className="border rounded w-1/2 font-outfit  p-2 "
              />
            </div>

            {/* phone input */}
            <div className="w-full">
              <input
                type="number"
                placeholder="Phone "
                className="border rounded font-outfit w-full p-2 "
              />
            </div>
          </div>
        </div>

        {/* Totals & payment methods SIDE */}

        <div className=" lg:pl-10 pt-10   ">
          {/* totals */}
          <div className="md:w-4/5 lg:w-full w-full  ">
            <CartTotals />
          </div>

          {/* payment methods */}
          <div className="transition-all">
            {/* title */}
            <div className="w-full justify-start flex  pt-5 pb-3  ">
              <SectionsTitle firstTitle={"Payment"} secondTitle={"Method"} />
            </div>

            {/* methods */}
            <div className="flex-wrap max-md:justify-normal w-full flex  gap-3  ">
              <div
                onClick={() => setPayMethod("stripe")}
                className={`  cursor-pointer hover:border-green-500 flex items-center gap-4 border py-1 w-fit px-3  `}
              >
                <div
                  className={`border w-4 rounded-full h-4 lg:w-5 lg:h-5 ${
                    payMethod === "stripe" && "bg-green-500"
                  }`}
                />
                <Image
                  src={assets.stripe_logo}
                  className="w-14 lg:w-16"
                  alt="stripe"
                />
              </div>

              <div
                onClick={() => setPayMethod("razorpay")}
                className={`  cursor-pointer hover:border-green-500 flex items-center gap-4 border py-1 w-fit px-3  `}
              >
                <div
                  className={`border w-4 rounded-full h-4 lg:w-5 lg:h-5 ${
                    payMethod === "razorpay" && "bg-green-500"
                  }`}
                />
                <Image
                  src={assets.razorpay_logo}
                  className="w-20"
                  alt="stripe"
                />
              </div>

              <div
                onClick={() => setPayMethod("cod")}
                className={`  cursor-pointer hover:border-green-500 flex items-center gap-4 border py-1 w-fit px-3  `}
              >
                <div
                  className={`border w-4 rounded-full h-4 lg:w-5 lg:h-5 ${
                    payMethod === "cod" && "bg-green-500"
                  }`}
                />
                <h1
                  className="uppercase max-md:text-sm text-base font-outfit text-semidark
     "
                >
                  cash on delivery
                </h1>
              </div>
            </div>
          </div>

          {/* place order button */}

          <div className="flex my-3 max-sm:justify-center justify-end pt-5">
            <button 
            onClick={()=> router.push("/my-orders")}
            className="bg-black  text-white uppercase px-14 py-4 max-sm:w-full tracking-wide md:text-base text-sm" >place order</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default page;
