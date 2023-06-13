import React from "react";
import FiveStar from "./FiveStar";
import { amenitiesData, checkinData } from "../utils/data";
import Button from "./Button";

const JuniorSuiteSection = () => {
  return (
    <section className="restaurant-about w-full bg-bgSoft">
      <div className="mainContainer sm:px-14 md:px-10 lg:px-0 px-3">
        <div className="row w-full">
          <div className="flex flex-col gap-5 ">
            <FiveStar />
            <div className="heading">
              <h6 className="subtitle text-base text-primary tracking-[6px] font-barlowCondensed mb-3">
                LUXURY HOTEL
              </h6>
              <h2 className=" main-title font-gilda text-white font-medium text-[46px] leading-[57.5px] mb-2">
                Junior Suite
              </h2>
            </div>
            <div className="row flex lg:flex-row flex-col w-full">
              <div className="col flex flex-col gap-3 lg:w-[67%] w-full">
                <p className="para-1 text-base text-secondary leading-[26.3px] mb-4">
                  Hotel non lorem ac erat suscipit bibendum nulla facilisi.
                  Sedeuter nunc volutpat miss sapien vel conseyen turpeutionyer
                  masin libero sevenion vusetion viventa augue sit amet
                  hendrerit vestibulum. Duisteyerion venenatis lacus gravida
                  eros ut turpis interdum ornare.
                </p>
                <p className="para-2 text-base text-secondary leading-[26.3px] mb-4">
                  Interdum et malesu they adamale fames ac anteipsu pimsine
                  faucibus curabitur arcu site feugiat in tortor in, volutpat
                  sollicitudin libero. Hotel non lorem acer suscipit bibendum
                  vulla facilisi nedeuter nunc volutpa mollis sapien velet
                  conseyer turpeutionyer masin libero sempe mollis.
                </p>
                <div className="w-full mb-4 flex lg:flex-row flex-col">
                  <div className="check-in col lg:w-[50%] w-full lg:mb-0 mb-5">
                    <h4 className="small-heading font-gilda text-white text-[24px] leading-[30px] mb-5">
                      Check-in
                    </h4>
                    <ul className="flex flex-col gap-5">
                      {checkinData?.map(({ text }, i) => (
                        <li
                          className="flex flex-row items-center gap-4"
                          key={i}
                        >
                          <i className="ti-check text-primary text-xl"></i>
                          <p className="text-secondary text-base">{text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="check-out col lg:w-[50%] w-full">
                    <h4 className="small-heading font-gilda text-white text-[24px] leading-[30px] mb-5">
                      Check-out
                    </h4>
                    <ul className="flex flex-col gap-5">
                      {checkinData?.map(({ text }, i) => (
                        <li
                          className="flex flex-row items-center gap-4"
                          key={i}
                        >
                          <i className="ti-check text-primary text-xl"></i>
                          <p className="text-secondary text-base">{text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="check-in-instruct">
                  <h4 className="small-heading font-gilda text-white text-[24px] leading-[30px] mb-5">
                    Special check-in instructions
                  </h4>
                  <p className="text-secondary text-base mb-5">
                    Guests will receive an email 5 days before arrival with
                    check-in instructions; front desk staff will greet guests on
                    arrival For more details, please contact the property using
                    the information on the booking confirmation.
                  </p>
                </div>
                <div className="pets">
                  <h4 className="small-heading font-gilda text-white text-[24px] leading-[30px] mb-5">
                    Pets
                  </h4>
                  <p className="text-secondary text-base mb-5">
                    Pets not allowed
                  </p>
                </div>
                <div className="children-and-extra-beds">
                  <h4 className="small-heading font-gilda text-white text-[24px] leading-[30px] mb-5">
                    Children and extra beds
                  </h4>
                  <p className="text-secondary text-base mb-5">
                    Children are welcome Kids stay free! Children stay free when
                    using existing bedding; children may not be eligible for
                    complimentary breakfast Rollaway/extra beds are available
                    for $ 10 per day.
                  </p>
                </div>
                <div className="lg:mb-0 sm:mb-5 mb-10">
                  <Button />
                </div>
              </div>
              <div className="col lg:w-[33%] w-full">
                <div className="lg:ml-[100px] px-2">
                  <h4 className="small-heading font-gilda text-white text-[24px] leading-[30px] mb-5">
                    Amenities
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {amenitiesData?.map(({ icon, text }, i) => (
                      <li className="flex flex-row items-center gap-4" key={i}>
                        <div className="icon">
                          <span
                            className={`${icon} text-primary text-xl`}
                          ></span>
                        </div>
                        <div className="text text-secondary text-base">
                          {text}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JuniorSuiteSection;
