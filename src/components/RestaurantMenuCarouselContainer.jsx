import React, { useEffect, useRef, useState } from "react";
import MenuCard from "./MenuCard";
import MenuTabCarousel from "./MenuTabCarousel";
import { menuItemData } from "../utils/data";

const RestaurantMenuCarouselContainer = () => {
  const carouselRef = useRef();
  const [active, setActive] = useState(0);

  const onPrevHandler = () => {
    console.log(carouselRef);
  };
  const onNextHandler = () => {
    console.log(carouselRef);
  };

  return (
    <>
      <MenuTabCarousel active={active} setActive={setActive} />
      <MenuCard data={menuItemData[active].data} />
    </>
  );
};

export default RestaurantMenuCarouselContainer;
