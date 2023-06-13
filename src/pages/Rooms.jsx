import React from "react";
import Layout from "../components/Layout";
import RoomsAndSuites from "../components/RoomsAndSuites";
import ExtraServices from "../components/ExtraServices";
import Booking from "../components/Booking";
import SubHero from "../components/SubHero";

const Rooms = () => {
  return (
    <Layout>
      <SubHero tags={["THE CAPPA LUXURY HOTEL"]} title="Rooms & Suites" star />
      <RoomsAndSuites dark />
      <ExtraServices />
      <Booking />
    </Layout>
  );
};

export default Rooms;
