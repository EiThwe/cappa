import React from "react";

import Layout from "../components/Layout";
import SubHero from "../components/SubHero";
import Booking from "../components/Booking";
import MeettheTeam from "../components/MeettheTeam";

const Team = () => {
  return (
    <Layout>
      <SubHero tags={["PROFESSIONALS"]} title="Meet The Team" />
      <MeettheTeam />
      <Booking />
    </Layout>
  );
};

export default Team;
