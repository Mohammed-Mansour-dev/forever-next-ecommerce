"use client"

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../_context/ShopContextProvider'
import SectionsTitle from './SectionsTitle'
import CardItem from './CardItem'

const BestSeller = ({}) => {


  

    const [latestProducts , setLatestProducts ] = useState([])
    const {products ,currency} = useContext(ShopContext) 
    
    useEffect(() => {
 
  
        const filtered = products.filter(product => product.bestSeller)

      setLatestProducts(filtered)
    }, [products])
    
    










  return (
    <div className='py-10' >
      
<div>
{/* title section */}
<div>
<SectionsTitle firstTitle="best" secondTitle="seller" desc="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laudantium sapiente nemo ." />
</div>




{/* cards sections */}
<div className='py-10' >
<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ' >
{/* card mapping */}
{
  latestProducts.map((item, i) =>(
<div key={i} >
<CardItem cardData={item} currency={currency} />
</div>
  ))}

</div>
</div>
</div>
    </div>
  )
}

export default BestSeller
