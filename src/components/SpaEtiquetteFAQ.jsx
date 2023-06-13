import React from "react";
import FAQAccordion from "./FAQAccordion";
import { accordionData } from "../utils/data";

const SpaEtiquetteFAQ = () => {
  return (
    <section className="spa-etiquette-faq bg-bgDark w-full">
      <div className="mainContainer sm:px-14 md:px-10 lg:px-0 px-3">
        <h6 className="subtitle mb-1 text-base text-primary tracking-[6px] font-barlowCondensed">
          F.A.QS
        </h6>
        <h2 className=" main-title font-gilda text-white font-medium text-[46px] leading-[57.5px] mb-5">
          Spa Etiquette
        </h2>
        <FAQAccordion accData={accordionData}/>
      </div>
    </section>
  );
};

export default SpaEtiquetteFAQ;
