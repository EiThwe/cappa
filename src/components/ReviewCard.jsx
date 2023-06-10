import React from "react";
import FiveStar from "./FiveStar";

const ReviewCard = ({ name, image }) => {
  return (
    <div className="py-5 relative">
      <p className="mb-5">
        Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve
        ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel
        inilla duiman at finibus viverra neca the sene on satien the miss drana
        inc fermen norttito sit space, mus nellentesque habitan.
      </p>
      <div className="flex gap-5">
        <div className="img-container w-[80px] h-[80px] rounded-full overflow-hidden">
          <img src={image} alt={name} />
        </div>
        <div className="text-card flex flex-col justify-center items-start py-1">
          <div className="mb-3">
            <FiveStar size="w-[12px]" />
          </div>
          <p className="font-barlowCondensed tracking-[3px] leading-[16px] text-base mb-2">
            {name}
          </p>
          <p className="text-xs">Guest Review</p>
        </div>
      </div>
      <div className="absolute bottom-10 right-0 w-[70px] h-[70px]">
        <img
          src="https://duruthemes.com/demo/html/cappa/demo2-dark/img/quot.png"
          alt=""
          className="w-full h-full opacity-10"
        />
      </div>
    </div>
  );
};

export default ReviewCard;
