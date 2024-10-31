import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { currency, url } from "../App";
import {motion} from "framer-motion"
const ListItems = ({token}) => {
  const [listData, setListData] = useState([]);

  // fetching the list items
  const getData = async () => {
    try {
      const response = await axios.get(url + "/api/product/list");


      if (response.data.success) {
        setListData(response.data.products);
      } else {
        toast.error("something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const data = listData;

  const handleDeleteItemFromList =async (id) => {
try {
  
const response = await axios.post(url + "/api/product/remove",{id},{headers:{token}});
console.log(response)

if (response.data.success) {
  toast.success("product deleted successfully");
  getData();
}else {
  toast.error("something went wrong");
}


} catch (error) {
  console.log(error);
  toast.error(error);
}

  }

  
  return (

<div className="px-4 md:px-7 py-7 w-full  " >
<h1 className="font-outFit text-gray-500 py-3 pl-1 text-lg  " >All products List</h1>
    
    <div className="!w-full overflow-hidden  overflow-x-scroll">
      <table className=" !w-full ">
        {/* table header */}
        <thead>
          <tr className="bg-gray-50 border  border-gray-100 text-gray-700">
            <th className="px-3 py-1 text-left font-semibold text-sm md:text-base font-outFit  ">
              Profile
            </th>
            <th className="px-3 py-1 text-left font-semibold text-sm md:text-base font-outFit  ">
              Name
            </th>
            <th className="px-3 py-1 text-left font-semibold text-sm md:text-base font-outFit  ">
              category
            </th>
            <th className="px-3 py-1 text-left font-semibold text-sm md:text-base font-outFit  ">
              price
            </th>
            <th className="px-3 py-1 text-left font-semibold text-sm md:text-base font-outFit  ">
              Action
            </th>
          </tr>
        </thead>




        {/* table body */}
        <tbody className="!w-full     ">
          {data.map((item, index) => (
            <motion.tr     initial={{ opacity: 0 ,y:100 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{once: true}}
            transition={{ duration: 0.9, delay:.2 * index  ,type:"spring", stiffness:50 ,damping :10 }}  key={index} className="bg-white  w-full
               text-gray-900">
                {/* item image */}
              <td className="p-3 border-t border-b  ">
                <img
                  src={item.img[0]}
                  alt="profile"
                  className="w-16 h-20  object-cover"
                />
              </td>
              {/* item name */}
              <td className="p-3 font-outFit border-t border-b  text-sm md:text-base ">
                {item.name}
              </td>
              {/* item categoty */}
              <td className="p-3 font-outFit border-t border-b  text-sm md:text-base ">
                {item.category}
              </td>
              {/* item price */}
              <td className="p-3 font-outFit  border-t border-b text-sm md:text-base ">
                {currency}
                {item.price}
              </td>
              {/* delete item */}
              <td onClick={()=>{handleDeleteItemFromList(item._id)}} className="p-3  border-t border-b select-none cursor-pointer  ">
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 18h2v16h-2z" />
                  <path d="M24 18h2v16h-2z" />
                  <path d="M28 18h2v16h-2z" />
                  <path d="M12 12h26v2H12z" />
                  <path d="M30 12h-2v-1c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v1h-2v-1c0-1.7 1.3-3 3-3h4c1.7 0 3 1.3 3 3v1z" />
                  <path d="M31 40H19c-1.6 0-3-1.3-3.2-2.9l-1.8-24 2-.2 1.8 24c0 .6.6 1.1 1.2 1.1h12c.6 0 1.1-.5 1.2-1.1l1.8-24 2 .2-1.8 24C34 38.7 32.6 40 31 40z" />
                </svg>
              </td>
            </motion.tr>
          
          ))}
        </tbody>

      </table>
    </div>


</div>
  );
};

export default ListItems;
