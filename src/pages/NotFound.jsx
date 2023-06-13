import React from "react";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import "./NotFound.css";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <div className="">
      {/* first bg  */}
      <div className=" not-found-bg ">
        <Navbar />
        {/* main div  */}
        <div
          className=" w-[90%]   absolute left-[50%] md:top-[54%] sm:top-[56%] lg:top-[50%] top-[70%] -translate-x-[50%] 
        -translate-y-[50%] "
        >
          {/* 404text  */}
          <div className=" flex  flex-col justify-center items-center">
            <h1 className="text-transparent fourOfour p-0 text-[200px] font-normal font-gilda mb-0 translate-y-10">
              404
            </h1>
            <h4 className="text-white font-gilda text-[36px] lg:text-[46px]  mb-5">
              Not Found 404
            </h4>
            <p className="text-white text-[14px] lg:text-[15px] mb-5 text-center  ">
              The page you are looking for was moved, removed, renamed or never
              existed.
            </p>
          </div>

          {/* sign up form  */}
          <div className="flex flex-col items-center">
            <form
              action=""
              className="border-[0.5px] border-primary w-full lg:w-[50%] pl-5 pr-2  text-white flex justify-center items-center gap-7 mb-20"
            >
              <input
                type="email"
                placeholder="Search"
                className=" placeholder:text-white bg-transparent py-4 w-full focus-within:outline-none "
              />
              <button className="bg-primary uppercase  px-5 py-2 hover:bg-bgSoft ease-in-out duration-300 cursor-pointer ">
                search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
