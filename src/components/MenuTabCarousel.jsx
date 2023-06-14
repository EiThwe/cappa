import React from "react";
import Slider from "react-slick";

import { menuItemData } from "../utils/data";

const MenuTabCarousel = ({ refs, active, setActive }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    speed: 500,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="mb-12 relative group ">
      {menuItemData.map(({ title }, index) => (
        <div key={index} className="sm:px-2  px-3">
          <button
            onClick={() => setActive(index)}
            className={`text-[20px] w-full leading-[25px] text-white font-gilda flex py-[15px] border justify-center 
        items-center ${
          active == index ? "border-primary" : "border-transparent"
        }`}
          >
            {title}
          </button>
        </div>
      ))}
    </Slider>
  );
};

const NextButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="customNextBtn min-w-[45px] h-[45px] rounded-full border sm:border-primary border-transparent flex justify-center items-center
    sm:text-white  transition-all duration-500 ease-in-out absolute sm:-right-[50px] -right-[22px] 
    top-2 opacity-0 group-hover:opacity-100  text-primary
  sm:hover:min-w-[40px] sm:hover:h-[40px]"
  >
    <span className="lnr ti-angle-right text-xs"></span>
  </button>
);

const PrevButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="customNextBtn min-w-[45px] h-[45px] rounded-full border sm:border-primary border-transparent flex justify-center
     items-center sm:text-white  transition-all duration-500 ease-in-out absolute sm:-left-[50px] -left-[22px]
  top-2 opacity-0 group-hover:opacity-100  text-primary
  sm:hover:min-w-[40px] sm:hover:h-[40px]"
  >
    <span className="lnr ti-angle-left text-xs"></span>
  </button>
);

export default MenuTabCarousel;
