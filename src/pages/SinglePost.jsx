import React from "react";
import Layout from "../components/Layout";
import SubHero from "../components/SubHero";
import SinglePostLeft from "../components/SinglePostLeft";
import SinglePostRight from "../components/SinglePostRight";

const SinglePost = () => {
  return (
    <Layout>
      <SubHero />
      <div className="w-full bg-bgDark">
        <div className="mainContainer flex justify-between items-start">
          <SinglePostLeft />
          <SinglePostRight />
        </div>
      </div>
    </Layout>
  );
};

export default SinglePost;
