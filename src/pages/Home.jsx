import React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import HotelFacilities from "../components/HotelFacilities";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <HotelFacilities />
      <div className="w-full h-[400px] bg-red-300" />
    </Layout>
  );
};

export default Home;
