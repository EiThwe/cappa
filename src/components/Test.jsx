import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Test = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="w-full bg-bgDark">
      <div className="mainContainer">
        <OwlCarousel
          className="owl-theme  flex"
          loop={true}
          nav={true}
          autoPlay={false}
          margin={30}
          items={4}
          slideBy={2}
          dots={false}
        >
          {[1, 2, 3, 4, 5, 6].map((data, i) => (
            <div
              key={i}
              onClick={() => setActive(data)}
              className={`item restaurant-menu-item h-[60px] bg-transparent text-white flex justify-center items-center text-3xl `}
            >
              {data}
            </div>
          ))}
        </OwlCarousel>
      </div>

      <button id="btn" className="px-10 py-5 bg-red-300">
        Leeee
      </button>
    </div>
  );
};

export default Test;
