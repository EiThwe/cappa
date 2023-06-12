import React, { useState, useEffect } from "react";
import "./ComingSoon.css";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
// import "./App.css";

const ComingSoon = () => {
  const [timeRemaining, setTimeRemaining] = useState(null);

  useEffect(() => {
    // Set the date and time for the countdown
    const countDownDate = new Date("2023-10-10").getTime();

    // Update the countdown every second
    const countdownInterval = setInterval(() => {
      // Get the current date and time
      const now = new Date().getTime();

      // Calculate the time remaining
      const remaining = countDownDate - now;

      // Check if the countdown has ended
      if (remaining < 0) {
        clearInterval(countdownInterval);
        setTimeRemaining("Coming soon!");
      } else {
        // Calculate the days, hours, minutes, and seconds
        const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (remaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

        // Update the remaining time state
        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <>
      <div>
        {/* first bg  */}
        <div className=" coming-soon-bg   ">
          {/* main div  */}
          <div className="  text-center py-16 ">
            {/* coming Soon text  */}
            <div className=" flex  flex-col  items-center mb-16 pt-6 md:pt-10 lg:pt-20 ">
              <h2 className="text-white font-gilda text-[40px]  mb-3 ">
                Coming Soon!
              </h2>
              <h6 className="text-secondary font-barlowCondensedtracking-[3px] text-[15px]">
                OUR WEBSITE IS UNDER CONSTRUCTION
              </h6>
            </div>
            {/* calander div  */}
            <div className="calanderDiv w-full lg:w-[70%] text-white mx-auto gap-5  flex  flex-wrap md:flex-row md:flex-nowrap justify-center mb-16  ">
              <div className="Day  border-[0.5px] border-secondary text-white w-44 h-44 sm:w-72 md:w-44 py-10 text-center">
                <h2 className="text-[40px] font-gilda   ">
                  {" "}
                  {timeRemaining?.days}{" "}
                </h2>
                <p className="text-[20px] font-barlowCondensed uppercase text-center">
                  Days
                </p>
              </div>
              <div className="Hour  border-[0.5px] border-secondary  text-white w-44 h-44 py-10 sm:w-72 md:w-44 text-center">
                <h2 className="text-[40px] font-gilda   ">
                  {timeRemaining?.hours}{" "}
                </h2>
                <p className="text-[20px] font-barlowCondensed uppercase text-center">
                  Hours
                </p>
              </div>
              <div className="Minutes  border-[0.5px] border-secondary  text-white w-44 h-44 py-10 sm:w-72 md:w-44 text-center">
                <h2 className="text-[40px] font-gilda   ">
                  {timeRemaining?.minutes}{" "}
                </h2>
                <p className="text-[20px] font-barlowCondensed uppercase text-center">
                  minutes
                </p>
              </div>
              <div className="Second  border-[0.5px] border-secondary  text-white w-44 h-44 py-10 sm:w-72 md:w-44 text-center">
                <h2 className="text-[40px] font-gilda   ">
                  {timeRemaining?.seconds}{" "}
                </h2>
                <p className="text-[20px] font-barlowCondensed uppercase text-center">
                  seconds
                </p>
              </div>
            </div>
            {/* sign up form  */}
            <div className="flex flex-col items-center z-1">
              <p className="text-white mb-8">
                Sign up for our latest news & articles.
              </p>
              <form
                action=""
                className="border-[0.5px] border-primary w-[90%] lg:w-[40%] md:w-[50%] pl-5 pr-2  text-white flex justify-center items-center gap-7 mb-20"
              >
                <input
                  type="email"
                  placeholder="Email Address"
                  className=" placeholder:text-white bg-transparent py-4 w-full focus-within:outline-none "
                />
                <button className="bg-primary uppercase  px-5 py-2 hover:bg-bgSoft ease-in-out duration-300 cursor-pointer ">
                  Subscribe
                </button>
              </form>

              {/* Back Button  */}
              <Link to="/">
                <button className="uppercase font-barlowCondensed text-[15px] tracking-[3px] text-white flex items-center gap-2 hover:gap-7 ease-in-out duration-500 hover:text-primary cursor-pointer">
                  <MdArrowBack />
                  <span>Back To Home</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
