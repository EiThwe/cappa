import React from "react";
import FAQAccordion from "../components/FAQAccordion";
import { faqData } from "../utils/data";
import Navbar from "../components/Navbar";
import Booking from "../components/Booking";
import Layout from "../components/Layout";
import SubHero from "../components/SubHero";

const FAQ = () => {
  return (
    <Layout>
      <SubHero tags={["F . A . Q S"]} title="Frequently Asked Questions" />
      <div className="w-full bg-bgDark">
        <div className="mainContainer sm:px-14 md:px-10 lg:px-0 px-3">
          <div className="row w-full">
            <FAQAccordion accData={faqData} />
          </div>
        </div>
      </div>
      <Booking />
    </Layout>
  );
};

export default FAQ;
