import React from "react";
import OwlCarousel from "react-owl-carousel";

const FullHero = ({ data, onClick }) => {
  return (
    <OwlCarousel
      className="owl-theme  flex"
      loop={true}
      autoplay={true}
      margin={0}
      items={1}
      slideBy={1}
      autoplaySpeed={1000}
      autoplayHoverPause={true}
      dots={false}
    >
      {data?.map(({ image }, index) => (
        <div key={index} className="w-full h-screen bg-black ">
          <img src={image} alt="slider-image" className="w-full opacity-80" />

          <div className="absolute bottom-10 left-0 w-full h-[100px] z-10 flex justify-center items-center">
            <button
              onClick={onClick}
              className="border border-secondary hover:border-primary flex justify-center items-center w-[50px] h-[50px] rounded-full
               animate-bounce duration-300"
            >
              <i className="ti-arrow-down text-white"></i>
            </button>
          </div>
        </div>
      ))}
    </OwlCarousel>
  );
};

export default FullHero;
