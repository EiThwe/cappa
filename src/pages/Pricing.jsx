import React from "react";

import Layout from "../components/Layout";
import SubHero from "../components/SubHero";
import Booking from "../components/Booking";

const Pricing = () => {
  return (
    <Layout>
      <SubHero tags={["PRICING PLAN"]} title="Extra Pricing" />
      <Booking />
    </Layout>
  );
};

export default Pricing;
