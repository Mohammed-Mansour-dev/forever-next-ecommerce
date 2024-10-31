import React, { useState } from "react";
import { assets } from "../assets/admin_assets/assets";
import { Bounce, toast } from "react-toastify";
import axios from "axios";
import { url } from "../App";
import { motion } from "framer-motion";

const AddItems = ({token}) => {

// loading
const [loading , setLoading ] = useState(false)



  // images
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  // sizes
  const [sizes, setSizes] = useState([]);
  // bestseller
  const [bestSeller, setBestSeller] = useState(false);

  // pro name
  const [proName, setProName] = useState("");
  // pro description
  const [proDesc, setProDesc] = useState("");
  // pro category & subCategory
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  // price
  const [proPrice, setProPrice] = useState("");

  // add product function

  const addProduct_ = async () => {

    // check if inputs filled
    if (
      !image1 ||
      !sizes[0] ||
      !proName ||
      !proDesc ||
      !category ||
      !subCategory ||
      !proPrice
    ) {
      toast.error("Please select and fill all", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    const formData = new FormData();


formData.append("name",proName);
formData.append("price",proPrice);
formData.append("category",category);
formData.append("subCategory",subCategory);
formData.append("sizes",JSON.stringify(sizes));
formData.append("bestSeller",bestSeller);
formData.append("description",proDesc);
formData.append("image1",image1);
formData.append("image2",image2);
formData.append("image3",image3);
formData.append("image4",image4);
setLoading(true)

const response =await axios.post(url + "/api/product/add",formData,{headers:{token}})

if(response.data.success){
  toast.success("Product added successfully", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
setProDesc("")
setProName("")
setProPrice("")
setBestSeller(false)
setImage1(null)
setImage2(null)
setImage3(null)
setImage4(null)
setSizes([])
setLoading(false)

}else{
  toast.error(response.data.message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
  setLoading(false)
}


setLoading(false)
 };

  return (
    <div>
      {/* wrapper */}
      <div className="md:px-12 px-4  font-outFit py-4 md:py-8">
        {/* upload images ui  */}
        <motion.div     initial={{ opacity: 0 ,y:100 }}
    animate={{ opacity: 1, y: 0 }}
    viewport={{once: true}}
    transition={{ duration: 0.9, delay:.1  ,type:"spring", stiffness:50 ,damping :10 }}  className="">
          <h2 className=" text-lg font-normal text-gray-700">Upload Image</h2>

          {/* upload boses */}
          <div className="flex flex-wrap gap-3 mx-auto py-3 ">
            {/* box upload 1 */}
            <label htmlFor="box1">
              <img
                src={image1 ? URL.createObjectURL(image1) : assets.upload_area}
                className="w-24"
                alt=""
              />
              <input
                onChange={(e) => {
                  setImage1(e.target.files[0]);
             
                }}
                type="file"
                id="box1"
                hidden
              />
            </label>

            {/* box upload 2 */}
            <label htmlFor="box2">
              <img
                src={image2 ? URL.createObjectURL(image2) : assets.upload_area}
                className="w-24"
                alt=""
              />
              <input
                onChange={(e) => {
                  setImage2(e.target.files[0]);
                 
                }}
                type="file"
                id="box2"
                hidden
              />
            </label>

            {/* box upload 3 */}
            <label htmlFor="box3">
              <img
                src={image3 ? URL.createObjectURL(image3) : assets.upload_area}
                className="w-24"
                alt=""
              />
              <input
                onChange={(e) => {
                  setImage3(e.target.files[0]);
                 
                }}
                type="file"
                id="box3"
                hidden
              />
            </label>

            {/* box upload 4 */}
            <label htmlFor="box4">
              <img
                src={image4 ? URL.createObjectURL(image4) : assets.upload_area}
                className="w-24"
                alt=""
              />
              <input
                onChange={(e) => {
                  setImage4(e.target.files[0]);
                 
                }}
                type="file"
                id="box4"
                hidden
              />
            </label>
          </div>
        </motion.div>

        {/* upload pro info */}
        <div className="">
          {/* pro name */}
          <motion.div
              initial={{ opacity: 0 ,y:100 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{once: true}}
              transition={{ duration: 0.9, delay:.3  ,type:"spring", stiffness:50 ,damping :10 }} 
          className="flex flex-col font-outFit my-3">
            <label htmlFor="name" className="font-outFit text-gray-600">
              Product name
            </label>
            <input
              onChange={(ee) => setProName(ee.target.value)}
              type="text"
              value={proName}
              id="name"
              className="focus:outline border px-4 rounded text-black my-2 font-outfit py-1"
            />
          </motion.div>

          {/* pro desc */}
          <motion.div     initial={{ opacity: 0 ,y:100 }}
    animate={{ opacity: 1, y: 0 }}
    viewport={{once: true}}
    transition={{ duration: 0.9, delay:.5  ,type:"spring", stiffness:50 ,damping :10 }}  className="flex flex-col font-outFit my-3">
            <label htmlFor="desc" className="font-outfit text-gray-600">
              Product Description
            </label>
            <textarea value={proDesc}
              onChange={(ee) => setProDesc(ee.target.value)}
              id="desc"
              className="focus:outline border px-4 rounded text-black my-2 font-outfit py-3"
              rows="5"
            />
          </motion.div>

          {/* category & subcategory & price*/}
          <motion.div     initial={{ opacity: 0 ,y:100 }}
    animate={{ opacity: 1, y: 0 }}
    viewport={{once: true}}
    transition={{ duration: 0.9, delay:.6  ,type:"spring", stiffness:50 ,damping :10 }}  className="flex flex-col-reverse md:flex-row gap-5">
            {/* pro category */}
            <div className="flex flex-col ">
              <label
                htmlFor="category"
                className="font-outfit text-gray-500 text-base"
              >
                Product category
              </label>
              <select
                value={category}
                onChange={(ee) => setCategory(ee.target.value)}
                id="category"
                className="focus:outline border px-7
   rounded text-black w-fit my-2 font-outfit py-1"
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>

            {/* pro subCategory */}
            <div className="flex flex-col ">
              <label
                htmlFor="subcategory"
                className="font-outfit text-gray-500 text-base"
              >
                Product subCategory
              </label>
              <select
                id="subcategory"
                value={subCategory}
                onChange={(ee) => setSubCategory(ee.target.value)}
                className="focus:outline border px-7
   rounded text-black w-fit my-2 font-outfit py-1"
              >
                <option value="Topwear">Topwear</option>
                <option value="Bottomwear">Bottomwear</option>
                <option value="Winterwear">Winterwear</option>
              </select>
            </div>

            {/* pro price */}
            <div className="flex flex-col">
              <label
                htmlFor="price"
                className="font-outfit text-gray-500 text-base"
              >
                Product price
              </label>
              <input
              value={proPrice}
                onChange={(ee) => setProPrice(ee.target.value)}
                type="number"
                placeholder="25"
                id="price"
                className="focus:outline border w-fit px-2 rounded text-black my-2 font-outfit py-1"
              />
            </div>
          </motion.div>

          {/* sizes  */}
          {/* pro sizes */}
          <motion.div     initial={{ opacity: 0 ,y:100 }}
    animate={{ opacity: 1, y: 0 }}
    viewport={{once: true}}
    transition={{ duration: 0.9, delay:.9  ,type:"spring", stiffness:50 ,damping :10 }}  className="py-3 md:py-5">
            <h1 className="">Product Sizes</h1>

            <div className="py-2 max-md:flex-wrap flex gap-3">
              {["S", "M", "L", "XL", "XXL"].map((value, i) => (
                <p
                  key={i}
                  onClick={(e) => {
                    if (sizes.includes(value)) {
                      setSizes(sizes.filter((it) => it !== value));
                    } else {
                      setSizes([...sizes, value]);
                    }
                  }}
                  className={`bg-gray-200 ${
                    sizes.includes(value) && "bg-pink-100"
                  } w-fit py-2.5 cursor-pointer select-none  px-4`}
                >
                  {value}
                </p>
              ))}
            </div>
          </motion.div>

          {/* best seller */}
          <div className="flex gap-3">
            <input
              onClick={() => setBestSeller(!bestSeller)}
              onChange={() => {}}
              checked={bestSeller}
              type="checkbox"
              id="bestSeller"
            />
            <label
              htmlFor="bestSeller"
              className="select-none text-base font-normal text-gray-700"
            >
              Add to best seller
            </label>
          </div>

          {/* add button */}
          <div className="">


            <button
              onClick={addProduct_}
              className="uppercase w-fit text-white bg-black py-4 px-7 font-outfit text-sm my-7 "
            >
           {
loading ? (
  <div className="animate-spin rounded-full h-6 w-6 border-2 border-t-white border-gray-400"/>

):(
 " add product"
 )

}  
            </button>



          </div>
        </div>

        {/* end of wrapper */}
      </div>
    </div>
  );
};

export default AddItems;
