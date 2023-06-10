import React from "react";
import OwlCarousel from "react-owl-carousel";

import PricingCarouselCard from "./PricingCarouselCard";

import { pricingCardData } from "../utils/data";

const CardCarousel = () => {
  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 2,
    },
  };

  return (
    <OwlCarousel
      className="owl-theme  flex"
      loop={true}
      autoPlay
      margin={30}
      items={2}
      slideBy={2}
      autoplaySpeed={1000}
      autoplayHoverPause={true}
      dots={true}
      responsive={responsive}
      dotsClass="owl-dots"
      dotClass="owl-dot"
    >
      {pricingCardData.map((data, i) => (
        <PricingCarouselCard key={i} {...data} />
      ))}
    </OwlCarousel>
  );
};

export default CardCarousel;
