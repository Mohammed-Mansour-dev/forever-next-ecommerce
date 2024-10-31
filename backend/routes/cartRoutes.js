



import express from 'express';
import { addToCart, getUserCart, updateCart } from '../controllers/cartControllers.js';
import userAuth from '../middlware/userAuth.js';


const cartRouter = express.Router();



cartRouter.post('/add',userAuth,addToCart)
cartRouter.post('/update',userAuth,updateCart)
cartRouter.post('/userCart',userAuth,getUserCart)

export default cartRouter
