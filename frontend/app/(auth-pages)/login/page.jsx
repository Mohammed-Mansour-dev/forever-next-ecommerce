"use client";
import SectionsTitle from "@/app/_components/SectionsTitle";
import SubscribeGetOffInput from "@/app/_components/SubscribeGetOffInput";
import { useState } from "react";

const page = () => {
  const [authCase, setauthCase] = useState("Login");

  return (
    // wrapper
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
      { authCase === "Login" && <input type="text" className="focus:outline-none px-5 py-1 lg:py-2
        border-2 border-neutral-800 font-outfit w-1/2 lg:w-1/3 text-dark 
        " placeholder="Name" />}

      {/* email input */}
      <input type="email" className="focus:outline-none px-5 py-1 lg:py-2
        border-2 border-neutral-800 font-outfit w-1/2 lg:w-1/3 text-dark 
        " placeholder="Email" />

      {/* password input */}
      <input type="password" className="focus:outline-none px-5 py-1 lg:py-2 
        border-2 border-neutral-800 font-outfit w-1/2 lg:w-1/3 text-dark 
        " placeholder="Password" />

{/* forgot password & create account */}
<div className="  w-1/2 lg:w-1/3  -mt-4  px-2 ">

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
<div className="w-full justify-center flex py-8  ">
  <button type="submit" className="bg-black text-white font-outfit px-10 py-2  " >
    {authCase === "Login"? "Login" : "Create Account"}
  </button>
</div>

</form>



{/* subscribe & get off */}

<div className="py-12">
  <SubscribeGetOffInput />
</div>


    </div>
  );
};

export default page;
