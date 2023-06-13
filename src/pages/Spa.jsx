import React, { useRef } from "react";
import Layout from "../components/Layout";
import SpaWellnessSection from "../components/SpaWellnessSection";
import Services from "../components/Services";
import SpaEtiquetteFAQ from "../components/SpaEtiquetteFAQ";
import ClientReview from "../components/ClientReview";
import FullHero from "../components/FullHero";
import { spaBgData } from "../utils/data";

const Spa = () => {
  const scrollRef = useRef(null);

  const restaurantHandler = () => {
    scrollRef?.current?.scrollIntoView({
      inline: "center",
      behavior: "smooth",
    });
  };

  return (
    <Layout>
      <FullHero data={spaBgData} onClick={restaurantHandler} />
      <SpaWellnessSection refs={scrollRef} />
      <Services />
      <SpaEtiquetteFAQ />
      <ClientReview />
    </Layout>
  );
};

export default Spa;
