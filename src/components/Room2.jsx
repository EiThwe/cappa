import React from "react";
import "./Room.css";
import { Link } from "react-router-dom";

const Room2 = ({ id, name, price, time, img }) => {
  return (
    <div className="w-[95%]">
      {/* background image  */}
      <div className="backgroundImg   relative  overflow-hidden group ">
        <img
          src={img}
          className="w-full h-full group-hover:bg-black   group-hover:opacity-60 group-hover:scale-125 transition-all object-cover duration-1000"
          alt=""
        />
        {/* book badge  */}
        <div className="border-[0.5px] absolute top-5 right-5 text-white badgeBook px-1 py-1">
          <p className=" uppercase tracking-[2px]">BOOK</p>
        </div>
        {/* text  */}
        <div
          className="absolute flex flex-col gap-3 bottom-5 left-[50%] sm:pb-6 pb-4 translate-x-[-50%] sm:translate-y-[45%]
         translate-y-[40%] group-hover:translate-y-[0%] text-white w-[90%] transition ease delay-100 duration-500 "
        >
          <h6 className="text-[15px] uppercase tracking-[4px] font-semibold sm:mb-2 mb-0">
            {price}$ / {time}
          </h6>
          <h2 className="text-[27px] font-gilda font-medium">{name}</h2>
          <div className="underLine2 sm:mb-5 mb-3"></div>
          {/* icon section  */}
          <div className="hideSection flex items-center justify-between w-full ">
            <div className="icongroup flex gap-3 items-center  ">
              <i className="flaticon-bed text-[18px] hover:text-primary"></i>

              <i className="flaticon-bath text-[18px] hover:text-primary"></i>
              <i className="flaticon-breakfast text-[18px] hover:text-primary"></i>
              <i className="flaticon-towel text-[18px] hover:text-primary"></i>
            </div>
            <div className="">
              <Link to="/detail">
                <button className="text-[14px] uppercase tracking-[2px] hover:text-primary transition-all duration-300 cursor-pointer">
                  Details <i className="ti-arrow-right text-[10px]"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room2;
