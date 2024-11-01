

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'



{/* img */}
  {/* prod name */}
    {/* price */}



const CardItem = ({cardData ,currency}) => {
const {_id ,name ,img ,price} = cardData;

  return (
    <motion.div
    whileHover={{
      scale:1.1 
       }}
    transition={{
      duration: .51, // The shake will last for 1 second
ease:'easeInOut'
    }}
    
    >

<Link href={`/product/${_id}`} className=' block  transition-all  '  >  
{/* img */}
<Image src={img[0]} alt="product image  " width={200} height={300}  className='w-full  h-64 object-contain   '  />
<div className='px-7 py-1 max-md:px-4 text-center ' >
  {/* prod name */}
    <h1 className='line-clamp-1 font-normal text-sodark font-outfit text-sm ' >{name}</h1>
    {/* price */}
    <h1 className='text-lg text-[#C886A4] font-normal font-outfit  ' >{currency}{price}</h1>
</div>



</Link>



    </motion.div>
  )
}

export default CardItem
