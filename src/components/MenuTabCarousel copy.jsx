import React, { useState } from "react";
import { menuItemData } from "../utils/data";
import OwlCarousel from "react-owl-carousel";

const MenuTabCarousel = ({ setActive }) => {
  const responsive = {
    0: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1024: {
      items: 4,
    },
  };
  return (
    <div className="lg:w-full sm:w-[90%] w-full sm:px-0 pr-3">
      <OwlCarousel
        className="owl-theme   "
        loop={true}
        items={4}
        slideBy={1}
        dots={false}
        responsive={responsive}
      >
        {menuItemData.map(({ title }, i) => (
          <div
            onClick={() => setActive(i)}
            key={i}
            className={`restaurant-menu-item text-[20px] leading-[25px] text-white font-gilda flex py-[15px] $ justify-center 
        items-center`}
          >
            {title}
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default MenuTabCarousel;
