import React from "react";

const Pagination = () => {
  return (
    <div
      id="pagination"
      className="w-full flex justify-center items-center gap-3"
    >
      <button
        className="w-[45px] h-[45px] rounded-full border border-transparent hover:border-primary hover:text-primary flex 
    justify-center items-center transition-all duration-300 ease-in-out  text-secondary"
      >
        <i className="ti-angle-left text-[12px]"></i>
      </button>

      {[1, 2, 3].map((data) => (
        <button
          key={data}
          className={`w-[45px] h-[45px] rounded-full border hover:border-primary hover:text-primary flex 
      justify-center items-center transition-all duration-300 ease-in-out text-[15px] ${
        data == 2
          ? "text-primary border-primary"
          : "text-secondary border-transparent"
      }`}
        >
          {data}
        </button>
      ))}

      <button
        className="w-[45px] h-[45px] rounded-full border border-transparent hover:border-primary hover:text-primary flex 
    justify-center items-center transition-all duration-300 ease-in-out  text-secondary"
      >
        <i className="ti-angle-right text-[12px]"></i>
      </button>
    </div>
  );
};

export default Pagination;
