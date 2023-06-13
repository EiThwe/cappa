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
      <div className="menu-tab-carousel w-full flex justify-center items-center ">
        <MenuTabCarousel active={active} setActive={setActive} />
      </div>
      <MenuCard data={menuItemData[active].data} />
    </>
  );
};

export default RestaurantMenuCarouselContainer;
