import React from "react";
import Layout from "../components/Layout";
import ContactFormSection from "../components/ContactFormSection";
import Map from "../components/Map";
import Booking from "../components/Booking";

const Contact = () => {
  return (
    <Layout>
      <ContactFormSection />
      <Map />
      <Booking />
    </Layout>
  );
};

export default Contact;
