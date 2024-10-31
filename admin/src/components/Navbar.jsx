import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/admin_assets/assets'

const Navbar = ({setToken}) => {
  return (
 
    <div className='py-3 border-b-2 ' >
        {/* wrapper */}
        <div className="flex px-5 justify-between items-center ">

{/* logo */}
<div className="">
    <Link to={"/"} className='w-32 flex lg:w-36' >
    <img src={assets.logo } className='w-full flex h-full' alt="" />
    </Link>
</div>


{/* logout btn */}
<div className="">
    <button onClick={()=>setToken("")} className='bg-gray-800 max-sm:px-3 max-sm:text-sm px-6 py-1 md:py-1.5
     md:px-8 rounded-full text-white ' >
        logout
    </button>
</div>


        </div>
        
        
        
        
        
        </div>
  )
}

export default Navbar