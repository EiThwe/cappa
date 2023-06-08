import React, { useEffect } from "react";

import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { navbarData } from "../utils/data";

const Navbar = () => {
  useEffect(() => {
    const scrollFunc = () => {
      console.log(window.scrollY);
    };

    window.addEventListener("scroll", scrollFunc);

    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[100px]">
        <div className="max-w-[1100px] h-full mx-auto flex justify-between items-center px-[10px]">
          <img src={Logo} alt="logo" className="w-[160px]" />

          <div className="md:flex items-center gap-6 hidden">
            {navbarData.map(({ path, name }, index) => (
              <Link key={index} to={path}>
                <h6
                  className="text-base uppercase font-barlowCondensed  text-white tracking-[3px] cursor-pointer
                 hover:text-primary transition-all duration-300 ease-in-out"
                >
                  {name}
                </h6>
              </Link>
            ))}
          </div>

          <button className="md:hidden block">
            
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
