import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./MeettheTeamCarousel.css"

const MeettheTeamCarousel = () => {
    const teamMembers =[
        {name : "Valentina Karla", position : "General Manager", img : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/4.jpg",email : "valentina@hotel.com"},
        {name : "Micheal White", position : "Guest Service Department", img : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/1.jpg",email : "micheal@hotel.com"},
        {name : "Olivia Martin", position : "Reservations Manager", img : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/2.jpg",email : "olivia@hotel.com"},
        {name : "mariana Dana", position : "F&B Manager", img : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/5.jpg",email : "mariana@hotel.com"},
        {name : "Enrico Brown", position : "Head Chef", img : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/3.jpg",email : "enrico@hotel.com"},
        {name : "Victoria Dan", position : "Meetings and Events Manager", img : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/6.jpg",email : "victoria@hotel.com"},
    ]
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
    <>
         <OwlCarousel
       className="owl-theme flex"
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
        {teamMembers?.map((member, index) => {
          return (
            <div key={index} className="card  group bg-bgSoft h-[20%] overflow-hidden group-hover:translate-y-80 ">
              <div key={index} className="flex  ">
             <img src={member?.img} alt="" />
            </div>
           <div className="">
             {/* first div  */}
             <div className="text  py-10   ">
             <div className="text-center  ">
             <h6 className='text-white font-gilda text-[20px] mb-2 '>{member?.name}</h6>
              <p className='text-secondary '>{member?.position}</p>
             </div>
               {/* second div  */}
              <div className=" bg-bgSoft text-center absolute w-full h-full group-hover:translate-y-[-13%] translate-y-80 duration-300  ">
            <div className="flex justify-center  items-center gap-5 text-primary pt-3  pb-2  ">
              <a href=""><i className='ti-instagram hover:text-white duration-200 transition-all'></i></a>
              <a href=""><i className='ti-twitter hover:text-white duration-200 transition-all'></i></a>
              <a href=""><i className='ti-facebook hover:text-white duration-200 transition-all'></i></a>
              <a href=""><i className='ti-pinterest hover:text-white duration-200 transition-all'></i></a>
             </div>
              <p className='text-secondary '>{member?.email}</p>
            </div>
            </div>

           
           </div>
            </div>
            
          );
        })}
      </OwlCarousel>
    </>
  )
}

export default MeettheTeamCarousel
