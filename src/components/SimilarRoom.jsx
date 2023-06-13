import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Room from "./Room";

const SimilarRoom = () => {
  const Rooms = [
    {
      id: 1,
      name: "Junior Suite",
      price: 150,
      time: "night",
      img: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/1.jpg",
    },
    {
      id: 2,
      name: "Family Room",
      price: 200,
      time: "night",
      img: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/2.jpg",
    },
    {
      id: 3,
      name: "Double Room",
      price: 250,
      time: "night",
      img: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/3.jpg",
    },
    {
      id: 4,
      name: "Deluxe Room",
      price: 300,
      time: "night",
      img: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/6.jpg",
    },
    {
      id: 5,
      name: "Superior Room",
      price: 150,
      time: "night",
      img: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/8.jpg",
    },
    {
      id: 6,
      name: "Wellness Room",
      price: 400,
      time: "night",
      img: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/5.jpg",
    },
  ];
  const responsive = {
    0: {
      items: 1,
    },
    640: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  };
  return (
    <div className="bg-bgDark">
      <div className="mainContainer  ">
        {/* text side */}
        <div className="text px-4 sm:px-16">
          <h6 className="text-primary font-barlowCondensed text-[16px] tracking-[4px]  mb-4">
            Luxury Hotel
          </h6>
          <h2 className="text-white font-gilda text-[46px]  mb-6">
            Similar Rooms
          </h2>
        </div>
        {/* Carousel section  */}
        <div className="pl-4  sm:pl-16 sm:pr-12">
          <OwlCarousel
            className="owl-theme  flex"
            loop={true}
            autoPlay
            margin={30}
            items={2}
            slideBy={2}
            autoplaySpeed={1000}
            autoplayHoverPause={true}
            dots={true}
            responsive={responsive}
            dotsClass="owl-dots"
            dotClass="owl-dot"
          >
            {Rooms?.map((room, index) => {
              return <Room key={index} {...room} />;
            })}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default SimilarRoom;
