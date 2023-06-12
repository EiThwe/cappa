import React from "react";
import "./Room.css";
import { Link } from "react-router-dom";
const Room = ({ id, name, price, time, img }) => {
  console.log(id);
  return (
    <div className="">
      {/* background image  */}
      <div className="backgroundImg w-[95%] relative  overflow-hidden group">
        <img
          src={img}
          className="w-full h-full group-hover:bg-black   group-hover:opacity-60  group-hover:scale-125 transition-all object-cover duration-1000"
          alt=""
        />
        {/* book badge  */}
        <div className="border-[0.5px] absolute top-5 right-5 text-white badgeBook px-1 py-1">
          <p className=" uppercase tracking-[2px]">BOOK</p>
        </div>
        {/* text  */}
        <div className="absolute flex flex-col gap-3 bottom-5 left-[50%] pb-6 translate-x-[-50%] translate-y-[45%] group-hover:translate-y-[0%] text-white w-[90%] transition ease delay-100 duration-500">
          <h6 className="text-[15px] uppercase tracking-[4px] font-semibold mb-2">
            {price}$ / {time}
          </h6>
          <h2 className="text-[27px] font-gilda font-medium">{name}</h2>
          <div className="underLine mb-5"></div>
          {/* icon section  */}
          <div className="hideSection flex items-center justify-between w-full ">
            <div className="icongroup flex gap-3 items-center  ">
              <i className="flaticon-bed text-[18px] hover:text-primary"></i>

              <i className="flaticon-bath text-[18px] hover:text-primary"></i>
              <i className="flaticon-breakfast text-[18px] hover:text-primary"></i>
              <i className="flaticon-towel text-[18px] hover:text-primary"></i>
            </div>
            <div className="">
              <Link to="/room-detail">
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

export default Room;
