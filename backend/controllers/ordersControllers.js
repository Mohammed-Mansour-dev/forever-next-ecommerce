import orderModal from "../models/orderModel.js";
import userModel from "../models/userModel.js";






// place order COD method
const placeOrderCOD =async (req ,res)=>{
    
try {

const {userId , items ,address ,amount } = req.body;

const orderData ={
    userId,
    items,
    address,
    amount,
    payment:false,
    paymentMethod:"COD",
    date: Date.now(),
}

const newOrder =new orderModal(orderData)

await newOrder.save()
await userModel.findByIdAndUpdate(userId ,{cartData:{}});
res.json({success:true, message:"Order placed successfully"}) 

} catch (error) {
    console.log(error);
    res.json({success:false, message:error});
}


}


// place order razor method
const placeOrderRazor =()=>{

}


// place order stripe method
const placeOrderStripe =()=>{

}


// get Orders for admin
const getAdminOrders = async (req ,res)=>{


try {
    
const orderData =await orderModal.find({});
res.json({success:true, orderData});


} catch (error) {
    console.log(error);
    res.json({success:false, message:error});
}





}


// get Orders for user
const getUserOrders =async (req ,res)=>{
try {
    
    const {userId} = req.body;

const orders = await orderModal.find({userId})
if(orders){
    res.json({success:true, orders})
}else{
    res.json({success:false, message:"No orders found"})  
}

} catch (error) {
    console.log(error);
    res.json({success:false,c:"controllers", message:error});
}




}


// update Status
const updateOrderStatus =async (req ,res)=>{

try {
    
const {orderId ,status} = req.body;

const orderData = await orderModal.findByIdAndUpdate(orderId,{status});
if(orderData){
res.json({success:true, message:"Order status updated successfully"})
}

} catch (error) {
    console.log(error);
    res.json({success:false, message:error.message});
}


}









export {placeOrderCOD,
    placeOrderRazor,
    placeOrderStripe,
    getAdminOrders,
    getUserOrders,
    updateOrderStatus} 


