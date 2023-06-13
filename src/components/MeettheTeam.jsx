import React from "react";
import MeettheTeamCarousel from "./MeettheTeamCarousel";

const MeettheTeam = () => {
  
  return (
    <>
      <div className="bg-bgDark  w-full">
        <div className="mainContainer  ">
          {/* text side */}
          <div className="text px-4 sm:px-16">
            <h6 className="text-primary font-barlowCondensed text-[16px] tracking-[4px]  mb-4">
            PROFESSIONALS
            </h6>
            <h2 className="text-white font-gilda text-[46px]  mb-6">
            Meet The Team
            </h2>
          </div>
          <div className="Photo px-4 sm:px-16">
            <MeettheTeamCarousel/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeettheTeam;
