import React from "react";

const MenuCard = ({ data }) => {
  return (
    <div className="menu-card row grid grid-cols-2 w-full gap-5">
      {data?.map(({ name, price, description }, i) => (
        <div
          key={i}
          className={`w-full flex ${
            i % 2 == 1 ? "justify-end" : "justify-start"
          }`}
        >
          <div className="w-[80%] flex flex-col items-start">
            <div className="flex justify-between w-full">
              <h6 className="menu-name font-gilda text-[20px] leading-[40px] text-primary">
                {name}
              </h6>
              <h6 className="price font-gilda text-[20px] leading-[40px] text-white ">
                {price}$
              </h6>
            </div>
            <hr className="border border-dashed border-primary mb-2 w-full" />
            <p className="description text-base text-secondary">
              {description}
            </p>
          </div>
        </div>
      ))}
      {/* <div className="h-20 bg-green-300"></div> */}
    </div>
  );
};

export default MenuCard;
