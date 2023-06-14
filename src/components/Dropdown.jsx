import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Dropdown = ({ isHover, setIsHover, data }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="relative z-[1]">
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={`absolute top-1 -left-2 w-[200px] h-auto p-4 bg-bgDark animate__animated ${
          isHover ? "animate__fadeInUp" : "animate__fadeOutDown"
        }`}
      >
        {data?.map(({ name, path }, index) => (
          <button
            key={index}
            to={path}
            onClick={(e) => {
              e.stopPropagation();
              navigate(path);
            }}
            className={`w-full py-2 border-b border-secondary border-opacity-10
           transition-all duration-300 ease-in-out flex justify-start last:border-b-transparent ${
             pathname == path ? "text-primary" : "text-white hover:text-primary"
           }`}
          >
            <h6 className="text-[16px]">{name}</h6>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
