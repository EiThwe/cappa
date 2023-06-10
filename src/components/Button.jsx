import React, { useState } from "react";

const Button = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="w-[140px] h-[45px] bg-transparent group relative overflow-hidden"
    >
      <div
        className={`absolute top-0 left-0 w-full bg-bgSoft h-full z-10 button ${
          isHover
            ? "animate__animated animate__slideInLeft"
            : "animate__animated animate__slideOutRight"
        } `}
      />
      <div className={`absolute top-0 left-0 w-full bg-primary h-full `} />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center  z-20">
        <h6 className=" font-barlowCondensed tracking-[3px] text-base text-white">
          LEARN MORE
        </h6>
      </div>
    </button>
  );
};

export default Button;
