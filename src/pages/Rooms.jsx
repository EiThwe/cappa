import React from "react";
import Room from "../components/Room";
import Room2 from "../components/Room2";

const Rooms = () => {
  const Rooms = [
    { id: 1, name: "Junior Suite", price: 150, time: "night","img" : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/1.jpg" },
    { id: 2, name: "Family Room", price: 200, time: "night","img" : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/2.jpg" },
    { id: 3, name: "Double Room", price: 250, time: "night","img" : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/3.jpg" },
    { id: 4, name: "Deluxe Room", price: 300, time: "night" ,"img" : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/4.jpg"},
    { id: 5, name: "Superior Room", price: 150, time: "night","img" : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/7.jpg" },
  ];
  const upperRooms = Rooms?.slice(0, 3);
  const lowerRooms = Rooms?.slice(3, 5);
  console.log(upperRooms);
  console.log(lowerRooms);

  return (
    <>
      <div className="bg-bgDark">
        <div className="mainContainer ">
          {/* title section */}
          <div className="">
            <h6 className="text-primary font-barlowCondensed text-[16px] tracking-[4px]  mb-4">
              THE CAPPA LUXURY HOTEL
            </h6>
            <h2 className="text-white font-gilda text-[46px]  mb-6">
              Rooms & Suites
            </h2>
          </div>
          {/* Room card section  */}
          <div className="upper flex justify-center items-center mb-5">
            {upperRooms?.map((room, index) => {
              return <Room key={index} {...room} />;
            })}
          </div>
          <div className="lower flex justify-center items-center">
          {lowerRooms?.map((room, index) => {
              return <Room2 key={index} {...room} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
