"use client";
import SectionsTitle from "@/app/_components/SectionsTitle";
import SubscribeGetOffInput from "@/app/_components/SubscribeGetOffInput";
import { ShopContext } from "@/app/_context/ShopContextProvider";
import { backendUrl } from "@/app/page";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const page = () => {
  const [authCase, setauthCase] = useState("Login");

// name & email & password
const [name , setName ] = useState("")
const [email , setEmail ] = useState('')
const [password , setPassword ] = useState("")

const router = useRouter()

// token
const {token , setToken }= useContext(ShopContext)

  // login & register functionality

  const handleAuth_ =async (e) => {
e.preventDefault()
try {
  
// ;;;;;;;;;;;;;;;;; if sign up


if(authCase === "Sign Up") {
// check if inputs are filled
if(!email || !password || !name) {
toast.error("Please fill inputs")
return;
}

const response = await axios.post(`${backendUrl}/api/user/register`,{name,email,password})
// if every thing is good
if(response.data.success) {
toast.success("Successfully registered")
setToken(response.data.token);
localStorage.setItem("token", response.data.token)
}
// check if there is something wrong
if(!response.data.success) {
toast.error(response.data.message,{
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme:"dark",
  progress: undefined,
})
}
}else {


  //   ////// if login in

// check if inputs are filled
if(!email || !password){
  toast.error("Please fill inputs")
  return
}

const response = await axios.post(`${backendUrl}/api/user/signIn`,{email,password})

// if there was an error
if(!response.data.success){
  toast.error(response.data.message)
  return;
}

//  if every thing is successful
if(response.data.success){
  toast.success("Successfully logged in")
  setToken(response.data.token);
  localStorage.setItem("token", response.data.token)

}}
} catch (error) {
  console.error(error);
  toast.error(error.message,{
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme:"dark",
    progress: undefined,
  });
} }

// check if the user is already logged in
useEffect(()=>{
if(token){
  // redirect to home page
  router.push("/")
}
},[token])







  return (
   <>
   <ToastContainer />
    {/* // wrapper */}
    <div className="pt-10" >
      {/*  title */}
      <div className="py-14  ">
        <SectionsTitle fontFamily={`font-prata tracking-wider  `} secondTitle={authCase} />
      </div>

{/* form */}
<form>
      {/* inputs */}
  
     <div className="w-full  flex gap-6 flex-col  justify-center 
      items-center  ">

 
      {/* name input */}
      { authCase === "Sign Up" && <input  onChange={(e)=>setName(e.target.value)}  type="text" className="focus:outline-none px-5 py-1 lg:py-2
        border-2 border-neutral-800 font-outfit w-2/3 lg:w-1/3 text-dark 
        " placeholder="Name" />}

      {/* email input */}
      <input onChange={(e)=>setEmail(e.target.value)} type="email" className="focus:outline-none px-5 py-1 lg:py-2
        border-2 border-neutral-800 rounded font-outfit w-2/3 lg:w-1/3 text-dark 
        " placeholder="Email" />

      {/* password input */}
      <input onChange={(e)=>setPassword(e.target.value)}  type="password" className="focus:outline-none px-5 py-1 lg:py-2 
        border-2 border-neutral-800 font-outfit rounded w-2/3 lg:w-1/3 text-dark 
        " placeholder="Password" />

{/* forgot password & create account */}
<div className="  w-9/12 lg:w-1/3  -mt-4  px-2 ">

    <div className="flex gap-2   justify-between  ">
      <span className="cursor-pointer text-base hover:text-semidark text-dark " >Forgot Password?</span>
      <span onClick={()=>setauthCase(authCase === "Login" ? "Sign Up" : "Login")} className="cursor-pointer text-base
       hover:text-semidark text-dark " >{ authCase === "Login" ?
       "Create Account" :
        "Sign in"}</span>
    </div>
  


</div>
      </div>

{/* create account btn */}
<div className="w-full justify-center flex py-8 ">
  <button onClick={handleAuth_} className="bg-black text-white font-outfit px-10 py-2  " >
    {authCase === "Login"? "Login" : "Create Account"}
  </button>
</div>

</form>



{/* subscribe & get off */}

<div className="py-12">
  <SubscribeGetOffInput />
</div>


    </div>
   </>
  );
};

export default page;
