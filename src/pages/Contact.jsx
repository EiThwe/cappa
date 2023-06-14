import React from "react";

import Layout from "../components/Layout";
import ContactFormSection from "../components/ContactFormSection";
import Map from "../components/Map";
import Booking from "../components/Booking";
import SubHero from "../components/SubHero";

const Contact = () => {
  return (
    <Layout>
      <SubHero tags={["GET IN TOUCH"]} title="Contact Us" />
      <ContactFormSection />
      <Map />
      <Booking />
    </Layout>
  );
};

export default Contact;
