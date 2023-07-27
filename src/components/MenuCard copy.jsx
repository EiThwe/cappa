import React from "react";

const MenuCard = () => {
  return (
    <div className="menu-card row flex w-full">
      <div className="col w-[41.6%]">
        <div className="w-full flex flex-col gap-5">
          <div className="">
            <div className="flex justify-between">
              <h6 className="menu-name font-gilda text-[20px] leading-[40px] text-primary">
                Ceaser Salad
              </h6>
              <h6 className="price font-gilda text-[20px] leading-[40px] text-white ">
                47$
              </h6>
            </div>
            <hr className="border border-dashed border-primary mb-2" />
            <p className="description text-base text-secondary">
              Romaine lettuce, croutons, parmigiano, Ceaser dressing.
            </p>
          </div>
          
        </div>
      </div>
      <div className="col w-[41.6%] ml-[16.67%]">
        <div className="flex justify-between">
          <h6 className="menu-name text-[20px] leading-[40px] text-primary">
            Ceaser Salad
          </h6>
          <h6 className="price text-[20px] leading-[40px] text-white ">47$</h6>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
