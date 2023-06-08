import React, { useEffect } from "react";

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

  return <div className="w-full"></div>;
};

export default Navbar;
