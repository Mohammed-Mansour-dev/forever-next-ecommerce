import React, { useContext } from "react";
import SectionsTitle from "./SectionsTitle";
import { ShopContext } from "../_context/ShopContextProvider";
import { usePathname, useRouter } from "next/navigation";

const CartTotals = ({}) => {

const {getTotalPrice_,
    currency,
    deliveryFee,} =useContext(ShopContext)
 const path =usePathname()
    const router =useRouter()

  return (
    <div className=" w-full ">
      <div className=" w-full ">
        {/* title */}
        <div className="flex items-start pb-3">
          <SectionsTitle firstTitle="Cart" secondTitle="totals" />
        </div>

        {/* totals */}
        <div className="flex flex-col gap-2">
          {/* subtotal */}
          <div className="flex justify-between py-3 border-b  ">
            <p className="font-outfit text-semidark  font-medium text-base capitalize ">
              subtotal
            </p>
            <p className="font-outfit font-medium text-base capitalize ">
              {currency}{getTotalPrice_()}
            </p>
          </div>

          {/* shipping fee */}
          <div className="flex justify-between py-3 border-b  ">
            <p className="font-outfit text-semidark  font-medium text-base capitalize ">
              shipping fee
            </p>
            <p className="font-outfit font-medium text-base capitalize ">
              {currency}{  getTotalPrice_() == 0 ? 0 : deliveryFee}
            </p>
          </div>

          {/* Total */}

          <div className="flex justify-between py-3   ">
            <p className="font-outfit text-dark  font-bold text-base capitalize ">
              shipping fee
            </p>
            <p className="font-outfit font-medium text-dark capitalize ">
              {currency}{  getTotalPrice_() == 0 ? 0 : deliveryFee + getTotalPrice_()}
            </p>
          </div>

          {/* CheckOut btn */}
          {
            path === "/cart" &&  <div className="flex my-3 max-sm:justify-center justify-end">
            <button 
            onClick={()=> router.push("/order-place")}
            className="bg-black  text-white uppercase px-7 py-4 tracking-wide md:text-sm text-xs" >proceed to CheckOut</button>
          </div>
          }
       

        </div>
      </div>
    </div>
  );
};

export default CartTotals;

