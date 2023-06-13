import React from "react";

const SubHero = ({ tags, title }) => {
  return (
    <div className="w-full mx-auto  bg-black bg-opacity-50">
      <div
        className="max-w-[1100px] py-[150px] mx-auto  sm:px-14 md:px-10 lg:px-6 px-3 flex flex-col 
      sm:items-start items-center sm:gap-0 gap-4"
      >
        <div className="flex gap-2">
          {tags.length == 1 ? (
            <h6 className="font-barlowCondensed sm:text-[17px] text-[15px] tracking-[6px] uppercase text-white">
              {tags[0]}
            </h6>
          ) : (
            tags.map((text, index) => (
              <>
                <h6
                  key={index}
                  className="font-barlowCondensed sm:text-[17px] text-[15px] tracking-[6px] uppercase text-white first:text-primary"
                >
                  {text}
                </h6>

                {!(index % 2) && (
                  <h6
                    key={index}
                    className="font-barlowCondensed sm:text-[17px] text-[15px] tracking-[6px] uppercase text-white first:text-primary"
                  >
                    /
                  </h6>
                )}
              </>
            ))
          )}
        </div>
        <h1 className="md:text-[65px] sm:text-start text-center sm:text-[655x] text-[45px] font-gilda text-white">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default SubHero;
