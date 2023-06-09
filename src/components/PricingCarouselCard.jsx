import React from "react";
import check from "../assets/check.svg";
import cross from "../assets/cross.svg";

const PricingCarouselCard = ({ title, price, per, image}) => {
  return (
    <div className=" bg-[#2B2B2B] bg- h-full">
      <img src={image} alt="" className="w-full " />
      <div className="text-card p-10">
        <p className="text-[24px] text-white font-gilda leading-[24px] mb-3">
          {title}
        </p>
        <p className="text-secondary mb-3">
          <span className="text-[40px] text-primary font-gilda">{price}</span>/
          {per}
        </p>
        <div className="flex flex-col gap-3 mb-3">
          <div className="flex gap-3">
            <div className="w-[20px]">
              <img src={check} alt="" className="w-full" />
            </div>
            <p className="text-secondary">Hotel ut nisan the duru</p>
          </div>
          <div className="flex gap-3">
            <div className="w-[20px]">
              <img src={check} alt="" className="w-full" />
            </div>
            <p className="text-secondary">Orci miss natoque vasa ince</p>
          </div>
          <div className="flex gap-3">
            <div className="w-[20px]">
              <img src={cross} alt="" className="w-[20px]" />
            </div>
            <p className="text-secondary">Clean sorum ipsum morbin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCarouselCard;
