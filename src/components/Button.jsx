import React, { useState } from "react";

const Button = ({ width, children, normalBg, hoverBg, textHover }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${
        width ? width : "w-[140px]"
      } h-[45px] bg-transparent group relative overflow-hidden`}
    >
      <div
        className={`absolute top-0 left-0 w-full  h-full z-10 button ${
          isHover
            ? "animate__animated animate__slideInLeft"
            : "animate__animated animate__slideOutRight"
        } ${hoverBg ? hoverBg : "bg-bgSoft"}`}
      />
      <div
        className={`absolute top-0 left-0 w-full h-full ${
          normalBg ? normalBg : "bg-primary border-primary"
        } border`}
      />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center  z-20">
        <h6
          className={`font-barlowCondensed tracking-[3px] text-base text-white ${
            textHover ? "group-hover:text-black text-white" : "text-white"
          }`}
        >
          {children}
        </h6>
      </div>
    </button>
  );
};

export default Button;
