import React from "react";
import star from "../assets/icons/star.svg";

const FiveStar = ({ size, gap }) => {
  const arr = [0, 1, 2, 3, 4];
  return (
    <div className={`flex items-center ${gap ? gap : "gap-[6px]"} `}>
      {arr.map((i) => (
        <div className={`${size ? size : "w-[15px]"}`}>
          <img src={star} alt="" className="w-full" />
        </div>
      ))}
    </div>
  );
};
export default FiveStar;
