import React from "react";

import SimilarRoom from "../components/SimilarRoom";
import Layout from "../components/Layout";
import JuniorSuiteSection from "../components/JuniorSuiteSection";
import ExtraServices from "../components/ExtraServices";
import Booking from "../components/Booking";

const RoomDetails = () => {
  return (
    <Layout>
      <JuniorSuiteSection />
      <SimilarRoom />
      <ExtraServices />
      <Booking />
    </Layout>
  );
};

export default RoomDetails;
