import React, { useState } from "react";
import FiveStar from "./FiveStar";
import { IoCloseSharp, IoPlayOutline } from "react-icons/io5";

const PromotionalVideo = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <section className="vid-container w-full bg-black bg-opacity-30">
        <div className="mainContainer flex flex-col justify-center items-center text-white">
          <div className="mb-4">
            <FiveStar />
          </div>
          <h6 className="subtitle font-barlowCondensed tracking-[6px] leading-[26.3px] text-base mb-4 ">
            THE CAPPA LUXURY HOTEL
          </h6>
          <h2 className="main-title text-center font-gilda text-white font-medium text-[46px] leading-[57.5px] mb-4">
            Promotional Video
          </h2>
          <button
            onClick={() => setShowVideo(true)}
            className="play-btn w-[100px] h-[100px] rounded-full flex justify-center items-center border border-white group"
          >
            <IoPlayOutline className="text-[40px] text-primary group-hover:text-white transition-all duration-200 ease-in-out" />
          </button>
        </div>
      </section>
      {showVideo && (
        <div className="popup-vid-container w-full h-screen fixed top-0 z-10 bg-black bg-opacity-60 flex justify-center items-center">
          <div className=" youtube-popup w-[680px] h-[480px] p-2 relative">
            <iframe
              src="https://www.youtube.com/embed/7BGNAGahig8?autoplay=1"
              frameborder="0"
              className="w-full h-full"
            ></iframe>
            <button
              className="absolute -top-8 right-0 text-white"
              onClick={() => setShowVideo(false)}
            >
              <IoCloseSharp className="text-[25px]" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PromotionalVideo;
