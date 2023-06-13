import React from "react";

import MeettheTeam from "../components/MeettheTeam";
import LuxuryExperience from "../components/LuxuryExperience";
import Layout from "../components/Layout";
import ExtraServices from "../components/ExtraServices";
import ClientReview from "../components/ClientReview";

const About = () => {
  return (
    <Layout>
      <LuxuryExperience />
      <ExtraServices dark />
      <MeettheTeam />
      <ClientReview />
    </Layout>
  );
};

export default About;
