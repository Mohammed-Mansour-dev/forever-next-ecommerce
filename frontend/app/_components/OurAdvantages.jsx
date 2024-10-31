import Image from 'next/image'
import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import SubscribeGetOffInput from './SubscribeGetOffInput'
import { motion } from 'framer-motion'

const OurAdvantages = () => {



  return (
    <div className='w-full   ' >
      
{/* advanages */}
<div className='flex flex-wrap pb-7 mx-auto ' >
{/* card 1 */}
<motion.div
    initial={{ opacity: 0 ,y:100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{once: true}}
    transition={{ duration: 0.9, delay:.1  ,type:"spring", stiffness:50 ,damping :10 }} 
className="flex justify-center items-center flex-col mx-auto  my-5 ">
<Image className='!size-10 my-3 ' src={assets.exchange_icon} alt='exchange' />
<h1 className='font-outfit text-sm font-semibold text-sodark capitalize ' >easy exchange policy</h1>
<p className='font-outfit text-semidark text-sm  '>We offfer hassle free exchange policy</p>

</motion.div>
{/* card 2 */}
<motion.div     initial={{ opacity: 0 ,y:100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{once: true}}
    transition={{ duration: 0.9, delay:.2  ,type:"spring", stiffness:50 ,damping :10 }}  className="flex justify-center items-center flex-col  mx-auto my-5  ">
<Image className='!size-10 my-3 ' src={assets.quality_icon} alt='exchange' />
<h1 className='font-outfit text-sm font-semibold text-sodark capitalize ' >7 Days Return Policy</h1>
<p className='font-outfit text-semidark text-sm  '>We provide 7 days free return policy</p>

</motion.div>
{/* card 3 */}
<motion.div    initial={{ opacity: 0 ,y:100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{once: true}}
    transition={{ duration: 0.9, delay:.3  ,type:"spring", stiffness:50 ,damping :10 }}  className="flex justify-center items-center flex-col  mx-auto my-5  ">
<Image className='!size-10 my-3 ' src={assets.support_img} alt='exchange' />
<h1 className='font-outfit text-sm font-semibold text-sodark capitalize ' >Best Customer Support</h1>
<p className='font-outfit text-semidark text-sm  '>We provide 24/7 customer support </p>

</motion.div>





</div>



{/* input subscribe */}
<div >
<SubscribeGetOffInput />

</div>






    </div>
  )
}

export default OurAdvantages
