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

const Home = () => {
  return (
    <Layout>
      <LuxuryExperience />
      <RoomsAndSuites />
      <ExtraServices />
      <PromotionalVideo />
      <ClientReview />
      <Services />
      <OurNews />
      <Booking />
    </Layout>
  );
};

export default Home;
