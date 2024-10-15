import Image from "next/image";
import Hero from "./_components/Hero";
import LatestProducts from "./_components/LatestProducts";
import BestSeller from "./_components/BestSeller";
import OurAdvantages from "./_components/OurAdvantages";

export default function Home() {
  return (
<>

<div className="px-3" >
  <Hero/>
  <LatestProducts />
<BestSeller />
<OurAdvantages />


</div>

</>
  );
}
