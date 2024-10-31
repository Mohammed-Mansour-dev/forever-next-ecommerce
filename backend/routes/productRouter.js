
import express from "express"
import { addProduct, getListOfProducts, getSingleProductInfo, removeProduct } from "../controllers/productControllers.js";
import uplaod from "../middlware/multer.js";
import adminAuth from "../middlware/adminAuth.js";


const productRouter = express.Router();


productRouter.post('/add',adminAuth,uplaod.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:1},{name:"image3",maxCount:1},{name:"image4",maxCount:1},]),addProduct)
productRouter.post('/remove',adminAuth,removeProduct)
productRouter.get('/list',getListOfProducts)
productRouter.post('/single',getSingleProductInfo)


export default productRouter












