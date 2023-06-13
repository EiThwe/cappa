import React, { useState } from "react";
import { menuItemData } from "../utils/data";
import OwlCarousel from "react-owl-carousel";

const MenuTabCarousel = ({ active, setActive }) => {
  return (
    <OwlCarousel
      refreshClass={active}
      className="owl-theme  flex "
      loop={true}
      items={4}
      slideBy={1}
      dots={false}
      mouseDrag={true}
      //   onRefreshed={(e) => console.log(e)}
    >
      {menuItemData.map(({ title }, i) => (
        <div
          key={i}
          onClick={() => {
            // alert(i);
            setActive(i);
          }}
          className={` text-[20px] leading-[25px] text-white font-gilda flex py-[15px] ${
            active == i && "border border-primary"
          } justify-center 
        items-center`}
        >
          {title}
        </div>
      ))}
    </OwlCarousel>
  );
};

export default MenuTabCarousel;
