import React from "react";
import FiveStar from "./FiveStar";
import { hoursData } from "../utils/data";

const RestaurantSection = ({ refs }) => {
  return (
    <section ref={refs} className="restaurant-about w-full bg-bgSoft">
      <div className="mainContainer sm:px-14 md:px-10 lg:px-0 px-3">
        <div className="row flex flex-col gap-5 w-full">
          <FiveStar />
          <div className="heading">
            <h6 className="subtitle text-primary tracking-[6px] font-barlowCondensed mb-3">
              AN EXPERIENCE FOR THE SENSES
            </h6>
            <h2 className=" main-title font-gilda text-white font-medium text-[46px] leading-[57.5px] mb-2">
              The Restaurant
            </h2>
          </div>
          <p className="text-base text-secondary leading-[26.3px] mb-4">
            Led by Chef de Micheal Martin, The Restaurant is celebrated for its
            excellent cuisine and unique ambience. The gorgeous dining room
            features three open studio kitchens, allowing you to enjoy the
            sights and sounds of the culinary artistry on display. The menu
            showcases both Asian and European influences, with a tempting
            selection of classic favorites and creative dishes for you to
            sample. Cheese connoisseurs will be drawn to the The Wine and Cheese
            Cellar, housed in five-meter-high glass walls, where our
            knowledgeable staff can introduce you to some of New York's greatest
            culinary treasures.
          </p>
          <div className="hours mb-4">
            <h4 className="small-heading font-gilda text-white text-[24px] leading-[30px] mb-5">
              Hours
            </h4>
            <ul className="flex flex-col gap-5">
              {hoursData?.map(({ text }, i) => (
                <li className="flex flex-row items-center gap-4" key={i}>
                  <i className="ti-time text-primary text-xl"></i>
                  <p className="text-secondary text-base">{text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="dress-code">
            <h4 className="small-heading font-gilda text-white text-[24px] leading-[30px] mb-5">
              Dress Code
            </h4>
            <p className="text-secondary text-base mb-5">
              Smart casual (no shorts, hats, or sandals permitted)
            </p>
          </div>
          <div className="dress-code">
            <h4 className="small-heading font-gilda text-white text-[24px] leading-[30px] mb-5">
              Terrace
            </h4>
            <p className="text-secondary text-base">Open for drinks only</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;
