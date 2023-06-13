import React from "react";
import Button from "./Button";

const ServiceCard = ({ reverse, title, category, image, description }) => {
  return (
    <div
      className={`w-full flex  items-center flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="md:w-1/2 w-full sm:h-[350px] h-auto cursor-pointer group overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[1000ms] ease-in-out"
        />
      </div>
      <div className="md:w-1/2 w-full sm:h-[350px] h-[330px]  flex flex-col py-7 sm:px-7 px-3 justify-center  items-start gap-2 bg-bgDark">
        <h6 className="subtitle font-barlowCondensed text-primary tracking-[3px] leading-[26.3px] text-base ">
          {category}
        </h6>
        <h2 className=" font-gilda text-white font-medium text-[32px] leading-[40px] mb-2">
          {title}
        </h2>
        <p className="text-base text-secondary mb-3">{description}</p>
        <Button hoverBg="bg-[#3B3B3B]">LEARN MORE</Button>
      </div>
    </div>
  );
};

export default ServiceCard;
