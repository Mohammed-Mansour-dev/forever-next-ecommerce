import React from "react";

const SectionsTitle = ({firstTitle,
    secondTitle,fontFamily,
    desc}) => {
  return (
    <div className="">
      <div>
        <div className="flex justify-center items-center gap-2 w-full py-3  ">
          <h1 className={`text-semidark/80 ${fontFamily} text-xl lg:text-2xl font-outfit font-medium uppercase  `}>
            {firstTitle}
          </h1>
          <h1 className={`text-sodark  ${fontFamily}  text-xl lg:text-2xl font-outfit font-semibold uppercase  `}>
            {secondTitle}
          </h1>
          <div className="w-10 h-[1.5px] bg-neutral-700 mt-1 " />
        </div>
        <p className="text-semidark/70 font-normal text-lg px-4 md:w-2/3 mx-auto text-center font-outfit " >
          {desc}
          </p>
      </div>
    </div>
  );
};

export default SectionsTitle;
