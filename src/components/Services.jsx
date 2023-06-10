import React from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "../utils/data";

const Services = () => {
  return (
    <div className="w-full bg-bgSoft">
      <div className="mainContainer sm:px-14 md:px-10 lg:px-0 px-3">
        <div className="flex flex-col w-full">
          {servicesData.map((data, index) => (
            <ServiceCard key={index} reverse={index % 2} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
