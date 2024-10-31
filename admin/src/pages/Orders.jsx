import React, { useEffect, useState } from "react";

import axios from "axios";
import { currency, url } from "../App";
import { assets } from "../assets/admin_assets/assets";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Orders = ({ token }) => {
  const [orderStatus, setOrderStatus] = useState("");
  const [ordersData, setOrdersData] = useState([]);

  // get all orders for admin
  const getAllOrders_ = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        url + "/api/order/list",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setOrdersData(response.data.orderData.reverse());
        console.log(response.data.orderData);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // running the get all orders function
  useEffect(() => {
    getAllOrders_();
  }, [token]);

// update order status 
const updateOrderStatus_ = async (e ,orderId) => {

try {
const response = await axios.post(url + "/api/order/status",{orderId,status:e.target.value},{headers:{token}})
if(response.data.success){
 await getAllOrders_();
}else {
  toast.error("something went wrong while updating order status");
  console.log(response.data.message);
}

} catch (error) {
  console.log(error);
  toast.error(error.message);
}}



  return (
    <div className="sm:px-10 px-5 py-6">
      <div className="flex flex-col flex-wrap max-sm:flex-col max-lg:flex-row gap-5">
        {/* item */}

        {ordersData.map((order, i) => (
          <motion.div
          initial={{ opacity: 0 ,x:100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once: true}}
          transition={{ duration: 0.9, delay:.2 * i  ,type:"spring", stiffness:50 ,damping :10 }} 
            key={i}
            className="border max-lg:flex-col max-lg:items-center max-sm:w-full max-lg:w-[45%]  sm:px-10 py-6  max-sm:gap-5 gap-7 flex justify-between "
          >
            {/* box img */}
            <div className="!w-14  shrink-0 !h-14">
              <img
                src={assets.parcel_icon}
                className="!w-14  !h-14 "
                alt={""}
              />
            </div>

            {/* pro name & customer info */}
            <div className="max-md:text-center">
              {/* products names */}
              <div className="mb-3">
                {
                  order.items.map((item, j) => (
                    <h1 key={j} className="font-outFit text-base text-gray-500 ">
                      {item.name}
                    </h1>
                  ))
                }
              
              </div>
              {/* customer info */}
              <div className="">
                {/* customer name */}
               
                <h1 className="font-outFit text-base capitalize text-gray-800 ">
                  {order.address.firstName} {order.address.lastName}
                </h1>
                {/* street name */}
                <h1 className="font-outFit text-base text-gray-500 ">{order.address.street},{order.address.state},{order.address.city},{order.address.country} </h1>
                {/* city name */}
              </div>
            </div>

            {/* order info */}
            <div className="">
              {/* order quantity */}
              <h1 className="font-outFit text-base text-gray-500 ">
                Items: {order.items.length}{" "}
              </h1>
              {/* payment Method */}
              <h1 className="font-outFit text-base text-gray-500 ">
                {" "}
                Method: {order.paymentMethod}{" "}
              </h1>
              {/* payment */}
              <h1 className="font-outFit text-base text-gray-500 ">
                Payment: {order.status}{" "}
              </h1>
              {/* Date */}
              <h1 className="font-outFit text-base text-gray-500 ">
                {new Date(order.date).toDateString()}
              </h1>

              {/* price */}
              <h1 className="font-outFit text-base text-gray-500 ">
                price :{" "}
                <span className=" text-gray-800">
                  {currency}
                  {order.amount}
                </span>{" "}
              </h1>
            </div>

            {/* order status */}

            <div className="border px-4 py-2 rounded w-fit h-fit">
              <select
              onChange={(e)=>updateOrderStatus_(e ,order._id)}
              value={order.status} className="focus:outline-none   w-fit font-outFit " name="" id="">
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
