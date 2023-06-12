import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { navbarData } from "../utils/data";
import Logo from "../assets/logo.png";
import MenuButton from "../assets/icons/menu-button.svg";

const Navbar = ({ scrollNavbar }) => {
  const { pathname } = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className={!scrollNavbar ? " absolute top-0 w-full" : ""}>
      <div
        className={`w-full z-10 ${
          scrollNavbar ? " h-[90px] bg-bgDark" : "h-[100px] bg-transparent"
        }`}
      >
        <div className="max-w-[1100px] h-full mx-auto flex justify-between items-center px-[20px]">
          <img src={Logo} alt="logo" className="w-[160px]" />

          <div id="nav-bar" className="md:flex items-center gap-6 hidden">
            {navbarData.map(({ path, name }, index) => (
              <Link key={index} to={path}>
                <h6
                  className={`text-base uppercase font-barlowCondensed  tracking-[3px] cursor-pointer
                transition-all duration-300 ease-in-out ${
                  pathname == path
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }`}
                >
                  {name}
                </h6>
              </Link>
            ))}
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
        className={`w-full  z-10 bg-bgDark px-[20px] flex md:hidden flex-col overflow-hidden transition-all duration-300 ease-in-out ${
          showNavbar ? "h-[385px] py-[30px]" : "h-0 "
        } `}
      >
        {navbarData.map(({ path, name }, index) => (
          <Link key={index} to={path} className="h-[55px] flex items-center">
            <h6
              className={`text-base uppercase font-barlowCondensed  text-white tracking-[3px] cursor-pointer
                 hover:text-primary transition-all duration-300 ease-in-out ${
                   pathname == path
                     ? "text-primary"
                     : "text-white hover:text-primary"
                 }`}
            >
              {name}
            </h6>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
