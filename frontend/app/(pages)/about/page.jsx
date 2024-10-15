import SectionsTitle from "@/app/_components/SectionsTitle";
import SubscribeGetOffInput from "@/app/_components/SubscribeGetOffInput";
import { assets } from "@/app/assets/frontend_assets/assets";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    // wrapper
    <div className="py-10 px-5">


{/* about us */}
<div>
      {/* title */}
      <div className="">
        <SectionsTitle firstTitle="About" secondTitle="us" />
      </div>

      {/* hero */}
      <div className="w-full gap-5 pt-7 flex  flex-col md:flex-row ">
        {/* img */}
        <div className="md:w-1/2 xl:p-10 flex w-full ">
          <Image src={assets.about_img} alt="about us image" className="object-contain" />
        </div>

        {/* text */}
        <div className="md:w-1/2 w-full flex ">

          <div className="md:p-5 gap-3 lg:gap-4 flex flex-col justify-center ">
            <p className="font-outfit font-normal text-base  xl:text-lg text-dark/80 " >
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes
            </p>

            <p  className="font-outfit font-normal text-base  xl:text-lg text-dark/80 "  >
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers
            </p>

            <h1 className="font-bold md:hidden lg:flex max-sm:-mb-3 md:-mb-5 text-dark/80 font-outfit text-base  xl:text-lg " >Our Mission</h1>

            <p  className="font-outfit md:hidden lg:flex font-normal text-base  xl:text-lg text-dark/80 "  >
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond
            </p>

          </div>





        </div>
         </div>
{/* down ttext for md divices */}
<div className="md:pt-4" >
        <h1 className="font-bold md:flex hidden lg:hidden text-dark/80 font-outfit text-base  xl:text-lg " >Our Mission</h1>

<p  className="font-outfit md:flex hidden lg:hidden font-normal text-base  xl:text-lg text-dark/80 "  >
  Our mission at Forever is to empower customers with choice,
  convenience, and confidence. We're dedicated to providing a
  seamless shopping experience that exceeds expectations, from
  browsing and ordering to delivery and beyond
</p>

</div>

</div>


{/* why choose us */}
<div className="py-10">
    {/* title */}
    <div className="flex pt-10">
      <SectionsTitle firstTitle="Why" secondTitle="Choose us" />
    </div>

{/* carts */}
<div className="w-ful flex flex-wrap max-md:grid max-sm:grid-cols-1 max-md:grid-cols-2 l">

   {/* card 1 */} 
<div className="md:w-1/3 h-60     " >
    <div className="p-10 space-y-3 h-full w-full mt-1 border flex-col flex justify-center " >
<h1 className="font-outfit text-dark font-bold text-base uppercase " >Quality Assurance<span className="textsm" >:</span></h1>
<p className="font-outfit text-semidark text-sm  capitalize  " >We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
    </div> 
</div>


   {/* card 2 */} 
<div className="md:w-1/3 h-60     " >
    <div className="p-10 space-y-3 h-full w-full mt-1 border flex-col flex justify-center " >
<h1 className="font-outfit text-dark font-bold text-base uppercase " >Convenience<span className="textsm" >:</span></h1>
<p className="font-outfit text-semidark text-sm  capitalize  " >With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
    </div> 
</div>


   {/* card 3 */} 
<div className="md:w-1/3 h-60     " >
    <div className="p-10 space-y-3 h-full w-full mt-1 border flex-col flex justify-center " >
<h1 className="font-outfit text-dark font-bold text-base uppercase " >Exceptional Customer Service:<span className="textsm" >:</span></h1>
<p className="font-outfit text-semidark text-sm  capitalize  " >Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
    </div> 
</div>





</div>





</div>




{/* subscribe input */}
<div className="py-16">
  <SubscribeGetOffInput />
</div>


    </div>
  );
};

export default page;
