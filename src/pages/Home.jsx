import React from "react";

import Layout from "../components/Layout";
import ExtraServices from "../components/ExtraServices";
import Hero from "../components/Hero";
import FiveStar from "../components/FiveStar";
import PromotionalVideo from "../components/PromotionalVideo";
import ClientReview from "../components/ClientReview";
import Services from "../components/Services";
import RestaurantSection from "../components/RestaurantSection";
import JuniorSuiteSection from "../components/JuniorSuiteSection";
import RestaurantMenu from "../components/RestaurantMenu";
import SpaWellnessSection from "../components/SpaWellnessSection";
import SpaEtiquetteFAQ from "../components/SpaEtiquetteFAQ";
import ContactFormSection from "../components/ContactFormSection";
import Map from "../components/Map";

const Home = () => {
  return (
    <Layout>
      <Hero />
      {/* <ExtraServices />
      <Services />
      <ClientReview />
      <JuniorSuiteSection />
      <RestaurantMenu/>
      <PromotionalVideo />
      <SpaWellnessSection/> */}
      <SpaEtiquetteFAQ />
      <ContactFormSection />
      <Map />
    </Layout>
  );
};

export default Home;
