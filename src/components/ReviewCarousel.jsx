import React from "react";
import OwlCarousel from "react-owl-carousel";
import ReviewCard from "./ReviewCard";

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
      {[0, 1, 2].map((i) => (
        <ReviewCard key={i} />
      ))}
    </OwlCarousel>
  );
};

export default ReviewCarousel;
