import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollBtn from "./ScrollBtn";

const Layout = ({ children }) => {
  const [showScrollNavbar, setShowScrollNavbar] = useState(false);
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
          scrollHeight > 400 ? "translate-y-0" : "-translate-y-[300%]"
        } transition-all duration-500 ease-in-out fixed top-0 w-full z-10`}
      >
        <Navbar scrollNavbar />
      </div>

      {children}

      <Footer />
      <div
        id="scroll-btn"
        className={`${
          scrollHeight > 400 ? "translate-y-0" : "translate-y-[300%]"
        } transition-all
       duration-300 ease-in-out fixed bottom-5 right-5`}
      >
        <ScrollBtn scrollHeight={scrollHeight} />
      </div>
    </div>
  );
};

export default Layout;
