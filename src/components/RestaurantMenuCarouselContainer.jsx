import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import MenuTabCarousel from "./MenuTabCarousel";
import { menuItemData } from "../utils/data";

const RestaurantMenuCarouselContainer = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <>
      <div className="menu-tab-carousel w-full flex justify-center items-center mb-12 group relative">
        <button
          className="customPrevBtn min-w-[45px] h-[45px] rounded-full border border-primary flex justify-center items-center
         text-white lg:opacity-0 sm:opacity-100 opacity-0 lg:group-hover:opacity-100 transition-all duration-500 ease-in-out absolute 
         lg:-left-[50px] -left-[2px] hover:min-w-[40px] hover:h-[40px]"
        >
          <span className="lnr ti-angle-left text-xs"></span>
        </button>

        <MenuTabCarousel setActive={setActive} />

        <button
          className="customNextBtn min-w-[45px] h-[45px] rounded-full border border-primary flex justify-center items-center
         text-white lg:opacity-0 sm:opacity-100 opacity-0 lg:group-hover:opacity-100 transition-all duration-500 ease-in-out absolute 
         lg:-right-[50px] -right-[2px] hover:min-w-[40px] hover:h-[40px]"
        >
          <span className="lnr ti-angle-right text-xs"></span>
        </button>
      </div>
      <MenuCard data={menuItemData[active].data} />
    </>
  );
};

export default RestaurantMenuCarouselContainer;
