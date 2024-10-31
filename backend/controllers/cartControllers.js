import userModel from "../models/userModel.js";



// update cart
const updateCart =async (req,res)=> {

    try {
        
const {userId , size , quantity, itemId} =req.body;
        
const userData = await userModel.findById(userId);

let cartData = await userData.cartData;

cartData[itemId][size] = quantity;

await userModel.findByIdAndUpdate(userId, {cartData})

res.json({success: true, message: "Cart updated successfully"})

    } catch (error) {
        console.log(error);
        return res.json({success: false, message: error.message});
    }

}






// add cart
const addToCart =async (req,res)=> {
try{    const {userId ,itemId ,size} = req.body;
const userData = await userModel.findById(userId);
let cartData = userData.cartData;
if (cartData[itemId]) {
if(cartData[itemId][size]) {
    cartData[itemId][size] += 1;
}else {
    cartData[itemId][size] = 1;
}
}else{
cartData[itemId] ={}
cartData[itemId][size] = 1   
}
 await userModel.findByIdAndUpdate(userId, {cartData})
 res.json({success: true, message: "Item added to cart"})
}catch(err){
console.log(err)
return res.json({success:false ,message:err.message})
 }}



// getUserCart

const getUserCart =async (req,res)=> {

    try {
   
        const {userId }   =req.body;
const userData = await userModel.findById(userId)
const cartData = await  userData.cartData

res.json({success: true, cartData})

    } catch (error) {
        console.log(error)
        return res.json({success: false, message: error.message});
    }




}


export  {updateCart,   addToCart, getUserCart}
