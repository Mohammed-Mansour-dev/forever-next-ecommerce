import React, { useState } from "react";
import axios from "axios";
import { url } from "../App";
import { Bounce, toast } from "react-toastify";



const Login = ({setToken}) => {

const [email , setEmail ] = useState("")
  const [password , setPassword ] = useState("")


// post user info
  const handleLoginSubmit = async (e) => {

try{e.preventDefault()
const response =await axios.post(`${url}/api/user/admin`,{
  email,password
})

// check if inputs are empty
if(!email || !password){
  toast.error("Please fill all fields", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });
  return;
 
}

// check if password & email is correct 
if(response.data.success) {
  setToken(response.data.token)
}else{
  toast.error(response.data.message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });
}



console.log(response)

}catch(e){
  console.log(e)}
  toast.error(e.message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });
  };

  return (
    <div className="w-full  flex justify-center items-center h-screen bg-gray-200">



      <div className=" bg-white p-5 shadow-xl rounded-lg">
        {/* form Wrapper */}
        <form onSubmit={handleLoginSubmit}>
<h1 className="capitalize  font-outFit text-xl font-semibold py-3 " >admin panel</h1>
          {/* email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="font-outFit text-gray-600" >Email Address </label>
            <input onChange={(e)=>setEmail(e.target.value)} className=" focus:outline-1
            border  px-4 rounded text-black my-2 font-outFit py-1
            " type="email" name="" placeholder="Enter Email" id="email" />
          </div>

   {/* password */}
   <div className="flex flex-col pt-5 ">
            <label htmlFor="password" className="font-outFit text-gray-600" >Password  </label>
            <input onChange={(e)=>setPassword(e.target.value)} id="password" className=" focus:outline-1
            border  px-4 rounded text-black my-2 font-outFit py-1
            " type="password" name="" placeholder="Enter password"  />
          </div>


{/* submit button */}
<div className="">
    <button className="font-outFit
    bg-black text-white  w-full py-2 rounded my-2
    " type="submit">
        Login
    </button>
</div>


        </form>
      </div>
    </div>
  );
};

export default Login;
