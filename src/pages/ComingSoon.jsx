import React from "react";
import "./ComingSoon.css";
import {MdArrowBack} from "react-icons/md"
import { Link } from "react-router-dom";
// import "./App.css";

const ComingSoon = () => {
  return (
    <>
      {/* first bg  */}
      <div className=" background  ">
        {/* second opacity bg */}
        <div className="blackbackground "></div>
        {/* main div  */}
        <div className=" w-[70%]   absolute top-[12%] left-[15%] ">
          {/* coming Soon text  */}
          <div className=" flex  flex-col  items-center mb-16 pt-5 ">
            <h2 className="text-white font-gilda text-[40px]  mb-3 ">
              Coming Soon!
            </h2>
            <h6 className="text-white font-barlowCondensedtracking-[4px] text-[16px] mb-2">
              OUR WEBSITE IS UNDER CONSTRUCTION
            </h6>
          </div>
          {/* calander div  */}
          <div className="calanderDiv w-[70%] text-white mx-auto  flex justify-around mb-16  ">
            <div className="Day  border-[0.5px] text-secondary">
              <h2 className="text-[40px] font-gilda  px-12 py-12 ">Text </h2>
            </div>
            <div className="Hour  border-[0.5px] text-secondary">
              <h2 className="text-[40px] font-gilda  px-12 py-12 ">Text </h2>
            </div>
            <div className="Minutes  border-[0.5px] text-secondary">
              <h2 className="text-[40px] font-gilda  px-12 py-12 ">Text </h2>
            </div>
            <div className="Second  border-[0.5px] text-secondary">
              <h2 className="text-[40px] font-gilda  px-12 py-12 ">Text </h2>
            </div>
          </div>
          {/* sign up form  */}
          <div className="flex flex-col items-center">
            <p className="text-white mb-8">Sign up for our latest news & articles.</p>
            <form action="" className="border-[0.5px] border-primary w-[50%] pl-5 pr-2  text-white flex justify-center items-center gap-7 mb-20">
              {/* <h6 className=" whitespace-nowrap"></h6> */}
              <input type="email" placeholder="Email Address" className=" placeholder:text-white bg-transparent py-4 w-full focus-within:outline-none " />
              <button className="bg-primary uppercase  px-5 py-2 hover:bg-bgSoft ease-in-out duration-300 cursor-pointer ">Subscribe</button>
            </form>
             {/* Back Button  */}
         <Link to="/">
         <button className="uppercase font-barlowCondensed text-[16px] tracking-[4px] text-white flex items-center gap-2 hover:gap-7 ease-in-out duration-500 hover:text-primary cursor-pointer "><MdArrowBack /><span>Back To Home</span></button>
         </Link>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
