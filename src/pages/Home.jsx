import React from "react";

import Layout from "../components/Layout";
import LuxuryExperience from "../components/LuxuryExperience";
import RoomsAndSuites from "../components/RoomsAndSuites";
import ExtraServices from "../components/ExtraServices";
import PromotionalVideo from "../components/PromotionalVideo";
import ClientReview from "../components/ClientReview";
import Services from "../components/Services";
import OurNews from "../components/OurNews";
import Booking from "../components/Booking";
import Hero from "../components/Hero";
import HotelFacilities from "../components/HotelFacilities";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <LuxuryExperience />
      <RoomsAndSuites />
      <ExtraServices />
      <PromotionalVideo />
      <HotelFacilities />
      <ClientReview />
      <Services />
      <OurNews />
      <Booking />
    </Layout>
  );
};

export default Home;
