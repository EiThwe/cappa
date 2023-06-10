import React from "react";
import { Link } from "react-router-dom";

import { exploreData, socialIconData } from "../utils/data";
import SocialBtn from "./SocialBtn";

import World from "../assets/icons/world.svg";
import Call from "../assets/icons/call.svg";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-bgSoft">
        <div className="mainContainer grid md:grid-cols-4 grid-cols-1 md:gap-0 gap-10 md:px-[10px] px-[20px]">
          <div
            id="about-hotel"
            className="md:col-span-2 col-span-1 flex flex-col items-start gap-5"
          >
            <h6 className="text-[24px] font-gilda text-white">About Hotel</h6>
            <p className="text-base text-secondary max-w-[400px]">
              Welcome to the best five-star deluxe hotel in New York. Hotel
              elementum sesue the aucan vestibulum aliquam justo in sapien
              rutrum volutpat.
            </p>
            <div className="px-8 py-4 bg-bgCoffee flex items-center gap-8">
              <h6 className="text-base text-secondary">English</h6>
              <img src={World} alt="world-icon" className="w-[15px]" />
            </div>
          </div>

          <div id="explore" className="flex flex-col items-start gap-5">
            <h6 className="text-[24px] font-gilda text-white">Explore</h6>
            <div className="flex flex-col items-start gap-2">
              {exploreData.map(({ path, name }, index) => (
                <Link
                  key={index}
                  to={path}
                  className="cursor-pointer group relative"
                >
                  <div
                    className="absolute top-[8px] w-[6px] h-[6px] rounded-full bg-primary opacity-0 group-hover:opacity-100
                transition-all duration-500 ease-in-out delay-75"
                  />
                  <h6 className="text-base text-secondary group-hover:translate-x-4 transition-all duration-500 ease-in-out">
                    {name}
                  </h6>
                </Link>
              ))}
            </div>
          </div>

          <div id="explore" className="flex flex-col items-start gap-5">
            <h6 className="text-[24px] font-gilda text-white">Contact</h6>
            <p className="text-base text-secondary">
              1616 Broadway NY, New York 10001 United States of America
            </p>
            <div className="flex items-center gap-[2px]">
              <img src={Call} alt="call" className="w-[30px]" />
              <h6 className="text-white text-[24px]">855 100 4444</h6>
            </div>
            <div className="relative">
              <h6 className="text-white text-base ">info@luxuryhotel.com</h6>
              <div className="absolute w-full h-[1px] bg-primary -bottom-[3px]" />
            </div>
            <div className="flex items-center gap-3 mt-2">
              {socialIconData.map((data, index) => (
                <SocialBtn key={index} {...data} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-[40px] bg-bgDark flex justify-center items-center">
        <h6 className="text-[12px] text-secondary">
          © Copyright 2023 by{" "}
          <span className="font-medium text-white text-[12px]">
            The Cappa Premium Hotel
          </span>
        </h6>
      </div>
    </>
  );
};

export default Footer;
