


"use client";
import CartTotals from "@/app/_components/CartTotals";
import SectionsTitle from "@/app/_components/SectionsTitle";
import { ShopContext } from "@/app/_context/ShopContextProvider";
import { assets } from "@/app/assets/frontend_assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity_ } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  // get cart item
  useEffect(() => {
    if (products.length > 0) {
      const tempItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempItems.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempItems);
    }
  }, [cartItems, products]);

  // Handle delete with confirmation
  const handleDelete = (itemId, size) => {
    toast((t) => (
      <div  >
        <p className="text-center" >Are you sure you want to delete this item?</p>
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => {
              updateQuantity_(itemId, size, 0); // Confirm deletion
              toast.dismiss(t.id); // Dismiss the toast
            }}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Confirm
          </button>
          <button
            onClick={() => toast.dismiss(t.id)} // Cancel deletion
            className="bg-gray-300 px-3 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    ), { autoClose: false,
      position:"top-center"
     });
  };

  return (
    <div className="pt-7 overflow-hidden w-full px-10">
      <ToastContainer />
      {/* title */}
      <div className="py-4 border-b">
        <div className="w-fit">
          <SectionsTitle firstTitle={"Your"} secondTitle={"Cart"} />
        </div>
      </div>

      {/* cart items */}
      <div>
        {!cartData.length <= 0 ? (
          cartData.map((cartItem, index) => {
            const singlecartItem = products.find((item) => item._id == cartItem._id);
            return (
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 200 : -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3 * index }}
                viewport={{ once: true }}
                key={index}
                className="border-t border-b py-3"
              >
                <div className="flex justify-between items-center max-md:gap-5 max-md:justify-center max-md:items-center max-md:flex-col">
                  {/* img & details */}
                  <div className="flex gap-3 max-sm:justify-center max-sm:items-center max-sm:flex-col">
                    <div className="w-20 md:w-28">
                      <Image
                        width={600}
                        height={700}
                        className="w-full h-full object-cover"
                        alt=""
                        src={singlecartItem.img[0]}
                      />
                    </div>

                    <div className="flex flex-col max-md:text-center max-md:items-center gap-3 p-1">
                      <h1 className="font-outfit font-medium text-lg">{singlecartItem.name}</h1>
                      <span className="text-lg font-outfit font-light flex gap-3">
                        {currency}{singlecartItem.price}
                        <div className="mx-3 bg-gray-50 border px-3 text-center">
                          {cartItem.size}
                        </div>
                      </span>
                    </div>
                  </div>

                  {/* counter & trash btn */}
                  <div className="flex justify-center items-center md:gap-48 gap-5 flex-row">
                    {/* counter */}
                    <div>
                      <input
                        type="number"
                        min={1}
                        onChange={(e) =>
                          e.target.value === "" || e.target.value === 0
                            ? null
                            : updateQuantity_(cartItem._id, cartItem.size, Number(e.target.value))
                        }
                        className="text-semidark w-20 px-2 py-1 text-center focus:outline-none border"
                        value={cartItem.quantity}
                      />
                    </div>

                    {/* trash btn */}
                    <div
                      onClick={() => handleDelete(cartItem._id, cartItem.size)}
                      className="w-5 cursor-pointer active:scale-95"
                    >
                      <Image className="w-full h-full" src={assets.bin_icon} alt="trash item" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })
        ) : (
          <>
          <div className="py-5" >
              <Image
                className="w-full md:w-1/3 mx-auto h-1/2"
                src="/empty.svg"
                alt="empty cart"
                width={100}
                height={100}
              />  
               <div className="flex justify-center items-center">
         
              <h1 className="text-lg py-4 font-medium text-gray-700">
                Your cart is empty.
              </h1>
            </div>
            <div className="flex justify-center mt-5">
              <Link href="/">
                <p className="px-5 py-2 text-white font-medium bg-gray-700 hover:bg-gray-700 rounded">
                  Continue Shopping
                </p>
              </Link>
            </div>
          </div>
          </>
        )
      
      
      }
      </div>

      {/* cart totals */}
   { !cartData.length <= 0 && (   
      <div className="w-full flex justify-end">
        <div className="w-full md:w-3/5 lg:w-1/2 lg:py-16 py-10 px-7">
          <CartTotals />
        </div>
      </div>)}


    </div>
  );
};

export default Cart;









