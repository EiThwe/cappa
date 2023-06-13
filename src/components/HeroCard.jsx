import React, { useEffect, useState } from "react";
import FiveStar from "./FiveStar";
import Button from "./Button";
import BackgroundContainer from "./BackgroundContainer";
import { heroData } from "../utils/data";

const HeroCard = ({ code }) => {
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center sm:gap-5 gap-3 flex-col relative bg-black
    "
    >
      <BackgroundContainer image={heroData[code].image} />

      <div className={`animate__animated animate__fadeIn animate__slideInUp`}>
        <FiveStar />
      </div>
      <h6
        className={`subtitle mb-1 text-white text-base tracking-[6px] font-barlowCondensed mt-3
        animate__animated animate__fadeIn animate__slideInUp`}
      >
        {heroData[code].category}
      </h6>
      <div className="w-[80%] animate__animated animate__fadeIn animate__slideInUp">
        <h1
          className={`md:leading-[60px] leading-[40px] font-gilda lg:text-[55px] md:text-[45px] text-[30px] text-white 
          sm:tracking-[15px] tracking-[8px] text-center md:px-20
      `}
        >
          {heroData[code].title}
        </h1>
      </div>
      <Button
        width="w-[160px]"
        normalBg="bg-transparent"
        hoverBg="bg-white border-white"
        textHover
      >
        Rooms & Suites
      </Button>
    </div>
  );
};

export default HeroCard;
