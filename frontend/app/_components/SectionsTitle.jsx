import { motion } from "framer-motion";
import React from "react";

const SectionsTitle = ({firstTitle,
    secondTitle,fontFamily,
    desc}) => {
  return (
    <div className="">
      <div>
        <motion.div initial={{x:200 ,opacity:0}} whileInView={{x:0 ,opacity:1}} transition={{duration:1,delay:.2}} viewport={{once:true ,amount:.4}}  className="flex justify-center items-center gap-2 w-full py-3  ">
          <h1 className={`text-semidark/80 ${fontFamily} text-xl lg:text-2xl font-outfit font-medium uppercase  `}>
            {firstTitle}
          </h1>
          <h1 className={`text-sodark  ${fontFamily}  text-xl lg:text-2xl font-outfit font-semibold uppercase  `}>
            {secondTitle}
          </h1>
          <div className="w-10 h-[1.5px] bg-neutral-700 mt-1 " />
        </motion.div>
        <motion.p  initial={{x:-300 ,opacity:0}} whileInView={{x:0 ,opacity:1}} transition={{duration:1,delay:.2}} viewport={{once:true}}  className="text-semidark/70 font-normal text-lg px-4 md:w-2/3 mx-auto text-center font-outfit " >
          {desc}
          </motion.p>
      </div>
    </div>
  );
};

export default SectionsTitle;
