import React from "react";

import Layout from "../components/Layout";
import ExtraServices from "../components/ExtraServices";
import CardCarousel from "../components/CardCarousel";
import Navbar from "../components/Navbar";
import LuxuryExperience from "../components/LuxuryExperience";
import Rooms from "./Rooms";
import OurNews from "../components/OurNews";
import Booking from "../components/Booking";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <Layout>
      <ExtraServices />
      {/* <CardCarousel/> */}
      <LuxuryExperience />
      <Rooms />
      <OurNews />
      <Booking />
      <Hero />
    </Layout>
  );
};

export default Home;
