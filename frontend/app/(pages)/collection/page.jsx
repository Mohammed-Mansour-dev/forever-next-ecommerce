"use client";
import CardItem from "@/app/_components/CardItem";
import SectionsTitle from "@/app/_components/SectionsTitle";
import { ShopContext } from "@/app/_context/ShopContextProvider";
import { motion } from "framer-motion";
import React, { useState, useContext, useEffect } from "react";

const page = () => {
  const [Category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const age = ["Men", "Women", "Kids"];
  const placeWear = ["Topwear", "Bottomwear", "Winterwear"];

// filtering functionality
  const handleCategoryChange = (e) => {
    
    setCategory(  e.target.checked ? [...Category , e.target.value] : Category.filter(item => item !== e.target.value ))


  };

  const handleTypeChange = (e) => {
    const { value, checked } = e.target;
    setSubCategory((prev) =>
      checked ? [...prev, value] : prev.filter((country) => country !== value)
    );
  };

  //
  //
  //
  //
  //
  //
  //

  ////////
  ////////
  ////////

  ////////

  // fetching and filtering data

  const { products, currency  ,search } = useContext(ShopContext);

  const [filteredProducts, setFilteredProducts] = useState([]);






// filtering

const filtering_ = () => {

let data =products.slice();

if(Category.length > 0) {
  data = data.filter(item => Category.includes(item.category) )
}

if(subCategory.length > 0) {
  data = data.filter(item => subCategory.includes(item.subCategory) )
}

setFilteredProducts(data);
}

  useEffect(() => {
    filtering_()
  }, [Category,subCategory]);




// sort by price
  // price optiions sorting
  
  const [selectedOption, setSelectedOption] = useState("relevant");
  const options = ["Relevant", "Low to High", "High to Low"];

  const handleSortChange_ = (e) => {
    setSelectedOption(e.target.value);
  };



  //  sort by price

const sortingByPrice =() => {
 let copydata = filteredProducts.length > 0 ? filteredProducts.slice() : products.slice();

switch (selectedOption) {
  case "Low to High":
    copydata.sort((a, b) => a.price - b.price);
    break;
    case "High to Low":
      copydata.sort((a, b) => b.price - a.price);
      break;

      case "Relevant":
        // Shuffle array for random sorting (Fisher-Yates shuffle algorithm)
        for (let i = copydata.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [copydata[i], copydata[j]] = [copydata[j], copydata[i]];
        }
        break;
  
  default:
    break;
}
setFilteredProducts(copydata)
}

useEffect(() => {
  sortingByPrice()
},[selectedOption,products])



//  filter btn for phones open close
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  // filter component UI
const FilterComponent = ()=>(
  <div className={`md:w-fit w-full h-fit md:px-5 md:pt-8  " }  `}>
  <div className="md:px-7  ">
    <h1 className="text-base uppercase text-dark max-md:hidden font-medium font-outfit ">
      filters
    </h1>

    {/* filters boxes */}
    <div className="flex flex-col justify-between   w-full ">
      {/* filter box category */}

      <div className="border max-md:w-full my-2 py-2 pr-4 lg:pr-14 pl-4">
        <h2 className="text-sm lg:text-base uppercase  font-outfit  font-medium mb-3">
          Categories
        </h2>
        <div className="space-y-2  ">
          {age.map((personAge) => (
            <label key={personAge} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={personAge}
                checked={Category.includes(personAge)}
                onChange={handleCategoryChange}
                className="form-checkbox h-4 w-4 relative  "
              />
              <span className="text-gray-700">{personAge}</span>
            </label>
          ))}
        </div>
      </div>

      {/* filter box type */}
      <div className="border my-2 py-2 pr-4 lg:pr-14 pl-4">
        <h2 className="text-sm lg:text-base uppercase font-medium  font-outfit  mb-3">
          {" "}
          type
        </h2>
        <div className="space-y-2">
          {placeWear.map((country) => (
            <label
              key={country}
              className="flex font-outfit  items-center space-x-2"
            >
              <input
                type="checkbox"
                value={country}
                checked={subCategory.includes(country)}
                onChange={handleTypeChange}
                className="form-checkbox h-4 w-4 text-green-600"
              />
              <span className="text-gray-700">{country}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

)



//  search functionality 
const getProductsBySearching_ =() =>{

  let dc =  products.slice();
  dc = dc.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
  
  setFilteredProducts(dc);
  }
  
  useEffect(() => {
    getProductsBySearching_()
  },[search])
  



  return (
    <div className="overflow-hidden">
      <div className="flex flex-col md:flex-row py-7 px-5  ">
  
        {/* filters */}
   
<motion.div
initial={{x:-800 ,opacity:0}}
animate={{x:0 ,opacity:1}}
transition={{duration:.7 ,delay:.2 ,stiffness:40 ,damping:10 ,type:"spring"}}
className="max-md:hidden">
<FilterComponent />
</motion.div>



        {/* content */}
        <div className="w-full  ">
          {/* head */}
          <div className="flex md:justify-between  flex-col md:flex-row max-md:my-3 w-full md:items-center  pr-2 ">
          
          
            <div className="mb-4  ">
              <SectionsTitle firstTitle={"all"} secondTitle={"collections"} />
            </div>


            <div className="w-full  ">
      
               </div>
       

{/*  filter phone btn &  title ...  */}
            <div className="  max-md:flex gap-3 flex-row-reverse ">
              <motion.select
initial={{x:800 ,opacity:0}}
animate={{x:[0,-20,0] ,opacity:1}}
transition={{duration:.7 ,delay:.2}}
                id="dropdown"
                value={`${selectedOption}`}
                onChange={handleSortChange_}
                className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none cursor-pointer sm:text-sm"
              >
                <option value="" disabled>
                  Sort by:{" "}
                </option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option} {" price "}
                  </option>
                ))}
              </motion.select>


              <motion.button 
              initial={{x:-100 ,opacity:0}}
              animate={{x:0 ,opacity:1}}
              transition={{duration:.7 , delay:.2}}
              viewport={{once:true}}
             onClick={handleClick} 
             className=" flex  items-center border text-start px-3 font-outfit rounded-md
             uppercase font-medium text-base md:hidden py-5"
           >
             filter
             <span className={`transition-transform  duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" className="scale-75" height="20">
                 <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
               </svg>
             </span>
           </motion.button>


            </div>
          </div>

{/* filter component for phone */}
<div

className={`${isOpen ? "block" : "hidden"} md:hidden mb-2 `} >
  <FilterComponent />
</div>



{/* cards */}

          <div>
            {/* cards */}
{
filteredProducts.length <= 0 ? (
  <>
  <div className="flex items-center justify-center h-[50vh] ">
    <h1 className="text-2xl font-outfit text-dark text-center">
    <div class="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </h1>
  </div>
  </>
): (
            <div   className="grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
              {filteredProducts.map((item, i) => (
                <motion.div key={i} viewport={{once:true ,amount:.1}} initial={{y:100 ,opacity:0}} whileInView={{y:0 ,opacity:1}} transition={{ duration:.81}} >
                  <CardItem cardData={item} currency={currency} />
                </motion.div>
              ))}
            </div>)




}



          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
