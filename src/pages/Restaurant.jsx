import React from "react";
import Layout from "../components/Layout";
import RestaurantSection from "../components/RestaurantSection";
import RestaurantMenu from "../components/RestaurantMenu";
import ClientReview from "../components/ClientReview";

const Restaurant = () => {
  return (
    <Layout>
      <RestaurantSection />
      <RestaurantMenu />
      <ClientReview />
    </Layout>
  );
};

export default Restaurant;
