import express from 'express';
import adminAuth from '../middlware/adminAuth.js';
import { getAdminOrders, getUserOrders, placeOrderCOD, placeOrderRazor, placeOrderStripe, updateOrderStatus } from '../controllers/ordersControllers.js';
import userAuth from '../middlware/userAuth.js';

const orderRouter  =express.Router();

// admin features
orderRouter.post("/status",adminAuth,updateOrderStatus)
orderRouter.post("/list",adminAuth,getAdminOrders)


// user features
orderRouter.post("/userOrders",userAuth,getUserOrders)

// payment features
orderRouter.post("/placeOrder",userAuth,placeOrderCOD)
orderRouter.post("/placeStripe",userAuth,placeOrderStripe)
orderRouter.post("/placeRazor",userAuth,placeOrderRazor)


export default orderRouter
