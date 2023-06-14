import React from "react";

import Layout from "../components/Layout";
import SubHero from "../components/SubHero";
import Booking from "../components/Booking";
import MeettheTeam from "../components/MeettheTeam";
import TeamFromTeam from "../components/TeamFromTeam";

const Team = () => {
  return (
    <Layout>
      <SubHero tags={["PROFESSIONALS"]} title="Meet The Team" />
      {/* <MeettheTeam /> */}
      <TeamFromTeam />
      <Booking />
    </Layout>
  );
};

export default Team;
