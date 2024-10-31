"use client"



import SectionsTitle from '@/app/_components/SectionsTitle'
import { assets } from '@/app/assets/frontend_assets/assets'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
// wrapper
    <div className='py-5 px-5 pb-20 overflow-hidden ' >
        
        {/* title */}

<div className="">
    <SectionsTitle firstTitle="Contact" secondTitle="us" />
</div>

{/* hero */}
      <motion.div     initial={{ opacity: 0 ,x:100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{once: true}}
    transition={{ duration: 0.9, delay:.1  ,type:"spring", stiffness:50 ,damping :10 }}  className='w-full py-5 flex gap-5  flex-col md:flex-row lg:gap-10 items-center  ' >
        
        {/* img */}
<div className="w-full md:w-1/2 flex max-md:max-h-[50vh]  md:justify-end ">

    <Image src={assets.contact_img} className='w-full md:w-4/5 max-md:object-cover max-md:mx-auto '   />

</div>


{/* contact info  */}
<motion.div    initial={{ opacity: 0 ,y:100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{once: true}}
    transition={{ duration: 0.9, delay:.5  ,type:"spring", stiffness:50 ,damping :10 }}  className=" max-md:w-full  md:ml-14 ">
   

<h1 className="uppercase font-outfit text-lg  lg:text-xl font-semibold ">
    our store
</h1>

{/* address */}
<div className='my-3' >
<p className='font-outfit text-semidark/85 font-normal text-base  lg:text-lg ' >
54709 Willms Station 
</p>
<p className='font-outfit text-semidark/85 font-normal text-base  lg:text-lg ' >
Suite 350, Washington, USA 
</p>
</div>

{/* tel & email */}
<div className='my-3' >
<p className='font-outfit text-semidark/85 font-normal text-base  lg:text-lg ' >
Tel: (415) 555‑0132
</p>

<p className='font-outfit text-semidark/85 font-normal text-base  lg:text-lg ' >
Email: greatstackdev@gmail.com</p>
</div>


<h1 className="uppercase font-outfit text-lg  lg:text-xl mt-5 font-semibold ">
Careers at Forever
</h1>

<p className='font-outfit text-semidark/85 font-normal text-base  lg:text-lg ' >
Learn more about our teams and job openings.</p>

{/* explore jobs btn */}
<button className='border border-black my-5 px-5 py-2 capitalize font-outfit font-medium ' >
    explore jobs
</button>

 
</motion.div>






      </motion.div>

    </div>
  )
}

export default page










