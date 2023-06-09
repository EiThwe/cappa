import React from "react";
import "./Room.css";
const Room = ({ id, name, price, time, img }) => {
  console.log(id);
  return (
    <div className="">
      {/* background image  */}
      <div className="backgroundImg w-[95%] relative  overflow-hidden   ">
        <img
          src={img}
          className="w-full h-full hover:bg-black   hover:opacity-60  hover:scale-125 transition-all object-cover duration-1000"
          alt=""
        />
        {/* book badge  */}
        <div className="border-[0.5px] absolute top-5 right-5 text-white badgeBook px-1 py-1">
          <p className=" uppercase tracking-[2px]">BOOK</p>
        </div>
        {/* text  */}
        <div className="absolute flex flex-col gap-3 bottom-5 left-[50%] translate-x-[-50%] text-white  w-[90%]">
          <h6 className="text-[15px] uppercase tracking-[4px] font-semibold">
            {price}$ / {time}
          </h6>
          <h2 className="text-[27px] font-gilda font-medium">{name}</h2>
          <div className="underLine "></div>
          {/* icon section  */}
          <div className="hideSection flex items-center justify-between w-full ">
            <div className="icongroup flex gap-3 items-center  ">
              <i class="flaticon-bed"></i>

              <i class="flaticon-bath"></i>
              <i class="flaticon-breakfast"></i>
              <i class="flaticon-towel"></i>
            </div>
            <div className="">
              <h3 className="text-[15px] uppercase tracking-[3px]">Detials</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
