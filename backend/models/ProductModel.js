
import mongoose from "mongoose";


const productSchema =new mongoose.Schema({
name:{type:String , required : true},
price:{type:Number , required : true},
category:{type:String , required : true},
subCategory:{type:String , required : true},
date:{type:Number , required : true},
img:{type:Array , required : true},
sizes:{type:Array , required : true},
bestSeller:{type:Boolean},
description:{type:String , required : true},

})


const productModal = mongoose.model.product || mongoose.model("product",productSchema)


export default productModal



