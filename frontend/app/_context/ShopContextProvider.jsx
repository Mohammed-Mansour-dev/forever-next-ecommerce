"use client"



import React, { createContext ,useEffect,useState } from 'react'
import { products } from '../assets/frontend_assets/assets';
export const ShopContext =createContext();





const ShopContextProvider = ({children}) => {



const currency ="$"
const deliveryFee =10

const [search , setSearch ] = useState("")
const [cartItems , setCartItems ] = useState({});


// Add to cart functionality
const addToCart_ = async (itemId  ,size) => {

const copyCartItems =structuredClone(cartItems);

if(copyCartItems[itemId]){
  if(copyCartItems[itemId][size]){
    copyCartItems[itemId][size] += 1;

  }else {
    copyCartItems[itemId][size] = 1;
  }

}else{
  copyCartItems[itemId] ={};
copyCartItems[itemId][size] =1;
}
setCartItems(copyCartItems)
}



// get total cart items functionality

const getTotalCartItems_ =()=>{

  var totalItems = 0  ;
  
    for (const items in cartItems) {   for (const item in cartItems[items]) {
       
  if(cartItems[items][item] > 0 ){
     totalItems += cartItems[items][item] ;
      
  } }
      }
    
      return totalItems
  
  }
  


//  quantity update functionality

const updateQuantity_ =(itemId,size,quantity)=>{

  const cartItemsCopy = structuredClone(cartItems)

  cartItemsCopy[itemId][size] = quantity;

setCartItems(cartItemsCopy)
}

// get total price functionality
const getTotalPrice_ = ()=>{

let totalPrice =0;

for (const items in cartItems) {

  const productCart =products.find(ite => ite._id == items )

  for (const item in cartItems[items]) {

    if(cartItems[items][item] > 0){
      
      totalPrice += productCart.price * cartItems[items][item] ;
      
    }


  }



}


return totalPrice;

}


useEffect(()=>{
  getTotalPrice_()
},[cartItems])


const value ={
  getTotalPrice_,
products,
currency,
deliveryFee,
search,
setSearch,
addToCart_,
getTotalCartItems_,
cartItems,
updateQuantity_
}



  return (
    <ShopContext.Provider value={value} >
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
