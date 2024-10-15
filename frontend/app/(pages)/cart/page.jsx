"use client"
import CartTotals from '@/app/_components/CartTotals';
import SectionsTitle from '@/app/_components/SectionsTitle';
import { ShopContext } from '@/app/_context/ShopContextProvider'
import { assets } from '@/app/assets/frontend_assets/assets';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'

const Cart = () => {


const {products ,currency , cartItems , updateQuantity_ }= useContext(ShopContext);
const [cartData , setCartData ] = useState([])

useEffect(
    ()=>{
console.log(cartItems)

const tempItems =[];

for (const items in cartItems) {
   
for (const item in cartItems[items]) {
 
if(cartItems[items][item] > 0){
    tempItems.push({
        _id:items,
        size: item,
        quantity: cartItems[items][item],
    
    })
}
// 2nd loop end
}
// 1st loop end
}
// useeffect end

setCartData(tempItems)

    },[cartItems])


  return(
<div className="pt-7  px-10 ">


{/*  title */}
<div className=' py-4 border-b ' >

<div className=" w-fit">
<SectionsTitle firstTitle={"Your"} secondTitle={"Cart"} />
</div>

</div>

{/* cart items */}
<div>

{

cartData && (



  // cart items map
cartData.map((cartItem ,index) => {
const singlecartItem = products.find((item) => item._id == cartItem._id )
return(

  // single cart item
<div className=" border-t  border-b py-3 ">
<div className=" flex justify-between items-center ">
{/* img & details */}
<div className=" flex gap-3">
 <div className='w-20 md:w-28' >
  <Image  className='w-full h-full object-cover ' alt='' src={singlecartItem.image[0]}  />
 </div>

<div className='flex flex-col gap-3 p-1' >
  <h1 className=' font-outfit font-medium text-lg ' >{singlecartItem.name}</h1>
<span className='text-lg font-outfit font-light flex gap-3  ' >
  {currency}{singlecartItem.price}
  <div className='mx-3 bg-gray-50 border px-3 text-center ' >{cartItem.size}</div>
</span>
</div>


</div>

{/* counter */}
<div className="">
<input type="number" min={1} onChange={(e)=> e.target.value === "" || e.target.value === 0 ? null : updateQuantity_(cartItem._id,cartItem.size ,Number(e.target.value))} className='text-semidark
w-20 px-2 py-1 text-center 
focus:outline-none border '  value={cartItem.quantity} />
</div>



{/* trash btn */}
<div onClick={()=>updateQuantity_(cartItem._id,cartItem.size ,0)} className="w-5 cursor-pointer active:scale-95 ">
  <Image className='w-full h-full' src={assets.bin_icon} alt="trash item" />
</div>


</div>






</div>



)
})


)



}


</div>




{/* cart totlas */}
<div className=' w-full  flex justify-end ' >

<div className='w-full md:w-3/5 lg:w-1/2 lg:py-16 py-10 px-7' >
<CartTotals />
</div>

</div>


</div>





  )}

export default Cart