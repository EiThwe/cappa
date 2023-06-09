import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import Upload from "../assets/icons/upload.svg";

const ScrollBtn = ({ scrollHeight }) => {
  const [height, setHeight] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(Math.floor((scrollHeight / height) * 100));
  }, [scrollHeight, height]);

  useEffect(() => {
    const updateWebsiteHeight = () => {
      const { body } = document;
      setHeight(parseInt(body.offsetHeight - window.innerHeight));
    };

    window.addEventListener("resize", updateWebsiteHeight);
    updateWebsiteHeight();

    return () => {
      window.removeEventListener("resize", updateWebsiteHeight);
    };
  }, []);

  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="scroll-btn"
      onClick={handleOnClick}
      className={`${
        scrollHeight > 100 ? "translate-y-0" : "translate-y-[300%]"
      } transition-all
   duration-300 ease-in-out fixed sm:bottom-5 sm:right-5 bottom-2 right-2 w-[45px] h-[45px] z-[1000] `}
    >
      <CircularProgressbar
        value={percentage}
        strokeWidth={3}
        styles={{
          path: {
            stroke: `#AA8453`,
          },
          trail: {
            stroke: "gray",
          },
        }}
      />
      <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
        <img src={Upload} alt="upload" className="w-[14px]" />
      </div>
    </button>
  );
};

export default ScrollBtn;
