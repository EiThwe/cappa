import React, { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi2";
import { accordionData } from "../utils/data";

const FAQAccordion = ({ accData }) => {
  const [data, setData] = useState(accData);

  const toggleAccordion = (id) => {
    setData(
      data.map((dt) => {
        if (dt.id == id) {
          dt.isOpen = !dt.isOpen;
        } else {
          dt.isOpen = false;
        }
        return dt;
      })
    );
  };

  return (
    <ul className="accordion-box w-full">
      {data.map(({ title, id, description, isOpen, height }) => (
        <li className="w-full h-auto bg-[#2B2B2B] mb-5 last:mb-0">
          <div
            onClick={() => toggleAccordion(id)}
            className={`accordion-btn cursor-pointer w-full flex items-center justify-between  py-6 px-10`}
          >
            <h5
              className={`${
                isOpen ? "text-primary" : "text-white"
              } text-[20px] leading-[27px] font-gilda`}
            >
              {title}
            </h5>
            {isOpen ? (
              <HiMinus className="text-xl text-primary" />
            ) : (
              <HiPlus className="text-xl text-primary" />
            )}
          </div>

          <div
            className={`text-secondary text-base px-10 transition-all duration-300 ease-in-out 
          ${isOpen ? height : "h-0"} overflow-hidden`}
          >
            {description}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FAQAccordion;
