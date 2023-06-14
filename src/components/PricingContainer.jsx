import React from "react";
import PricingCarouselCard from "./PricingCarouselCard";

const PricingContainer = ({ soft, data }) => {
  return (
    <div className={`w-full ${soft ? "bg-bgSoft" : "bg-bgDark"}`}>
      <div className="mainContainer sm:px-14 md:px-10 lg:px-0 px-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {data?.map((data, i) => (
          <PricingCarouselCard notCarousel key={i} {...data} />
        ))}
      </div>
    </div>
  );
};

export default PricingContainer;
