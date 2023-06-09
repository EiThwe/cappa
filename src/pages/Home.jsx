import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import LuxuryExperience from "../components/LuxuryExperience";
import Rooms from "./Rooms";
import OurNews from "../components/OurNews";
import Booking from "../components/Booking";

const Home = () => {
  return (
    <Layout>
      <LuxuryExperience />
      <Rooms />
      <OurNews />
      <Booking />
    </Layout>
  );
};

export default Home;
