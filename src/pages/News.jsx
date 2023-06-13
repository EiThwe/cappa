import React from "react";
import Layout from "../components/Layout";
import SubHero from "../components/SubHero";
import NewsContainer from "../components/NewsContainer";
import Booking from "../components/Booking";

const News = () => {
  return (
    <Layout>
      <SubHero tags={["Hotel Blog"]} title="Our News" />
      <NewsContainer />
      <Booking />
    </Layout>
  );
};

export default News;
