// import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from "react-router-dom"
// import Login from "./pages/Login"
// import { useEffect, useState } from "react"
// import AddItems from "./pages/addItems"
// import ListItems from "./pages/listItems"
// import Navbar from "./components/Navbar"
// import Orders from "./pages/Orders"
// import { assets } from "./assets/admin_assets/assets"

//     export const url =import.meta.env.VITE_SERVER_URL
//     export const currency ="$"


// function App() {

//   const [token , setToken ] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "")
// const [activeLink , setActiveLink ] = useState("/add");
// const location = useLocation(); 
// useEffect(() => {
// localStorage.setItem("token", token)
// },[token])


// const navLinks =[
//   {link:"/add", icon:assets.add_icon, title: "Add Items"},
//   {link:"/list", icon:assets.order_icon, title: "List Items"},
//   {link:"/orders", icon:assets.order_icon, title: "Orders"},
// ]
// console.log(location)

//   return (
//     // body wrapper 
//   <div className=" max-w-screen-xl items-center mx-auto  " >

// <BrowserRouter>


// {
//   token === "" ? (
//     <Login setToken={setToken} />
//   ) : (

//   <div>
//     {/* header navbar */}
//     <Navbar setToken={setToken} />

// <div className="flex flex-row " >

// {/* bar toggle */}
// <div className="h-screen border-r min-w-[20%]  w-fit py-7 pl-4">
  
//   {/* navs  */}

// <div className=" " >
// {
//   navLinks.map((link, index) => (
//     <Link title={link.title} onClick={()=>setActiveLink(link.link) }
//       key={index} to={link.link} className={`flex b gap-2 w-fit rounded rounded-r-none
//     my-2 ${activeLink == link.link && "bg-pink-200 !border-red-400 "}
//     px-3 py-1.5 !w-full items-center border-y border-l border-gray-300`} >
//       <img src={link.icon} className="w-7" alt={link.title} />
//       <span className="max-md:hidden" >{link.title}</span>
//     </Link>
//   ))
// }
// </div>






// </div>

// {/* naved content */}
//  <div className="min-w-[80%]" >
//    <Routes>
    
//     <Route path="/" element={<Navigate to="/add" />} />
// <Route path="/add"  element={<AddItems token={token} />}   />
// <Route path="/list"  element={<ListItems token={token} />}  />
// <Route path="/orders"  element={<Orders token={token} />}  />


// </Routes>
//  </div>
// </div>
//   </div>  )
// }










// </BrowserRouter>
//   </div>
//   )
// }

// export default App
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import AddItems from "./pages/addItems";
import ListItems from "./pages/listItems";
import Navbar from "./components/Navbar";
import Orders from "./pages/Orders";
import { assets } from "./assets/admin_assets/assets";

export const url = import.meta.env.VITE_SERVER_URL;
export const currency = "$";

function MainContent({ token, setToken }) {
  const location = useLocation(); // Now inside BrowserRouter context
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const navLinks = [
    { link: "/add", icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>, title: "Add Items" },
    { link: "/list", icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
    </svg>
    , title: "Products List" },
    { link: "/orders", icon: <svg viewBox="0 -2 1028 1028" fill="#000000" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M91.448447 896c-50.086957 0-91.428571-40.546584-91.428571-91.428571V91.428571C0.019876 41.341615 40.56646 0 91.448447 0h671.006211c50.086957 0 91.428571 40.546584 91.428572 91.428571v337.093168l-3.180124-0.795031c-13.515528-3.975155-26.236025-5.565217-40.546584-5.565217h-0.795031l-0.795031-2.385093h-2.385094V91.428571c0-23.055901-20.670807-43.726708-43.726708-43.726708H91.448447c-23.055901 0-43.726708 20.670807-43.726708 43.726708v713.142858c0 23.055901 20.670807 43.726708 43.726708 43.726708h352.198758l0.795031 0.795031c8.745342 11.925466 3.975155 20.670807 0.795031 27.031056-3.180124 5.565217-4.770186 9.540373 0.795031 15.10559l4.770186 4.770186H91.448447z" fill="" /><path d="M143.125466 174.906832c-8.745342 0-15.900621-11.130435-15.900621-24.645962 0-13.515528 7.15528-24.645963 15.900621-24.645963h270.310559c8.745342 0 15.900621 11.130435 15.900621 24.645963 0 13.515528-7.15528 24.645963-15.900621 24.645962h-270.310559z" fill="" /><path d="M413.436025 128h-270.310559c-7.15528 0-13.515528 9.540373-13.515528 22.26087s6.360248 22.26087 13.515528 22.260869h270.310559c7.15528 0 13.515528-9.540373 13.515528-22.260869s-5.565217-22.26087-13.515528-22.26087zM139.945342 302.111801c-7.15528 0-12.720497-10.335404-12.720497-24.645962s5.565217-24.645963 12.720497-24.645963h193.987577c7.15528 0 12.720497 10.335404 12.720497 24.645963s-5.565217 24.645963-12.720497 24.645962H139.945342z" fill="" /><path d="M333.932919 255.204969H139.945342c-5.565217 0-9.540373 9.540373-9.540373 22.26087s3.975155 22.26087 9.540373 22.260869h193.987577c5.565217 0 9.540373-9.540373 9.540373-22.260869s-4.770186-22.26087-9.540373-22.26087zM734.628571 1024c-27.826087 0-58.037267-1.590062-96.993788-4.770186-56.447205-4.770186-108.124224-31.006211-158.211181-79.503106L253.634783 718.708075c-52.47205-50.881988-54.857143-117.664596-7.950311-168.546584 19.875776-20.670807 50.881988-33.391304 84.273292-33.391305 33.391304 0 63.602484 12.720497 82.68323 34.981367 0.795031 0.795031 2.385093 2.385093 5.565217 3.975155 0.795031 0.795031 2.385093 1.590062 3.180124 2.385093V451.57764v-52.47205c0-40.546584 0-81.888199 0.795031-122.434783 0.795031-60.42236 47.701863-106.534161 109.714286-106.534161h0.795031c59.627329 0 104.944099 43.726708 108.124224 103.354037 0.795031 13.515528 0.795031 27.826087 0 42.136646v18.285714h11.925466c41.341615 0 73.142857 14.310559 96.198757 44.52174 0.795031 1.590062 5.565217 3.180124 11.925466 3.180124 2.385093 0 4.770186 0 6.360249-0.795031 7.15528-0.795031 14.310559-1.590062 20.670807-1.590062 31.801242 0 59.627329 12.720497 83.478261 38.956521 3.975155 3.975155 12.720497 7.15528 20.670807 7.15528h3.180125c5.565217-0.795031 11.925466-1.590062 17.490683-1.590062 59.627329 0 107.329193 42.136646 108.124224 96.993789 2.385093 100.968944 3.975155 200.347826-7.15528 298.931677-13.515528 119.254658-77.118012 182.857143-201.142857 198.757764-23.055901 3.975155-49.291925 5.565217-77.913044 5.565217zM325.982609 562.086957c-16.695652 0-32.596273 6.360248-44.521739 17.490683-14.310559 14.310559-22.26087 31.006211-22.26087 49.291925 0 19.080745 8.745342 38.161491 24.645963 54.062112l30.21118 30.21118c65.987578 65.192547 134.360248 131.975155 202.732919 197.962733 33.391304 31.801242 71.552795 52.47205 113.689441 60.42236 32.596273 6.360248 65.192547 9.540373 96.993789 9.540373 28.621118 0 57.242236-2.385093 85.068323-7.950311 100.968944-18.285714 147.080745-66.782609 156.621118-160.596273 8.745342-89.838509 7.950311-182.062112 6.360248-271.10559v-14.310559c-0.795031-32.596273-23.850932-54.857143-56.447205-54.857143-8.745342 0-16.695652 1.590062-25.440993 4.770187V601.043478c0 11.130435 0 32.596273-22.26087 32.596274h-0.795031c-7.15528 0-12.720497-1.590062-15.900621-5.565218-6.360248-6.360248-7.15528-18.285714-7.15528-27.826087v-4.770186c0-36.571429 0.795031-73.937888 0-111.304348-0.795031-32.596273-23.850932-55.652174-55.652174-55.652174-7.950311 0-15.900621 1.590062-23.0559 3.975155v128.795031c0 11.130435-2.385093 19.875776-7.950311 25.440994-3.975155 3.975155-9.540373 6.360248-16.695652 6.360249h-0.795031c-21.465839-0.795031-21.465839-23.055901-21.465838-31.006211v-52.47205-66.782609c0-15.10559-6.360248-31.006211-18.285715-42.931677-11.130435-11.130435-26.236025-17.490683-41.341615-17.490683-6.360248 0-13.515528 0.795031-19.875776 3.180124V442.832298c0 27.031056 0 55.652174-1.590062 83.478261-0.795031 7.15528-7.15528 12.720497-13.515528 18.285714-2.385093 2.385093-5.565217 4.770186-7.950311 7.15528l-2.385093 2.385093-1.590062-3.975155c-1.590062-2.385093-3.975155-4.770186-6.360248-6.360249-4.770186-5.565217-10.335404-11.130435-13.515528-17.490683-2.385093-4.770186-1.590062-10.335404-1.590062-15.10559v-6.360249-69.167701c0-50.881988 0-103.354037-0.795032-155.031056 0-38.161491-24.645963-63.602484-60.42236-64.397516-38.956522 0-65.192547 27.826087-65.192546 68.372671v374.459627l-10.335404 6.360249-0.795031-1.590062c-7.15528-7.950311-15.10559-15.900621-22.26087-23.850932-16.695652-17.490683-34.186335-36.571429-51.677018-54.062112-15.900621-15.10559-35.776398-23.850932-56.447205-23.850931z" fill="" /></svg>, title: "Orders" },
  ];

  return (
    <div className="" >
      <Navbar setToken={setToken} />
      <div className="flex flex-row max-sm:flex-col ">

{/* navbar */}
        <div className="h-screen max-sm:h-fit 
         sm:border-r max-w-[20%] w-fit py-7 pl-4">
          <div className=" max-sm:flex flex-row max-sm:gap-3  " >
            {navLinks.map((link, index) => (
            <Link title={link.title} onClick={()=>setActiveLink(link.link) }
                  key={index} to={link.link} className={`flex  gap-1 w-fit rounded rounded-r-none 
                my-2 ${activeLink == link.link && "bg-pink-200 !border-red-400 "}
              max-sm:border  px-3 py-1.5 !w-full items-center  border-y border-l border-gray-300`} >
                 <div className="w-7  flex   h-7 " >
                  {link.icon}
                 </div>
                  <span className="max-md:hidden" >{link.title}</span>
                </Link>
            ))}
          </div>
        </div>
{/* content */}

        <div className="sm:max-w-[80%] overflow-hidden max-sm:mx-auto w-full ">
          <Routes>
            <Route path="/" element={<Navigate to="/add" />} />
            <Route path="/add" element={<AddItems token={token} />} />
            <Route path="/list" element={<ListItems token={token} />} />
            <Route path="/orders" element={<Orders token={token} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}









function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="max-w-screen-xl items-center mx-auto">
      <BrowserRouter>
        {token === "" ? <Login setToken={setToken} /> : <MainContent token={token} setToken={setToken} />}
      </BrowserRouter>
    </div>
  );
}

export default App;
