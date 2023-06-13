import React from "react";
import Layout from "../components/Layout";
import SubHero from "../components/SubHero";
import NewsContainer from "../components/NewsContainer";

const News = () => {
  return (
    <Layout>
      <SubHero tags={["Hotel Blog"]} title="Our News" />
      <NewsContainer />
    </Layout>
  );
};

export default News;
