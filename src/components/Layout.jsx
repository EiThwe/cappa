import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="">
      <div className="w-full h-screen homeBg fixed  top-0"></div>
      <div className="w-full absolute top-0 left-0 h-screen overscroll-y-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
