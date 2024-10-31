"use client"

import Image from "next/image";
import Hero from "./_components/Hero";
import LatestProducts from "./_components/LatestProducts";
import BestSeller from "./_components/BestSeller";
import OurAdvantages from "./_components/OurAdvantages";




export const backendUrl =process.env.NEXT_PUBLIC_SERVER_URL;

export default function Home() {
console.log("Home");

  return (
<>

<div className="px-3 overflow-hidden " >
  <Hero/>
  <LatestProducts />
<BestSeller />
<OurAdvantages />


</div>

</>
  );
}
