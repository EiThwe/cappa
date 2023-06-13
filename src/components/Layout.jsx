import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollBtn from "./ScrollBtn";

const Layout = ({ children }) => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const scrollFunc = () => {
      setScrollHeight(parseInt(window.scrollY));
    };

    window.addEventListener("scroll", scrollFunc);

    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  return (
    <div className="w-full  flex flex-col">
      <div className="w-full h-screen homeBg fixed -z-10 "></div>
      <Navbar />
      <div
        id="scroll-navbar"
        className={`${
          scrollHeight > 100 ? "translate-y-0" : "-translate-y-[300%]"
        } transition-all duration-500 ease-in-out fixed top-0 w-full z-10`}
      >
        <Navbar scrollNavbar />
      </div>

      {children}

      <Footer />

      <ScrollBtn scrollHeight={scrollHeight} />
    </div>
  );
};

export default Layout;
