"use client"



import React, { createContext ,useEffect,useState } from 'react'
// import { products } from '../assets/frontend_assets/assets';
import { Bounce, toast } from 'react-toastify';
import axios from 'axios';
import { backendUrl } from '../page';
export const ShopContext =createContext();





const ShopContextProvider = ({children}) => {
// token
const [token , setToken ] = useState("")





const [products , setProducts ] = useState([])

// fetch products
  const getProducts_ = async ()=>{
    try {
      
const response = await axios.get(`${backendUrl}/api/product/list`)

if(response.data.success){
  setProducts(response.data.products)
  
}else {
  toast.error("failed to list products")
}




    } catch (error) {
      console.log(error)
        toast.error("Failed to fetch products")
      
    }
  }

useEffect(() =>{
getProducts_()
},[])






const currency ="$"
const deliveryFee =10

const [search , setSearch ] = useState("")
const [cartItems , setCartItems ] = useState({});




// get user cart data
const getCartData_ = async (token)=>{
try {
  
  const response = await axios.post(backendUrl + "/api/cart/userCart",{},{headers:{token}})
if(response.data.success){
  setCartItems(response.data.cartData)
}

} catch (error) {
  console.log(error);
  toast.error(error.message);
}
}




  


// Add to cart functionality
const addToCart_ = async (itemId  ,size) => {
if(token){

// chec if size is selected
if(!size){
  toast.error("Please select size",{
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    transition: Bounce,
  })
  return;
}

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


try {
  const response = await axios.post(backendUrl + "/api/cart/add", {itemId ,size},{headers:{token}})
  if(response.data.success){
    toast.success("Product added Successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }
} catch (error) {
  console.log(error);
  toast.error(error.message);
}


}else {
  toast.error("Please login to add items to cart",{
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme:"dark",
    progress: undefined,
  })
}



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
const updateQuantity_ =async (itemId,size,quantity)=>{

  const cartItemsCopy = structuredClone(cartItems)

  cartItemsCopy[itemId][size] = quantity;

setCartItems(cartItemsCopy)

try{await axios.post(backendUrl + '/api/cart/update',{itemId,size,quantity},{headers:{token}})
}catch(e){
  console.log(e)
  toast.error("failed to update quantity cart")
}
}

// get total price functionality
const getTotalPrice_ = ()=>{
let totalPrice =0;
for (const items in cartItems) {
  const productCart =products.find(ite => ite._id === items )
  for (const item in cartItems[items]) {
    if(cartItems[items][item] > 0){
      totalPrice += productCart?.price * cartItems[items][item] ;
         } }}
return totalPrice;
}


useEffect(()=>{
  getTotalPrice_()
},[cartItems])

  useEffect(() => {
    // check if token exists in local storage
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
      getCartData_(localStorage.getItem("token"))
    }
   
   }, [products])

const value ={
  getTotalPrice_,
products,
currency,
deliveryFee,
search,
setSearch,
setCartItems,
addToCart_,
getTotalCartItems_,
cartItems,
updateQuantity_,
token , setToken
}


  return (
    <ShopContext.Provider value={value} >
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
