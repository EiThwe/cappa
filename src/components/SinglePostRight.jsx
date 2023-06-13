import React from "react";
import SinglePostItem from "./SinglePostItem";
import { recentPostData } from "../utils/data";

const SinglePostRight = () => {
  return (
    <div className="md:w-[30%] w-full flex flex-col gap-8">
      <SinglePostItem>
        <div className="w-full flex h-10 bg-bgDark justify-between">
          <input
            placeholder="Type Here..."
            type="text"
            className="w-[90%] h-full bg-transparent px-2 border-none outline-none text-secondary"
          />
          <button className="w-10 h-10 flex justify-center items-center">
            <i className="ti-search text-primary"></i>
          </button>
        </div>
      </SinglePostItem>

      <SinglePostItem title="Recent Posts">
        {recentPostData.map(({ image, title }, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="min-w-[100px]">
              <img src={image} alt="img" className="w-[100px]" />
            </div>
            <a
              href=""
              className="text-[15px] text-secondary hover:text-primary transition-all duration-300 ease-in-out"
            >
              {title}
            </a>
          </div>
        ))}
      </SinglePostItem>

      <SinglePostItem title="Archives">
        <div className="flex flex-col items-start gap-3">
          {["December 2023", "November 2023", "October 2023"].map(
            (data, index) => (
              <button
                key={index}
                className="text-base text-secondary hover:text-primary transition-all duration-300 ease-in-out"
              >
                {data}
              </button>
            )
          )}
        </div>
      </SinglePostItem>

      <SinglePostItem title="Categories">
        <div className="flex flex-col items-start gap-3">
          {["Restaurant", "Hotel Design", "Span Center"].map((data, index) => (
            <button
              key={index}
              className="flex items-center gap-2 text-base text-secondary hover:text-primary transition-all duration-300 ease-in-out"
            >
              <i className="ti-angle-right text-[10px]"></i>
              <h6>{data}</h6>
            </button>
          ))}
        </div>
      </SinglePostItem>

      <SinglePostItem title="Tags">
        <div className="flex gap-2 items-center flex-wrap">
          {["Restaurant", "Hotel", "Spa", "Health Club", "Lexury Hotel"].map(
            (data, index) => (
              <button
                key={index}
                className="px-5 py-2 text-base border border-secondary border-opacity-20 hover:bg-primary"
              >
                <h6 className="text-secondary  text-[14px]">{data}</h6>
              </button>
            )
          )}
        </div>
      </SinglePostItem>
    </div>
  );
};

export default SinglePostRight;
