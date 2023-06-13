import React from "react";

import Layout from "../components/Layout";
import SubHero from "../components/SubHero";
import HotelFacilities from "../components/HotelFacilities";
import Booking from "../components/Booking";

const Facilities = () => {
  return (
    <Layout>
      <SubHero tags={["OTHER SERVICES"]} title="Hotel Facilities" />
      <HotelFacilities />
      <Booking />
    </Layout>
  );
};

export default Facilities;
