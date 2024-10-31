"use client"

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../_context/ShopContextProvider'
import SectionsTitle from './SectionsTitle'
import CardItem from './CardItem'
import { motion  } from 'framer-motion'
const LatestProducts = () => {

const {products ,currency} = useContext(ShopContext)
const [latestProducts , setLatestProducts ] = useState([])


useEffect(() => {
  setLatestProducts(products.slice(0 ,10))
}, [products])


{/* title section */}
{/* cards sections */}
{/* card mapping */}


  return (
    <div className='py-10' >
      
<div>
{/* title section */}
<div>
<SectionsTitle  firstTitle="latest" secondTitle="collections" desc="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laudantium sapiente nemo ." />
</div>
{/* cards sections */}
<div className='py-10' >
<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ' >
{/* card mapping */}
{
  latestProducts.map((item, i) =>(
<motion.div key={i} viewport={{once:true}} initial={{y:100 ,opacity:0}} whileInView={{y:0 ,opacity:1}} transition={{delay:.2 * i , duration:1}} >
<CardItem cardData={item} currency={currency} />
</motion.div>
  ))}

</div>
</div>
</div>
    </div>
  )
}

export default LatestProducts
