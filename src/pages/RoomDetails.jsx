import React, { useRef } from "react";

import SimilarRoom from "../components/SimilarRoom";
import Layout from "../components/Layout";
import JuniorSuiteSection from "../components/JuniorSuiteSection";
import ExtraServices from "../components/ExtraServices";
import Booking from "../components/Booking";
import FullHero from "../components/FullHero";
import { heroData } from "../utils/data";

const RoomDetails = () => {
  const scrollRef = useRef(null);

  const restaurantHandler = () => {
    scrollRef?.current?.scrollIntoView({
      inline: "center",
      behavior: "smooth",
    });
  };

  return (
    <Layout>
      <FullHero data={heroData} onClick={restaurantHandler} />
      <JuniorSuiteSection refs={scrollRef} />
      <SimilarRoom />
      <ExtraServices />
      <Booking />
    </Layout>
  );
};

export default RoomDetails;
