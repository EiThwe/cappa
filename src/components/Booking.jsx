import React from 'react'

const Booking = () => {
  return (
    <>
      <div className="transparentBG bg-transparent">
        {/* Text section  */}
        <div className=" textsection  px-3 sm:px-16 lg:px-0 ">
            <div className="star mb-3">
              <i className="fi fi-ss-star text-starColor mr-2 "></i>
              <i className="fi fi-ss-star text-starColor mr-2 "></i>
              <i className="fi fi-ss-star text-starColor mr-2 "></i>
              <i className="fi fi-ss-star text-starColor mr-2 "></i>
              <i className="fi fi-ss-star text-starColor"></i>
            </div>
            <h6 className="text-primary font-barlowCondensed text-[16px] tracking-[4px]  mb-4">
              THE CAPPA LUXURY HOTEL
            </h6>
            <h2 className="text-white font-gilda text-[46px]  mb-6">
              Enjoy a Luxury Experience
            </h2>
            <p className="text-secondary leading-6 mb-1">
              Welcome to the best five-star deluxe hotel in New York. Hotel
              elementum sesue the aucan vestibulum aliquam justo in sapien
              rutrum volutpat. Donec in quis the pellentesque velit. Donec id
              velit ac arcu posuere blane.
            </p>
            <p className="text-secondary leading-6 mb-4">
              Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue
              the aucan ligula. Orci varius natoque penatibus et magnis dis
              parturient monte nascete ridiculus mus nellentesque habitant
              morbine.
            </p>
            <div className="reservationPhNo flex items-center mb-6 ">
              <div className="icon1 pr-5">
                <i className="fi fi-rr-phone-call text-primary text-[36px]"></i>
              </div>
              <div className="textmini">
                <p className="text-secondary">Reservation</p>
                <h3 className="text-primary text-[24px] ">855 100 4444</h3>
              </div>
            </div>
          </div>
        {/* form section  */}
        <div className="formsection"></div>
      </div>
      <div className="bg-white h-[20%] "></div>
      
    </>
  )
}

export default Booking
