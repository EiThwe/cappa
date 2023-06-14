import React from "react";

const NewsOne = () => {
  const Rooms = [
    {
      id: 1,
      name: "Historic restaurant renovated",
      month: "Dec",
      day: "02",
      category: "restaurant",
      image: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/news/1.jpg",
    },
    {
      id: 2,
      name: "Benefits of Spa Treatments",
      month: "Dec",
      day: "04",
      category: "spa",
      image: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/news/2.jpg",
    },
    {
      id: 3,
      name: "Hotel Bathroom Collections",
      month: "Dec",
      day: "06",
      category: "bathrooms",
      image: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/news/3.jpg",
    },
    {
      id: 4,
      name: "Weight Loss with Fitness Health Club",
      month: "Dec",
      day: "08",
      category: "health",
      image: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/news/4.jpg",
    },
    {
      id: 5,
      name: "Retro Lighting Design in The Hotels",
      month: "Dec",
      day: "08",
      category: "design",
      image: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/news/6.jpg",
    },
    {
      id: 6,
      name: "Benefits of Swimming for Your Health",
      month: "Dec",
      day: "08",
      category: "health",
      image: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/news/5.jpg",
    },
  ];
  return (
    <>
      <div className="">
        <div className="w-full">
          <div className=" flex flex-wrap justify-center items-center gap-5">
            {Rooms?.map((room, index) => {
              return (
                <div className="relative  pb-32">
                  <div className=" group     ">
                    {/* image section  */}
                    <div className="bgImage group w-80 overflow-hidden ">
                      <img
                        src={room?.image}
                        className="w-full h-full group-hover:bg-black   group-hover:opacity-60 group-hover:scale-125 transition-all object-cover duration-1000 "
                        alt=""
                      />
                    </div>
                    {/* time section block  */}
                    <div className="border-[0.5px] absolute top-5 left-5 text-white  px-1 py-2">
                      <p className=" uppercase text-[12px] tracking-[2px] mb-1">
                        {room?.month}
                      </p>
                      <h6 className=" uppercase text-[24px] tracking-[2px]">
                        {room?.day}
                      </h6>
                    </div>
                    {/* text section  */}
                    <div className=" bg-bgCoffee   w-[91%] h-[25%] absolute left-4  top-2/3 group-hover:top-80 transition-all duration-500 z-50 py-2 px-5">
                      <h6 className="text-primary font-barlowCondensed text-[16px] tracking-[4px] py-2 uppercase ">
                        {room?.category}
                      </h6>
                      <h2 className="text-white font-gilda text-[20px]  mb-6">
                        {room?.name}
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsOne;
