import React from "react";
import NewsCarousel from "./NewsCarousel";

const OurNews = () => {
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
      name: "Benefits fof Swimming for Your Health",
      month: "Dec",
      day: "08",
      category: "health",
      image: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/news/5.jpg",
    },
  ];
  return (
    <>
      <div className=" bg-bgDark">
        <div className="mainContainer">
          <div className="text px-4 sm:px-16 lg:px-10">
            <h6 className="text-primary font-barlowCondensed text-[16px] tracking-[4px]  mb-4">
              HOTEL BLOG
            </h6>
            <h2 className="text-white font-gilda text-[46px] mb-6 ">
              Our News
            </h2>
          </div>
          {/* carousel  */}
          <div className="px-4 sm:px-16  lg:px-10">
          <NewsCarousel Rooms={Rooms} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurNews;
