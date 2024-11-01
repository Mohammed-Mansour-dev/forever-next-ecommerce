"use client";

import CartTotals from "@/app/_components/CartTotals";
import SectionsTitle from "@/app/_components/SectionsTitle";
import { ShopContext } from "@/app/_context/ShopContextProvider";
import { assets } from "@/app/assets/frontend_assets/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios"
import { backendUrl } from "@/app/page";
import { motion } from "framer-motion";


const page = () => {
  const [payMethod, setPayMethod] = useState("cod");
const router =useRouter();

const [formData, setFormData] = useState({
  firstName:"",
  lastName:"",
  email:"",
  street:"",
  city:"",
  state:"",
  zipCode:"",
  country:"",
  phone:"",
})

 
// handleInputChange
  const handleInputChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }


  const {cartItems ,products ,deliveryFee,setCartItems , token ,getTotalPrice_ } =useContext(ShopContext)
 // on submit handler
  const handleSubmit = async (e) => {
    e.preventDefault()

    // check if inputs are filled
    if(!formData.firstName ||!formData.lastName ||!formData.email ||!formData.street ||!formData.city ||!formData.state ||!formData.zipCode ||!formData.country ||!formData.phone){
      toast.error("Please fill all the required fields",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        theme:"dark",
       
      })
      return ;
    }




    try { 
let orderItems =[]
for(const items in cartItems){
  for(const item in cartItems[items]){
    if(cartItems[items][item] > 0){
    const itemInfo =structuredClone(products.find(item => item._id === items))
    if(itemInfo){ 
      itemInfo.sizes =item;
      itemInfo.quantity = cartItems[items][item];
      orderItems.push(itemInfo)
    }}}}


if(orderItems.length <= 0){
  toast.error("No items in cart")
  return
}

let orderData ={
  address :formData,
  items:orderItems,
  amount:getTotalPrice_() + deliveryFee
}

// send order data to server
switch(payMethod){
  case "cod":
   const response = await axios.post(backendUrl + '/api/order/placeOrder', orderData,{headers:{token}})
    if(response.data.success){
      setCartItems({})
      router.push("/my-orders")
    }
    break;
}

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  

  return (
  <>
  <ToastContainer />
    <div className="min-h-screen px-5 overflow-hidden ">
      {/* wrapper */}
      <form
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
            {/* name input requireds */}

            <div  className="w-full gap-2 flex flex-row ">
              <motion.input required
                   initial={{ opacity: 0 ,x:-100 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.9, delay:.1 ,type:"spring", stiffness:50 ,damping :10 }} 
                type="text"
                name="firstName"
                onChange={handleInputChange}
            
                value={formData.firstName}
                placeholder="First name"
                className="border rounded w-1/2 font-outfit  p-2 "
              />
              <motion.input required
                   initial={{ opacity: 0 ,x:100 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.9, delay:.1 ,type:"spring", stiffness:50 ,damping :10 }} 
                name="lastName"
                value={formData.lastName}
                type="text"
                onChange={handleInputChange}
            
                placeholder="Last name"
                className="border rounded w-1/2 font-outfit  p-2 "
              />
            </div>

            {/* email input required */}
            <motion.div 
        
            initial={{ opacity: 0 ,y:100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay:.2 ,type:"spring", stiffness:50 ,damping :10 }} 
            className="w-full">
              <input required
              name="email"
                value={formData.email}
                type="email"
                onChange={handleInputChange}
            
                placeholder="Email Address"
                className="border rounded font-outfit w-full p-2 "
              />
            </motion.div>

            {/* street input required */}
            <motion.div
            
            initial={{ opacity: 0 ,y:100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay:.3 ,type:"spring", stiffness:50 ,damping :10 }}  className="w-full">
              <input required
              name="street"
                value={formData.street}
                type="text"
                onChange={handleInputChange}
            
                placeholder="Street "
                className="border rounded font-outfit w-full p-2 "
              />
            </motion.div>

            {/* city state input requireds */}
            <div className="w-full gap-2 flex flex-row ">
              <motion.input required
              
            initial={{ opacity: 0 ,x:-100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay:.4 ,type:"spring", stiffness:50 ,damping :10 }} 
              name="city"
                value={formData.city}
                type="text"
                onChange={handleInputChange}
            
                placeholder="City"
                className="border rounded w-1/2 font-outfit  p-2 "
              />
              <motion.input 
                
            initial={{ opacity: 0 ,x:100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay:.4 ,type:"spring", stiffness:50 ,damping :10 }} 
              required
              name="state"
                value={formData.state}
                type="text"
                onChange={handleInputChange}
            
                placeholder="State"
                className="border rounded w-1/2 font-outfit  p-2 "
              />
            </div>

            {/* Zip code Country input requireds */}
            <div className="w-full gap-2 flex flex-row ">
              <motion.input  
            initial={{ opacity: 0 ,x:-100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay:.5 ,type:"spring", stiffness:50 ,damping :10 }}  required
                name="zipCode"
                value={formData.zipCode}
                type="text"
                onChange={handleInputChange}
            
                placeholder="Zip code "
                className="border rounded w-1/2 font-outfit  p-2 "
              />
              <motion.input  
            initial={{ opacity: 0 ,x:100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay:.5 ,type:"spring", stiffness:50 ,damping :10 }}  required
              name="country"
                value={formData.country}
                type="text"
                onChange={handleInputChange}
            
                placeholder="Country"
                className="border rounded w-1/2 font-outfit  p-2 "
              />
            </div>

            {/* phone input required */}
            <motion.div   
            initial={{ opacity: 0 ,y:100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay:.6 ,type:"spring", stiffness:50 ,damping :10 }}  className="w-full">
              <input required
              name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                type="number"
                placeholder="Phone "
                className="border rounded font-outfit w-full p-2 "
              />
            </motion.div>
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
            {/* stripe */}
              <div 
                onClick={() => toast.warn("stripe not available yet",{
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  theme:"dark"
                })}
                className={` opacity-45 cursor-not-allowed hover:border-green-500 flex items-center gap-4 border py-1 w-fit px-3  `}
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
{/* razorpay */}
              <div
                onClick={() => toast.warn("razorpay is not supported right now",{
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  theme:"dark"
                })}
                className={`  cursor-not-allowed opacity-50 hover:border-green-500 flex items-center gap-4 border py-1 w-fit px-3  `}
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
{/* COD */}
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
            type="submit"
            onClick={(e)=> handleSubmit(e)}
            className="bg-black  text-white uppercase px-10 py-3 max-sm:w-full tracking-wide md:text-base text-sm" >place order</button>
          </div>

        </div>
      </form>
    </div>
  </>
  );
};

export default page;
