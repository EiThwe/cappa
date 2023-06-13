import React from "react";

import Layout from "../components/Layout";
import SubHero from "../components/SubHero";
import ServicesComponent from "../components/Services";
import Booking from "../components/Booking";

const Services = () => {
  return (
    <Layout>
      <SubHero tags={["DISCOVER"]} title="Our Services" />
      <ServicesComponent />
      <Booking />
    </Layout>
  );
};

export default Services;
