import React from "react";
import star from "../assets/icons/star.svg";

const FiveStar = ({ size }) => {
  const arr = [0, 1, 2, 3, 4];
  return (
    <div className="flex items-center gap-[2px]">
      {arr.map((i) => (
        <div key={i} className={`${size ? size : "w-[17px]"}`}>
          <img src={star} alt="" className="w-full" />
        </div>
      ))}
    </div>
  );
};
export default FiveStar;
