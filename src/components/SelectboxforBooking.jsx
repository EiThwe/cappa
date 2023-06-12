import React, { useState, useRef, useEffect } from "react";
import "./SelectboxforBooking.css";

const SelectboxforBooking = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(name);

  const [heightToBottom, setHeightToBottom] = useState(null);
  const [optionHeight, setOptionHeight] = useState(null);
  const options = [name, 1, 2, 3, 4];
  const selectRef = useRef(null);
  const optionRef = useRef(null);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const getSpawnPosition = () => {
    if (optionHeight) {
      if (optionHeight > heightToBottom) {
        return " -translate-y-16 border-b-[1px] border-gray-600";
      } else {
        return " translate-y-full";
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      const selectElement = selectRef.current;
      const optionElement = optionRef.current;
      if (selectElement) {
        const { bottom } = selectElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const height = viewportHeight - bottom;
        setHeightToBottom(height);
      }
      if (optionElement) {
        setOptionHeight(optionElement.offsetHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative w-full md:w-[50%]" ref={selectRef} onClick={toggleOptions}>
        <div className="select-box__trigger py-6 pl-3 select-box text-secondary bg-bgSoft  select-arrow   focus:outline-none focus:bg-bgSoft focus:border-primary ">
          {selectedOption ? selectedOption : name}
        </div>
        {isOpen && (
          <ul
            className={
              "select-box__options w-full absolute bottom-0 left-0" +
              getSpawnPosition()
            }
            ref={optionRef}
          >
            {options?.map((option, index) => (
              <li
                key={index}
                className={`select-box__option  bg-bgSoft py-3 border-t-[1px] border-gray-600 hover:bg-primary hover:text-white w-full text-center cursor-pointer` + (option === selectedOption ? " bg-primary text-white" : "text-primary")}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      
    </>
  );
};

export default SelectboxforBooking;
