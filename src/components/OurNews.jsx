import React from 'react'

const OurNews = () => {
    const Rooms = [
        { id: 1, name : "Historic restaurant renovated",time : "Dec 02",category : "restaurant", image : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/news/1.jpg"},
        { id: 2, name : "Benefits of Spa Treatments",time : "Dec 04",category : "spa", image : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/news/2.jpg"},
        { id: 3, name : "Hotel Bathroom Collections",time : "Dec 06",category : "bathrooms", image : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/news/3.jpg"},
        { id: 4, name : "Weight Loss with Fitness Health Club",time : "Dec 08",category : "health", image : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/news/4.jpg"},
        { id: 5, name : "Retro Lighting Design in The Hotels",time : "Dec 08",category : "design", image : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/news/6.jpg"},
        { id: 6, name : "Benefits fof Swimming for Your Health",time : "Dec 08",category : "health", image : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/news/5.jpg"},
      ];
  return (
    <>
      <div className="mainBG bg-bgDark">
        {/* Text section  */}
      <div className="">
            <h6 className="text-primary font-barlowCondensed text-[16px] tracking-[4px]  mb-4">
             Hotel Blog
            </h6>
            <h2 className="text-white font-gilda text-[46px]  mb-6">
            Our News
            </h2>
          </div>
          {/* image section  */}
          <div className="">
            
          </div>
      </div>
    </>
  )
}

export default OurNews
