import { useState } from "react";
import Image from "next/image";
import React from "react";

const Animation = () => {
  return (
    <div className="mt-[200px]">
      <span className="flex justify-center items-center 2xl:text-[66px]  xl:text-[66px] sm:text-[33px]  p-0 font-Wood">
        LOADING...
      </span>
      <div className="flex justify-center items-center">
        <div className="bg-animation bg-cover bg-no-repeat bg-center 2xl:w-[500px]  xl:w-[500px] sm:w-[300px] 2xl:h-[400px]  xl:h-[400px] sm:h-[250px]"></div>
      </div>
    </div>
  );
};

export default Animation;
