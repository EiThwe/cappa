import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import RestaurantSection from "../components/RestaurantSection";
import RestaurantMenu from "../components/RestaurantMenu";
import ClientReview from "../components/ClientReview";
import FullHero from "../components/FullHero";
import { restaurantBgData } from "../utils/data";

const Restaurant = () => {
  const scrollRef = useRef(null);

  const restaurantHandler = () => {
    scrollRef?.current?.scrollIntoView({
      inline: "center",
      behavior: "smooth",
    });
  };

  return (
    <Layout>
      <FullHero data={restaurantBgData} onClick={restaurantHandler}/>
      <RestaurantSection refs={scrollRef} />
      <RestaurantMenu />
      <ClientReview />
    </Layout>
  );
};

export default Restaurant;
