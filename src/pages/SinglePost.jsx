import React from "react";
import Layout from "../components/Layout";
import SubHero from "../components/SubHero";
import SinglePostLeft from "../components/SinglePostLeft";
import SinglePostRight from "../components/SinglePostRight";

const SinglePost = () => {
  return (
    <Layout>
      <SubHero tags={["News", "Post Page"]} title="Historic Restaurant">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
              <img
                src="https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/5.jpg"
                alt="profile"
                className="w-full"
              />
            </div>
            <p className="text-white text-[13px]">Emma Emily</p>
          </div>

          <div className="flex items-center gap-2">
            <i className="ti-calendar text-primary text-lg"></i>
            <p className="text-white text-[13px]">30 DEC 2023</p>
          </div>
        </div>
      </SubHero>

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
