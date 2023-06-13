import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";

import HeroCard from "./HeroCard";
import { heroData } from "../utils/data";
import call from "../assets/icons/call.svg";

const Hero = () => {
  const [code, setCode] = useState(0);

  const handleOnClick = () => {
    // console.log("click");
    if (code < 2) {
      setCode(code + 1);
    } else {
      setCode(0);
    }
  };

  return (
    <div className="w-full min-h-screen  ">
      <OwlCarousel
        className="owl-theme  flex"
        autoplay={false}
        loop={true}
        items={1}
        smartSpeed={1000}
        dots={false}
      >
        {heroData.map((data, i) => (
          <HeroCard key={i} {...data} index={i} code={code} />
        ))}
      </OwlCarousel>

      <div className="absolute bottom-16 md:right-36 sm:right-10 right-2 w-[90px] h-[40px] z-10 flex items-center justify-between">
        <button
          onClick={handleOnClick}
          className="w-[40px] h-[40px] rounded-full border border-secondary  flex justify-center items-center
        hover:border-primary transition-all duration-300 ease-in-out"
        >
          <i className="ti-angle-left text-white text-xs"></i>
        </button>
        <button
          onClick={handleOnClick}
          className="w-[40px] h-[40px] rounded-full border border-secondary  flex justify-center items-center
        hover:border-primary transition-all duration-300 ease-in-out"
        >
          <i className="ti-angle-right text-white text-xs"></i>
        </button>
      </div>

      <div className="min-h-screen  absolute top-0 md:right-14 sm:right-10 right-2 z-10 flex flex-col justify-center items-center gap-3">
        <div className="w-[1px] h-16 bg-secondary bg-opacity-50" />
        <div className="flex flex-col gap-3">
          <button
            onClick={() => setCode(0)}
            className={code == 0 ? "text-primary" : "text-white"}
          >
            1
          </button>
          <button
            onClick={() => setCode(1)}
            className={code == 1 ? "text-primary" : "text-white"}
          >
            2
          </button>
          <button
            onClick={() => setCode(2)}
            className={code == 2 ? "text-primary" : "text-white"}
          >
            3
          </button>
        </div>
        <div className="w-[1px] h-16 bg-secondary bg-opacity-50" />
      </div>

      <div
        className="min-h-screen  absolute top-0 md:left-14 sm:left-10 left-2 z-10 flex flex-col sm:justify-center
        justify-end sm:pb-0 pb-5  items-center sm:gap-3 gap-1 w-[40px]"
      >
        <div className=" rotate-[270deg]">
          <p className="sm:text-[12px] text-[10px] tracking-[5px] text-white font-barlowCondensed">
            RESERVATION
          </p>
          <h6 className="sm:text-[24px] text-[20px] text-primary font-gilda whitespace-nowrap">
            855 100 4444
          </h6>
        </div>
        <button
          className="sm:w-[55px] sm:h-[55px] w-[40px] h-[40px] rounded-full border border-secondary  flex justify-center items-center
        hover:border-primary transition-all duration-300 ease-in-out mt-14 animate-pulse"
        >
          <img src={call} alt="" className="sm:w-[24px] w-[18px]" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
