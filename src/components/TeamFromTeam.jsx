import React from "react";

const TeamFromTeam = () => {
  const teamMembers = [
    {
      name: "Valentina Karla",
      position: "General Manager",
      img: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/4.jpg",
      email: "valentina@hotel.com",
    },
    {
      name: "Micheal White",
      position: "Guest Service Department",
      img: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/1.jpg",
      email: "micheal@hotel.com",
    },
    {
      name: "Olivia Martin",
      position: "Reservations Manager",
      img: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/2.jpg",
      email: "olivia@hotel.com",
    },
    {
      name: "mariana Dana",
      position: "F&B Manager",
      img: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/5.jpg",
      email: "mariana@hotel.com",
    },
    {
      name: "Enrico Brown",
      position: "Head Chef",
      img: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/3.jpg",
      email: "enrico@hotel.com",
    },
    {
      name: "Victoria Dan",
      position: "Meetings and Events Manager",
      img: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/6.jpg",
      email: "victoria@hotel.com",
    },
  ];
  return (
    <>
      <div className="bg-bgDark  w-full">
        <div className="mainContainer  ">
          <div className="Photo px-4 sm:px-16 flex flex-wrap justify-center items-center gap-5">
            {teamMembers?.map((member, index) => {
              return (
                <div
                  key={index}
                  className="card group  bg-bgSoft h-[20%] overflow-hidden group-hover:translate-y-80 "
                >
                  <div key={index} className="flex w-80   ">
                    <img src={member?.img} className="w-full" alt="" />
                  </div>
                  <div className="">
                    {/* first div  */}
                    <div className="text  py-10 ">
                      <div className="text-center  ">
                        <h6 className="text-white font-gilda text-[20px] mb-2 ">
                          {member?.name}
                        </h6>
                        <p className="text-secondary ">{member?.position}</p>
                      </div>
                      {/* second div  */}
                      <div className=" bg-bgSoft w-80 text-center absolute  h-20 group-hover:translate-y-[-75%] translate-y-0 -z-20 duration-500  group-hover:z-30 cursor-pointer ">
                        <div className="flex justify-center  items-center gap-5 text-primary  pt-3  pb-2  ">
                          <a href="">
                            <i className="ti-instagram hover:text-white duration-200 transition-all"></i>
                          </a>
                          <a href="">
                            <i className="ti-twitter hover:text-white duration-200 transition-all"></i>
                          </a>
                          <a href="">
                            <i className="ti-facebook hover:text-white duration-200 transition-all"></i>
                          </a>
                          <a href="">
                            <i className="ti-pinterest hover:text-white duration-200 transition-all"></i>
                          </a>
                        </div>
                        <p className="text-secondary ">{member?.email}</p>
                      </div>
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

export default TeamFromTeam;
