import React, { useState } from "react";

const SocialBtn = ({ normal, primary }) => {
  return (
    <div className="relative cursor-pointer group">
      <img
        src={normal}
        alt="normal"
        className="w-[16px] transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0"
      />
      <img
        src={primary}
        alt="primary"
        className="absolute top-0 w-[16px] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
      />
    </div>
  );
};

export default SocialBtn;
