import React from "react";
import RestaurantMenuCarouselContainer from "./RestaurantMenuCarouselContainer";

const RestaurantMenu = () => {
  return (
    <section className="restaurant-menu w-full bg-bgDark">
      <div className="mainContainer sm:px-14 md:px-10 lg:px-0 px-3">
        <div className="row w-full flex flex-col items-center px-8">
          <div className="heading text-center">
            <h6 className="subtitle text-base text-primary tracking-[6px] font-barlowCondensed mb-3">
              LUXURY HOTEL
            </h6>
            <h2 className=" main-title font-gilda text-primary font-medium text-[46px] leading-[57.5px] mb-10">
              Restaurant Menu
            </h2>
          </div>
          <RestaurantMenuCarouselContainer/>
        </div>
      </div>
    </section>
  );
};

export default RestaurantMenu;
