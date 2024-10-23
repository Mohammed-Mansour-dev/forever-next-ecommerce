import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import { useEffect, useState } from "react"
import AddItems from "./pages/addItems"
import ListItems from "./pages/listItems"
import Navbar from "./components/Navbar"
import Orders from "./pages/Orders"
import { assets } from "./assets/admin_assets/assets"

    export const url =import.meta.env.VITE_SERVER_URL


function App() {

  const [token , setToken ] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "")
const [activeLink , setActiveLink ] = useState(0);

useEffect(() => {
localStorage.setItem("token", token)
},[token])


const navLinks =[
  {link:"/add", icon:assets.add_icon, title: "Add Items"},
  {link:"/list", icon:assets.order_icon, title: "List Items"},
  {link:"/orders", icon:assets.order_icon, title: "Orders"},
]



  return (
    // body wrapper 
  <div className=" max-w-screen-xl items-center mx-auto  " >

<BrowserRouter>


{
  token === "" ? (
    <Login setToken={setToken} />
  ) : (

  <div>
    {/* header navbar */}
    <Navbar setToken={setToken} />

<div className="flex flex-row" >

{/* bar toggle */}
<div className="h-screen border-r   w-fit py-2 pl-4">
  
  {/* navs  */}

<div className=" " >
{
  navLinks.map((link, index) => (
    <Link onClick={()=>setActiveLink(index) }
      key={index} to={link.link} className={`flex b gap-2 w-fit rounded rounded-r-none
    my-2 ${activeLink == index && "bg-pink-200 !border-red-400 "}
    px-3 py-1.5 !w-full items-center border-y border-l border-gray-300`} >
      <img src={link.icon} className="w-7" alt={link.title} />
      <span className="max-md:hidden" >{link.title}</span>
    </Link>
  ))
}
</div>






</div>

{/* naved content */}
 <div>
   <Routes>
    
    <Route path="/" element={<Navigate to="/add" />} />
<Route path="/add" index element={<AddItems/>}   />
<Route path="/list" index element={<ListItems/>}  />
<Route path="/orders" index element={<Orders/>}  />


</Routes>
 </div>
</div>
  </div>  )
}










</BrowserRouter>
  </div>
  )
}

export default App
