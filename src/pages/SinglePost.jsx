import React from "react";
import Layout from "../components/Layout";
import SubHero from "../components/SubHero";
import SinglePostLeft from "../components/SinglePostLeft";
import SinglePostRight from "../components/SinglePostRight";

const SinglePost = () => {
  return (
    <Layout>
      <SubHero tags={["News", "Post Page"]} title="Historic Restaurant" />
      <div className="w-full bg-bgDark">
        <div
          className="mainContainer flex md:flex-row flex-col justify-between items-start sm:px-14 md:px-10 lg:px-0 px-3 
        md:gap-0 gap-10"
        >
          <SinglePostLeft />
          <SinglePostRight />
        </div>
      </div>
    </Layout>
  );
};

export default SinglePost;
