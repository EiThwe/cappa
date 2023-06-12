import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./AutoplayBookingCarousel.css";

const AutoplayBookingCarousel = () => {
  const whiteCardarray = [
    "https://duruthemes.com/demo/html/cappa/demo2-dark/img/clients/2.png",
    "https://duruthemes.com/demo/html/cappa/demo2-dark/img/clients/1.png",
    "https://duruthemes.com/demo/html/cappa/demo2-dark/img/clients/3.png",
    "https://duruthemes.com/demo/html/cappa/demo2-dark/img/clients/4.png",
    "https://duruthemes.com/demo/html/cappa/demo2-dark/img/clients/5.png",
    "https://duruthemes.com/demo/html/cappa/demo2-dark/img/clients/6.png",
  ];
  const responsive = {
    0: {
      items: 3,
     
    },
    1020: {
      items: 4,
    
    },
  };
  return (
    <>
      <OwlCarousel
        loop={true}
        autoplay={true}
        nav={false}
        items={1}
        slideBy={1}
        autoplaySpeed={1000}
        autoplayHoverPause={true}
        responsive={responsive}
        className=""
      >
        {whiteCardarray?.map((img, index) => {
          return (
            <div key={index} className="flex ">
              <div className="w-40 ">
                <img src={img} className="w-full" alt="" />
              </div>
            </div>
          );
        })}
      </OwlCarousel>
    </>
  );
};

export default AutoplayBookingCarousel;
