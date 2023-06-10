import React from "react";
import OwlCarousel from "react-owl-carousel";
import ReviewCard from "./ReviewCard";
import { clientReviewCarouselData } from "../utils/data";

const ReviewCarousel = () => {
  return (
    <OwlCarousel
      className="owl-theme"
      loop={true}
      autoPlay={false}
      items={1}
      dots={true}
      dotsClass="owl-dots"
      dotClass="owl-dot"
    >
      {clientReviewCarouselData.map((data, i) => (
        <ReviewCard key={i} {...data} />
      ))}
    </OwlCarousel>
  );
};

export default ReviewCarousel;
