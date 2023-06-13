import React from "react";

const NewsCard = ({ id, name, month, day, category, image }) => {
  return (
    <div className="relative  pb-32">
      <div className=" group ">
        {/* image section  */}
        <div className="bgImage group overflow-hidden  ">
          <img
            src={image}
            className="w-full h-full group-hover:bg-black   group-hover:opacity-60 group-hover:scale-125 transition-all object-cover duration-1000 "
            alt=""
          />
        </div>
        {/* time section block  */}
        <div className="border-[0.5px] absolute top-5 left-5 text-white  px-1 py-2">
          <p className=" uppercase text-[12px] tracking-[2px] mb-1">{month}</p>
          <h6 className=" uppercase text-[24px] tracking-[2px]">{day}</h6>
        </div>
        {/* text section  */}
        <div className=" bg-bgCoffee  w-[91%] absolute left-4  top-[70%] group-hover:top-80 transition-all duration-500 z-50 py-2 px-5">
          <h6 className="text-primary font-barlowCondensed text-[16px] tracking-[4px] py-2 uppercase ">
            {category}
          </h6>
          <h2 className="text-white font-gilda text-[24px] mb-6">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
