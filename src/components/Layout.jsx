import React, { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollBtn from "./ScrollBtn";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const [scrollHeight, setScrollHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  useEffect(() => {
    const scrollFunc = () => {
      setScrollHeight(parseInt(window.scrollY));
    };

    window.addEventListener("scroll", scrollFunc);

    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-bgSoft">
        <VscLoading size={60} className="text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full  flex flex-col">
      <div className="w-full h-screen homeBg fixed -z-10 "></div>
      <Navbar />
      <div
        id="scroll-navbar"
        className={`${
          scrollHeight > 100 ? "translate-y-0" : "-translate-y-[300%]"
        } transition-all duration-500 ease-in-out fixed top-0 w-full z-[900]`}
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
