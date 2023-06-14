import React from "react";

import Pagination from "./Pagination";
import NewsOne from "./NewsOne";

const NewsContainer = () => {
  return (
    <div className="w-full bg-bgSoft">
      <div className="mainContainer  sm:px-14 md:px-10 lg:px-6 px-3 ">
        <NewsOne />
        <Pagination />
      </div>
    </div>
  );
};

export default NewsContainer;
