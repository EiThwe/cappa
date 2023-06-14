import React from "react";

import Layout from "../components/Layout";
import SubHero from "../components/SubHero";
import Booking from "../components/Booking";
import PricingContainer from "../components/PricingContainer";
import { pricingCardData } from "../utils/data";

const Pricing = () => {
  let secondCardData = pricingCardData.slice(0, 3);
  secondCardData[0] = pricingCardData[3];

  return (
    <Layout>
      <SubHero tags={["PRICING PLAN"]} title="Extra Pricing" />
      <PricingContainer soft data={pricingCardData.slice(0, 3)} />
      <PricingContainer data={secondCardData} />
      <Booking />
    </Layout>
  );
};

export default Pricing;
