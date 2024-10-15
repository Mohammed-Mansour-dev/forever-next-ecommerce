import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='py-7   ' >
  
<div className='w-full border border-neutral-800 flex flex-col md:flex-row ' >


{/* left section */}

<div className='w-full py-10 md:w-1/2  flex justify-center items-center' >

{/* hero card title */}
<div className='justify-center gap-2 flex flex-col ' >

<h1 className='font-medium text-sm
 flex items-center gap-2 md:text-lg
  leading-5  relative text-dark font-outfit
    
text-color outfit uppercase   ' >
  <div className='h-0.5 w-11 bg-[#414141]  ' />
  our bestsellers</h1>

<h1 className='font-normal font-prata capitalize text-4xl
 md:text-4xl lg:text-5xl text-dark

 ' >
  latest arrivals
</h1>

<h1 className='uppercase text-xs font-outfit
 flex gap-2 items-center font-semibold
  md:text-sm text-dark ' >
  shop now
  <div className='h-[1px] w-10 bg-[#414141]  ' />

</h1>


</div>


</div>





{/* right secton */}

<div  className='w-full md:w-1/2'  >
  <Image src={assets.hero_img} alt="" />
</div>












</div>





    </div>
  )
}

export default Hero
