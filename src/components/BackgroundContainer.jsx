import React from "react";

const BackgroundContainer = ({ image }) => {
  return (
    <div className="absolute top-0 left-0  w-full h-full  customFadeInAnimation">
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover opacity-50"
      />
    </div>
  );
};

export default BackgroundContainer;
