import React from "react";

const HotelFacilities = () => {
  return (
    <div className="w-full bg-bgSoft">
      <div className="mainContainer ">
        <div className="flex flex-col items-start gap-1">
          <h6 className="subtitle mb-1 text-primary tracking-[6px] font-barlowCondensed uppercase">
            Our Services
          </h6>
          <h1 className=" main-title font-gilda text-white font-medium text-[46px] leading-[57.5px] mb-5">
            Hotel Facilities
          </h1>

          <div className="w-full grid grid-cols-3 gap-3">
            <div className="px-5 py-8 bg-red-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelFacilities;
