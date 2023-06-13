import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import { navbarData } from "../utils/data";
import Logo from "../assets/logo.png";
import MenuButton from "../assets/icons/menu-button.svg";
import Dropdown from "./Dropdown";

const Navbar = ({ scrollNavbar }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className={!scrollNavbar && " absolute top-0 w-full"}>
      <div
        className={`w-full z-10 ${
          scrollNavbar ? " h-[90px] bg-bgDark" : "h-[100px] bg-transparent"
        }`}
      >
        <div className="max-w-[1100px] h-full mx-auto flex justify-between items-center px-[20px]">
          <img src={Logo} alt="logo" className="w-[160px]" />

          <div
            id="nav-bar"
            className="md:flex items-center gap-6 hidden h-full"
          >
            {navbarData.map(({ path, name, subData }, index) => {
              const [isHover, setIsHover] = useState(false);

              return (
                <button
                  onClick={() => {
                    if (path) navigate(path);
                  }}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                  key={index}
                  className={`${
                    pathname == path
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  } h-full `}
                >
                  <div className="flex items-center gap-1">
                    <h6
                      className="text-base uppercase font-barlowCondensed  tracking-[3px] cursor-pointer
                  transition-all duration-300 ease-in-out"
                    >
                      {name}
                    </h6>

                    {subData && <i className="ti-angle-down text-[8px]"></i>}
                  </div>

                  {subData && isHover && (
                    <Dropdown
                      data={subData}
                      isHover={isHover}
                      setIsHover={setIsHover}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setShowNavbar(!showNavbar)}
            className="md:hidden block"
          >
            <img
              src={MenuButton}
              alt="burger-icon"
              className="w-[20px] text-white"
            />
          </button>
        </div>
      </div>

      <div
        id="responsive-navbar"
        className={`w-full  z-10 bg-bgDark px-[20px] flex md:hidden flex-col overflow-hidden transition-all 
        duration-300 ease-in-out overflow-y-scroll ${
          showNavbar ? "h-[385px] py-[30px]" : "h-0 "
        } `}
      >
        {navbarData.map(({ path, name, subData }, index) => {
          const [isHover, setIsHover] = useState(false);

          return (
            <button
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onClick={() => {
                if (path) navigate(path);
              }}
              key={index}
              className={`h-auto flex items-start flex-col justify-center ${
                pathname == path
                  ? "text-primary"
                  : "text-white "
              }`}
            >
              <div className="h-[55px] flex items-center gap-1">
                <h6
                  className={`text-base uppercase font-barlowCondensed   tracking-[3px] cursor-pointer
                    transition-all duration-300 ease-in-out `}
                >
                  {name}
                </h6>

                {subData && <i className="ti-angle-down text-[8px]"></i>}
              </div>
              {subData && isHover && (
                <div className="w-full ">
                  {subData.map(({ path, name }, index) => (
                    <button
                      onClick={() => navigate(path)}
                      key={index}
                      className="px-2 py-4 w-full flex justify-start border-b border-secondary border-opacity-10 text-white hover:text-primary
             transition-all duration-300 ease-in-out "
                    >
                      <h6 className="text-[16px]">{name}</h6>
                    </button>
                  ))}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
