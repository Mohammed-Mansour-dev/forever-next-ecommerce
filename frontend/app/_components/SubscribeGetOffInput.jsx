




import { motion } from 'framer-motion'
import React from 'react'

const SubscribeGetOffInput = () => {
  return (
    <motion.div
    initial={{ opacity: 0 ,y:100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{once: true}}
    transition={{ duration: 0.9, delay:.1  ,type:"spring", stiffness:50 ,damping :10 }} 
    className='w-full  max-md:px-4 py-7 my-3' >
        
<div style={{maxWidth:"100dvw"}} className='overflow-hidden' >
{/* text */}
<div>
<h1 className='font-outfit text-sodark font-bold  text-2xl text-center ' >Subscribe now & get 20% off</h1>
<p className='font-outfit  text-center text-semidark/90 ' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>

{/* input & button */}
<div className="w-full  flex justify-center shrink-0 py-7  ">
    <div className=" flex xl:w-1/2 w-2/3 max-md:w-full shrink-0 h-12 border ">
        <input type="text"  className='bg-transparent max-sm:w-2/3 shrink-0 md:flex-1 px-3 max-sm:pl-1 focus:outline-none font-outfit text-dark ' placeholder='Enter Your Email Address' />
        <button className='bg-black max-sm:!w-1/3 text-white shrink-0 uppercase font-outfit px-5 max-sm:p-2 ' >subscribe</button>
    </div>
</div>

</div>


    </motion.div>
  )
}

export default SubscribeGetOffInput













