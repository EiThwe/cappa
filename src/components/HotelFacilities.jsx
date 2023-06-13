import React from "react";
import { hotelFacilitiesData } from "../utils/data";

const HotelFacilities = () => {
  return (
    <div className="w-full bg-bgSoft">
      <div className="mainContainer sm:px-14 md:px-10 lg:px-0 px-3">
        <div className="flex flex-col items-start gap-1">
          <h6 className="subtitle mb-1 text-primary tracking-[6px] font-barlowCondensed uppercase">
            Our Services
          </h6>
          <h1 className=" main-title font-gilda text-white font-medium sm:text-[46px] text-[32px] leading-[57.5px] mb-5">
            Hotel Facilities
          </h1>

          <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-5">
            {hotelFacilitiesData.map(({ icon, title, description }, index) => (
              <div
                key={index}
                className="px-5 py-6 border border-primary border-opacity-10 flex flex-col gap-3 items-start"
              >
                <span className={`${icon} text-[45px] text-primary`}></span>
                <h6 className="text-[24px] font-gilda text-white">{title}</h6>
                <p className="text-[15px] text-secondary leading-[26.3px]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelFacilities;
