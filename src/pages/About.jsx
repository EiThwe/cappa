import React from "react";

import MeettheTeam from "../components/MeettheTeam";
import LuxuryExperience from "../components/LuxuryExperience";
import Layout from "../components/Layout";
import ExtraServices from "../components/ExtraServices";
import ClientReview from "../components/ClientReview";
import SubHero from "../components/SubHero";

const About = () => {
  return (
    <Layout>
      <SubHero tags={["LUXURY HOTEL"]} title="About Us" />
      <LuxuryExperience />
      <ExtraServices dark />
      <MeettheTeam />
      <ClientReview />
    </Layout>
  );
};

export default About;
