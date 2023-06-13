import React, { useState } from "react";
import Calendar from "react-calendar";
import { HiOutlineCalendar } from "react-icons/hi";
import "./CalendarInputForm.css";

const CalendarInputForm = ({ name }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [value, onChange] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleOnChange = (event) => {
    console.log(event);
    setSelectedDate(event);
    onChange(event);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder={name}
          value={
            selectedDate != ""
              ? new Date(selectedDate).toLocaleDateString("en-US")
              : ""
          }
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="w-full text-secondary cursor-pointer py-6 px-5 bg-bgSoft focus-within:outline-none "
        />
        <HiOutlineCalendar className="absolute text-primary top-6 right-3 pointer-events-none" />
        {isOpen && (
          <Calendar
            onChange={handleOnChange}
            value={value}
            calendarType="US"
            next2Label={null}
            prev2Label={null}
            className="absolute top-0 left-0 bg-bgsoft text-secondary  shadow-lg z-50 px-1 translate-y-16 "
          />
        )}
      </div>
    </>
  );
};

export default CalendarInputForm;
