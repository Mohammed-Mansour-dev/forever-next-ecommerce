import Image from "next/image";
import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full px-10 max-w-screen-2xl pb-10 pt-16 mx-auto  " >

        {/* grid */}
      <div className="md:grid md:grid-cols-4   gap-5 flex flex-col ">
        {/* company desc */}
        <div className="col-span-2  ">
         <Link href="/" className="md:mb-7 md:block  justify-center max-md:flex mb-2" >
          <Image src={assets.logo} className="w-32 h-10 " alt="Footer logo" />

         </Link>
          <p  className="text-lg font-outfit font-normal max-md:text-center text-semidark md:w-2/3 " >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            repudiandae sit! Ducimus iusto voluptatum rem consequatur, nihil at
            laborum aperiam quae eius nesciunt, fugit ipsum corrupti eos
            quibusdam aut quaerat tempore nisi deserunt deleniti con
          </p>
        </div>

        {/* company about */}

        <div className="col-span-1  ">
            <h1 className="uppercase font-semibold font-outfit   text-dark text-xl max-md:hidden md:mb-7 " >company</h1>

<div className="flex max-md:justify-center flex-wrap md:my-3 md:flex-col gap-3 " >
<Link  href="/" className="capitalize text-dark text-lg font-normal font-outfit  " >home</Link>
<Link href="/" className="capitalize text-dark text-lg font-normal font-outfit  " >about us</Link>
<Link href="/" className="capitalize text-dark text-lg font-normal font-outfit  " >delivery</Link>
<Link href="/" className="capitalize text-dark text-lg font-normal font-outfit  " >privacy policy</Link>

</div>

        </div>

        {/* get in touch */}

        <div className="md:col-span-1 max-md:text-center  ">
            <h1 className="uppercase max-md:my-2 font-semibold font-outfit text-dark max-md:mt-7 text-xl md:mb-7 " >get in touch</h1>

<div className="flex md:my-3 flex-col md:gap-3 " >
<Link  href="/" className="capitalize text-dark text-lg font-normal font-outfit  " >+967 781 747 445</Link>
<Link  href="/" className=" text-dark text-lg font-normal font-outfit  " >moalziko@gmail.com</Link>

</div>

        </div>
      </div>

{/* copy rights */}
<div className="border-t mt-14" >
    <h1 className="text-center text-[#565656] text-lg font-normal font-outfit py-7 " >
    Copyright 2024 © mohammed.develop@gmail.com - All Right Reserved.
    </h1>
</div>

    </div>
  );
};

export default Footer;
