import React from "react";
import NewsCard from "./NewsCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./NewsCarousel.css";

const NewsCarousel = ({ Rooms }) => {
  const responsive = {
    0: {
      items: 1,
      nav: false,
      dots:true,
    },
    640: {
      items: 2,
      nav: false,
      dots:true,

    },
    1024: {
      items: 3,
      nav: true,
    
    },
  };

  return (
    <>
      <OwlCarousel
        className="owl-theme owl-loaded flex news-carousel"
        loop={true}
        margin={30}
        items={2}
        slideBy={1}
        dots={false}
        responsive={responsive}
      >
        {Rooms.map((data, index) => (
          <NewsCard key={index} {...data} />
        ))}
      </OwlCarousel>
    </>
  );
};

export default NewsCarousel;
