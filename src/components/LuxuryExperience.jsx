import React from "react";
import 'animate.css';

const LuxuryExperience = () => {
  return (
    <>
      <div className="bg-bgSoft     w-full">
        <div className="mainContainer  flex flex-col lg:flex-row  ">
          {/* text side */}
          <div className="  px-3 sm:px-16 lg:px-0 ">
            <div className="star mb-3">
              <i className="fi fi-ss-star text-starColor mr-2 "></i>
              <i className="fi fi-ss-star text-starColor mr-2 "></i>
              <i className="fi fi-ss-star text-starColor mr-2 "></i>
              <i className="fi fi-ss-star text-starColor mr-2 "></i>
              <i className="fi fi-ss-star text-starColor"></i>
            </div>
            <h6 className="text-primary font-barlowCondensed text-[16px] tracking-[4px]  mb-4">
              THE CAPPA LUXURY HOTEL
            </h6>
            <h2 className="text-white font-gilda text-[46px]  mb-6">
              Enjoy a Luxury Experience
            </h2>
            <p className="text-secondary leading-6 mb-1">
              Welcome to the best five-star deluxe hotel in New York. Hotel
              elementum sesue the aucan vestibulum aliquam justo in sapien
              rutrum volutpat. Donec in quis the pellentesque velit. Donec id
              velit ac arcu posuere blane.
            </p>
            <p className="text-secondary leading-6 mb-4">
              Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue
              the aucan ligula. Orci varius natoque penatibus et magnis dis
              parturient monte nascete ridiculus mus nellentesque habitant
              morbine.
            </p>
            <div className="reservationPhNo flex items-center mb-6 ">
              <div className="icon1 pr-5">
                <i className="fi fi-rr-phone-call text-primary text-[36px]"></i>
              </div>
              <div className="textmini">
                <p className="text-secondary">Reservation</p>
                <h3 className="text-primary text-[24px] ">855 100 4444</h3>
              </div>
            </div>
          </div>
          {/* images side  */}
          <div className="flex px-3 sm:px-16 lg:px-0 gap-5 ">
            <div className="One w-[45%] mt-auto pl-5 ">
              <img
                src="https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/8.jpg" className="w-full animate__animated animate__slideInUp h-[80%]"
                alt=""
              />
            </div>
            <div className="two w-[45%]  pl-5">
              <img
                src="https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/2.jpg" className="w-full animate__animated animate__slideInUp h-[80%]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LuxuryExperience;
