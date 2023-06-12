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
      <Navbar/>
       <LuxuryExperience />
      <Rooms />
      {/* <ExtraServices /> */}
 
      <OurNews />
      <Booking /> 

    </Layout>
  );
};

export default Home;
