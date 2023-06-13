import React from "react";
import CardCarousel from "./CardCarousel";

const ExtraServices = () => {
  return (
    <section className="pricing bg-bgSoft w-full ">
      <div className="mainContainer sm:px-14 md:px-10 lg:px-0 px-3">
        <div className=" row w-full flex md:flex-row md:gap-8 flex-col gap-10 ">
          <div className=" col md:w-[32%] w-full h-full ">
            <h6 className="subtitle mb-1 text-base text-primary tracking-[6px] font-barlowCondensed">
              BEST PRICES
            </h6>
            <h2 className=" main-title font-gilda text-white font-medium text-[46px] leading-[57.5px] mb-5">
              Extra Services
            </h2>
            <p className="para-1 text-secondary leading-[26.3px] mb-5">
              The best prices for your relaxing vacation. The utanislen quam
              nestibulum ac quame odion elementum sceisue the aucan.
            </p>
            <p className="para-2 text-secondary leading-[26.3px] mb-5">
              Orci varius natoque penatibus et magnis disney parturient monte
              nascete ridiculus mus nellen etesque habitant morbine.
            </p>
            <div className=" reservations flex items-center gap-3">
              <div className="icon">
                <span className="flaticon-call text-primary text-[38px]"></span>
              </div>
              <div className="text">
                <p className="text-secondary mb-1">For Information</p>
                <p className="phone-number text-primary text-2xl ">
                  855 100 444
                </p>
              </div>
            </div>
          </div>
          <div className="col md:w-[68%] w-full">
            <CardCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraServices;
