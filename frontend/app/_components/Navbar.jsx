
"use client"
import Link from "next/link";
import { useState ,useContext ,useEffect, act} from "react";
import { assets } from "../assets/frontend_assets/assets";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ShopContext } from "../_context/ShopContextProvider";


// import React, { useState } from "react";


// logout functionality





const Navbar = () => {

const router =useRouter();

  const handleLogout_ = () => {
  router.push("/login")

  setToken("")
  localStorage.removeItem("token")
  setCartItems({})
}

const navs = [
    {title:"home",link:"/",customStyle:''},
    {title:"collection",link:"/collection",customStyle:''},
    {title:"about",link:"/about",customStyle:''},
    {title:"contact",link:"/contact",customStyle:''},
];


const [openSearch, setopenSearch] = useState(false)
const [showMobileMenu , setShowMobileMenu ] = useState(false)
const [visible , setVisible ] = useState(null)
const [activeNav , setActiveNav ] = useState("/")


// getting searchdata from context
const {search ,setSearch ,getTotalCartItems_ ,token ,setToken ,setCartItems} = useContext(ShopContext)


const onInputSearchChange =(event)=>{
  setSearch(event.target.value)

}


const path =usePathname()

const visbility_ =()=>{
  if(path == "/collection"){
    setVisible(true)
  }else{
    setVisible(false)
  }
  
}

useEffect(()=>{
visbility_()
},[path])




  return (
    <div className="pt-4 w-full relative " >
      {/* web nav */}
      <div className="" >
  
  {/* header */}
     <div className="flex max-md:px-4 border-b border-gray-300 justify-between px-2 py-4 items-center ">
        {/* logo */}
        <Link href="/" >
          <Image src={assets.logo} alt="logo" className="w-32" />
        </Link>

        {/* web  navs */}

        
        <div className="hidden md:flex  " >
          <nav>
           
            <ul className="gap-5 flex capitalize  font-semibold " >
           {
            navs.map((nav,index) => (
              <li  key={nav.title}>
                <Link onClick={()=>setActiveNav(nav.link)} className={`nav_links 
                      ${activeNav === nav.link && "half-border-bottom relative  " }
                    ${nav.customStyle}`} href={nav.link}>{nav.title}</Link>
              </li>
            ))
            }
        
             {/* <li>
                <Link className="nav_links" href="/">home</Link>
              </li> */}
         
            </ul>
          </nav>
        </div>


        {/* icons btns */}
        <div className="flex gap-5  items-center " >
       
       
          {/* search icon */}
          <button className="group" onClick={()=>{
            setopenSearch(true)
            
            if(!visible) router.push("/collection")
            
            }} >
            <Image 
            className="size-5"
            src={assets.search_icon} alt="search icon" />
      
  


          </button>
  {/* // person icon */}

<div className="relative group   transition-all duration-700 " >

<Link  href="/login" title="click to login" >
<Image
 className="size-5"
src={assets.profile_icon} alt="search icon" />

</Link>

{
token && (
// {/* orders & profile & signout dropdown */}
<div className="absolute top-5 right-0 z-20 p-3 " >
<div className=" w-32 text-center
 px-3 py-0 group-hover:py-4 rounded-md hidden group-hover:flex bg-gray-200  flex-col capitalize ">
<Link className=" py-2 hover:text-[#e68c82] transition-all text-gray-600 tracking-wide outfit " href="/my-orders" >
orders
</Link>
{/* sign out btn */}
<p onClick={handleLogout_} className=" py-2 hover:text-[#e68c82] transition-all text-gray-600 tracking-wide outfit "  >
Signout
</p>
</div>

</div>
)}
</div>

{/* bag icon */}
<Link href="/cart" className="relative cursor-pointer " >
<Image
 className="size-5"
src={assets.cart_icon} alt="search icon" />
<span className="absolute size-4 text-[9px] text-center flex justify-center items-center p-1 text-white rounded-full top-0 left-3 bg-[#C886A4] " >
    {getTotalCartItems_()}</span>
</Link>



{/*  mobile menu icon */}

<div className="ml-2 block md:hidden cursor-pointer  " onClick={()=>setShowMobileMenu(true)} >
  <Image src={assets.menu_icon} alt="menu  icon" className="h-4 w-7 cursor-pointer " />
</div>


       
        </div>

     </div>
 

 {/* Search section */}

{

<div className={`w-full flex   py-5 bg-gray-50 border-b  border-gray-300 justify-center items-center gap-2 duration-1000 transition-all 
  ${(openSearch && visible )   ? " opacity-100  " : "  opacity-0 hidden  "}
  
`} >

{/* input */}
<div className="flex h-12 border w-3/5 rounded-2xl border-gray-400  bg-white justify-center items-center px-2  " >
  <input onChange={onInputSearchChange} type="text" className=" w-full rounded-2xl bg-white h-full focus:outline-none px-3  " placeholder="search"  />
  <Image  src={assets.search_icon} alt="search icon" className="bg-white rounded-2xl size-5 " />
</div>
{/* x icon */}
<div className="cursor-pointer hover:rotate-180 transition-all  " onClick={()=>setopenSearch(false)}  >
  <Image src={assets.cross_icon} alt="close icon" className="size-4" />
</div>

</div>

  }
      </div>

{/* md devices menu */}
<div onClick={()=>setShowMobileMenu(false)} className={`fixed z-20 w-full items-end flex flex-col -right-full transition-all duration-500 ${showMobileMenu && "!right-0"} h-screen bg-gray-500/50 top-0   `}>
<div className="bg-gray-800 h-screen px-10 py-5 w-1/2 " >

{/* close btn */}
<div className=" flex justify-end ">
  <Image onClick={()=>setShowMobileMenu(false)} src={assets.cross_icon} className="w-6" alt="cross" />
</div>


<nav className="pt-10" >
           <ul className="gap-5 flex flex-col capitalize font-semibold " >
          {
           navs.map((nav) => (
             <li  key={nav.title}>
               <Link onClick={()=>setShowMobileMenu(false)} className={` text-lg font-outfit
                     text-gray-200
                   ${nav.customStyle}`} href={nav.link}>{nav.title}</Link>
             </li>
           ))
           }
           </ul>
         </nav>
</div>

</div>


    </div>
  );
};

export default Navbar;
