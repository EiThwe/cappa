import React from "react";
import SelectboxforBooking from "./SelectboxforBooking";
import AutoplayBookingCarousel from "./AutoplayBookingCarousel";
import CalendarInputForm from "./CalendarInputForm";

const Booking = () => {
  return (
    <>
      <div className="bg-black bg-opacity-50">
        <div className="mainContainer lg:pb-0 px-4 sm:px-16 md:px-10 lg:px-10 lg:py-10 z-50">
          {/* <div className="blackbackground w-full h-screen "></div> */}
          <div className="transparentBG  flex flex-col md:flex-row sm:gap-10 md:gap-12 lg:gap-16 ">
            {/* Text section  */}
            <div className=" textsection md:min-w-[50%]   lg:pt-20 lg:pr-28 ">
              <div className="star mb-8">
                <i className="fi fi-ss-star text-starColor mr-2 "></i>
                <i className="fi fi-ss-star text-starColor mr-2 "></i>
                <i className="fi fi-ss-star text-starColor mr-2 "></i>
                <i className="fi fi-ss-star text-starColor mr-2 "></i>
                <i className="fi fi-ss-star text-starColor"></i>
              </div>

              <h6 className="text-white font-gilda text-[24px] mb-3 lg:mb-8 leading-snug">
                Each of our guest rooms feature a private bath, wi-fi, cable
                television and include full breakfast.
              </h6>

              <div className="reservationPhNo flex items-center mb-10 ">
                <div className="icon1 pr-5">
                  <span className="flaticon-call text-white text-[35px]"></span>
                </div>

                <div className="textmini ">
                  <p className="text-white">Reservation</p>
                  <h3 className="text-white text-[24px] ">855 100 4444</h3>
                </div>
              </div>
              {/* text extra mini  */}

              <div className="flex   items-center">
                <p className="text-white text-[12px] ">
                  <i className="ti-check  text-[12px] mr-2 "></i>Call us, it's
                  toll-free.
                </p>
              </div>
            </div>
            {/* form section  */}
            <div className="formsection md:min-w-[45%] bg-bgDark   lg:translate-y-16 ">
              <div className="innerForm px-10 py-10 ">
                <div className="text ">
                  <h6 className="text-primary font-barlowCondensed text-[16px] tracking-[4px] uppercase  mb-4">
                    Rooms & suites
                  </h6>
                  <h2 className="text-white font-gilda text-[27px] mb-3 ">
                    Hotel Booking Form
                  </h2>
                </div>
                <hr className="w-[90%]  text-secondary my-5" />
                <form action="" className="">
                  <div className="inputOne  mb-4  ">
                    {/* <input
                      type="date"
                      className="w-full py-6 px-5 bg-bgCoffee"
                      placeholder="Check in"
                    /> */}
                    <CalendarInputForm name="Check in " />
                  </div>
                  <div className="inputTwo mb-4">
                    <CalendarInputForm name="Check out " />
                  </div>
                  <div className="selectBox mb-5 flex flex-col md:flex-row  gap-5 justify-between">
                    <SelectboxforBooking name="Adult" />
                    <SelectboxforBooking name="Children" />
                  </div>
                  <button className="uppercase text-[15px] text-white w-full bg-primary py-6 tracking-[3px] font-barlowCondensed hover:bg-bgSoft duration-300 transition-all">
                    Check Availablitiy
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* white div  */}
        <div className="WhiteDiv bg-white">
          <div className=" mainContainer sponsers-carousel  sm:px-16 md:px-10 lg:px-10  py-2 px-2 lg:p-0 lg:py-5 lg:pr-[475px]">
            <AutoplayBookingCarousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
