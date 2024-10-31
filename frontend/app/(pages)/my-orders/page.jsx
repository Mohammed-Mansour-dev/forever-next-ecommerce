"use client";

import SectionsTitle from "@/app/_components/SectionsTitle";
import { ShopContext } from "@/app/_context/ShopContextProvider";
import { backendUrl } from "@/app/page";
import axios from "axios";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const { products, currency ,token } = useContext(ShopContext);
const [myOrdersData , setMyOrdersData ] = useState([])

const [hasShownToast , setHasShownToast ] = useState(false)

const [btnLoading , setBtnLoading ] = useState(false)





// get my orders
const getMyOrders_ = async ()=>{


try {
   setBtnLoading(true)
const response = await axios.post(backendUrl + "/api/order/userOrders",{},{headers:{token}})
console.log(response)
if(response){
if(response.data.success){

  let allOrderItems =[];

  response.data.orders.map((order) => {
   order.items.map((orderItem)=>{
orderItem["status"] =order.status;
orderItem["payment"] =order.payment;
orderItem["paymentMethod"] =order.paymentMethod;
orderItem["date"] =order.date;

allOrderItems.push(orderItem)
   })


  });
  

setMyOrdersData(allOrderItems.reverse())


}else{
  console.log("No response orders")

}
}else{
console.log("No respo")
}


setBtnLoading(false)

} catch (error) {
  console.log(error)
  toast.error(error.message);
}}

useEffect(()=>{

    getMyOrders_()
  
  
},[products ])

  return (
    <>
     
    {

myOrdersData && (
  // wrapper
  <div className="pt-10 px-7 overflow-hidden ">
  {/* title */}
  <div className=" flex ">
    <SectionsTitle firstTitle="My" secondTitle="orders" />
  </div>

  {/* orders items */}
  <div className="">
    {myOrdersData.map((item, index) => (
      <motion.div   
      initial={{ opacity: 0 ,x: index % 2 ===0 ? -200 : 200 }}
      whileInView={{ opacity: 1, x: 0 }} viewport={{once: true}}
      transition={{ duration: 0.9, type:"spring", stiffness:50 ,damping :10 }}  key={index} className="flex py-5 md:items-center  max-md:flex-col gap-3 justify-between border-t border-b ">

     
        {/* img & desc item */}
        <div className="flex max-md:flex-col max-md:items-center " >
          {/* item img */}
          <div className="w-24 max-md:w-32 ">
            <Image
              alt="order item img"
              className="w-full h-full object-cover"
              src={item.img[0]}
              width={100}
              height={200}
            />
          </div>

          {/* item desc */}
          <div className="flex flex-col gap-3  p-3">
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
                Quantity : {item.quantity}{" "}
              </h1>
              <h1 className="font-normal font-outfit text-dark text-lg ">
                Size : {item.sizes}
              </h1>
            </div>

            {/* date */}
            <div className="">
              <h1 className="capitalize text-dark font-outfit font-normal text-base  ">
                Date :{" "}
                <span className="text-semidark/80  text-sm ">
                  {new Date(item.date).toDateString()}
                </span>{" "}
              </h1>
            </div>
        
            {/* payment method */}
            <div className="">
              <h1 className="capitalize text-dark font-outfit font-normal text-base  ">
                payment  :{" "}
                <span className="text-semidark/80  text-sm ">
                  {item.paymentMethod}
                </span>{" "}
              </h1>
            </div>
         
  </div>


</div>


          {/* order status */}
          <div className="flex items-center max-md:justify-center gap-3">
            {/* the animated spot */}
            <div className={` ${item?.status === "Delivered" ? "bg-green-500" : item.status === "Packing" ? "bg-yellow-500" : item?.status === "Out for Delivery" ? "bg-purple-500" : "bg-orange-500" } w-4 h-4 rounded-full  animate-pulse  `} />
            <h1 className="font-outfit text-dark capitalize font-normal  ">
              {item?.status}
            </h1>
          </div>


          {/* track button */}
         
            <button
            onClick={()=> getMyOrders_()}
            className="font-outfit text-dark w-full hover:bg-gray-100 duration-100 active:scale-95 focus:bg-gray-100
             md:w-fit md:!min-w-[112px] shrink-0 text-center flex justify-center items-center border px-3 py-1 max-md:py-2 rounded capitalize " >
           {   !btnLoading ?(
              "track order "):(
                // spinner
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-t-white border-gray-400"/>

              )
              }
              
              </button>
        


       


        {/* end wrapper */}
      </motion.div>
    ))}
  </div>
</div>
)

}
{
   !myOrdersData || !token && (
      <div className="flex items-center justify-center h-screen ">
      <h1 className="text-2xl font-outfit text-dark text-center">
      <div className="flex items-center justify-center h-screen ">
    <h1 className="text-2xl font-outfit text-dark text-center">
    <div class="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </h1>
  </div>
        You May Need to Login Again
      </h1>
    </div>
    ) 
}
  
    </>



  
 


  




  );
};

export default page;
