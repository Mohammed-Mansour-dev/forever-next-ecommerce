import Image from 'next/image'
import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import SubscribeGetOffInput from './SubscribeGetOffInput'

const OurAdvantages = () => {



  return (
    <div className='w-full   ' >
      
{/* advanages */}
<div className='flex flex-wrap pb-7 mx-auto ' >
{/* card 1 */}
<div className="flex justify-center items-center flex-col mx-auto  my-5 ">
<Image className='!size-10 my-3 ' src={assets.exchange_icon} alt='exchange' />
<h1 className='font-outfit text-sm font-semibold text-sodark capitalize ' >easy exchange policy</h1>
<p className='font-outfit text-semidark text-sm  '>We offfer hassle free exchange policy</p>

</div>
{/* card 2 */}
<div className="flex justify-center items-center flex-col  mx-auto my-5  ">
<Image className='!size-10 my-3 ' src={assets.quality_icon} alt='exchange' />
<h1 className='font-outfit text-sm font-semibold text-sodark capitalize ' >7 Days Return Policy</h1>
<p className='font-outfit text-semidark text-sm  '>We provide 7 days free return policy</p>

</div>
{/* card 3 */}
<div className="flex justify-center items-center flex-col  mx-auto my-5  ">
<Image className='!size-10 my-3 ' src={assets.support_img} alt='exchange' />
<h1 className='font-outfit text-sm font-semibold text-sodark capitalize ' >Best Customer Support</h1>
<p className='font-outfit text-semidark text-sm  '>We provide 24/7 customer support </p>

</div>





</div>



{/* input subscribe */}
<div >
<SubscribeGetOffInput />

</div>






    </div>
  )
}

export default OurAdvantages
