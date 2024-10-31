import { v2 as cloudinary } from "cloudinary";
import productModal from "../models/ProductModel.js";

// add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      sizes,
      subCategory,
      category,
      bestSeller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (image1a) => image1a !== undefined
    );

    // store images in cloudinary and get their links
    let imagesUrl = await Promise.all(
      images.map(async (image) => {
        let result = await cloudinary.uploader.upload(image.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      price : Number(price),
      description,
      sizes: JSON.parse(sizes),
      subCategory,
      category,
      bestSeller :bestSeller === "true" ? true : false  ,
      img:imagesUrl,
      date :Date.now()
    };

const product = new productModal(productData)

    await product.save();

    res.json({success: true ,message: "Success"});
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

// get list of products
const getListOfProducts = async (req, res) => {

try{

const products = await productModal.find();

res.json({success: true , products})



}catch(err){
  return res.json({ success: false, message: err.message });
}


};

//getSingleProductInfo
const getSingleProductInfo =async (req, res) => {

  try {
    const {productId} =req.body;
    
const product = await productModal.findById(productId);

res.json({success: true, product})


  } catch (error) {
    return res.json({ success: false, error: error})
  }


};

// remove product
const removeProduct = async (req, res) => {

  try {
    const {id} =req.body;
await productModal.findByIdAndDelete(id);

res.json({success: true, message: "Product removed successfully"})


  } catch (error) {
    return res.json({success: false, error: error})
  }

};

export { addProduct, getListOfProducts, getSingleProductInfo, removeProduct };
