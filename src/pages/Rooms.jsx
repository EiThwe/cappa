import React from "react";
import Layout from "../components/Layout";
import RoomsAndSuites from "../components/RoomsAndSuites";
import ExtraServices from "../components/ExtraServices";
import Booking from "../components/Booking";

const Rooms = () => {
  return (
    <Layout>
      <RoomsAndSuites dark />
      <ExtraServices />
      <Booking />
    </Layout>
  );
};

export default Rooms;
