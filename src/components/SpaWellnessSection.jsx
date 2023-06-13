import React from "react";
import FiveStar from "./FiveStar";

const SpaWellnessSection = ({ refs }) => {
  return (
    <section ref={refs} className="spa-and-wellness bg-bgSoft w-full ">
      <div className="mainContainer flex flex-col gap-3 sm:px-14 md:px-10 lg:px-0 px-3">
        <FiveStar />
        <h6 className="subtitle mt-1 text-base text-primary tracking-[6px] font-barlowCondensed">
          SO MANY WAYS TO UNWIND
        </h6>
        <h2 className=" main-title font-gilda text-white font-medium text-[46px] leading-[57.5px] mb-5">
          Spa & Wellness
        </h2>
        <p className="para-1 text-secondary leading-[26.3px] mb-5">
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent
          volutpat nibh ac sodales sodales. Nunc tincidunt erat sed nisi
          faucibus, eget sagittis libero imperdiet. Nunc risus magna, imperdiet
          gravida ultricies in, aliquam a tortor. Vestibulum tristique posuere
          magna, quis elementum neque luctus non. Aenean sed arcu efficitur,
          commodo justo ut, accumsan massa. Vivamus ac risus in felis imperdiet
          mollis id sit amet odio. Vestibulum dignissim finibus diam a commodo.
          Nulla quis miss dururana egestas semper. In sit amet nunc sed felis
          lacinia tempus sed quis ipsum.
        </p>

        <div className=" reservations flex items-center gap-3">
          <div className="icon">
            <span className="flaticon-call text-primary text-[38px]"></span>
          </div>
          <div className="">
            <p className="text-secondary mb-1">Reservations</p>
            <p className="phone-number text-primary text-2xl ">855 100 444</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaWellnessSection;
