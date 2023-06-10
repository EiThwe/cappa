import React from "react";

import Layout from "../components/Layout";
import ExtraServices from "../components/ExtraServices";
import Hero from "../components/Hero";
import FiveStar from "../components/FiveStar";
import PromotionalVideo from "../components/PromotionalVideo";
import ClientReview from "../components/ClientReview";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <ExtraServices />
      <ClientReview />
    </Layout>
  );
};

export default Home;
