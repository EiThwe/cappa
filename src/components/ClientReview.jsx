import React from "react";
import FiveStar from "./FiveStar";
import { IoPlayOutline } from "react-icons/io5";
import ReviewCard from "./ReviewCard";
import ReviewCarousel from "./ReviewCarousel";

const ClientReview = () => {
  return (
    <section className="client-review w-full bg-black bg-opacity-30">
      <div className="mainContainer flex flex-col justify-center items-center text-white">
        <div className="flex flex-col items-start md:w-[680px] w-full ">
          <h6 className="subtitle font-barlowCondensed tracking-[6px] leading-[26.3px] text-xs mb-4 ">
            TESTIMONIALS
          </h6>
          <h2 className="main-title font-gilda text-white font-medium text-[32px] leading-[40px] mb-4">
            What Client's Say?
          </h2>
          <div className="w-[70px] bg-gray-300 h-[1px]" />
          <div className="w-full px-2">
            <ReviewCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
