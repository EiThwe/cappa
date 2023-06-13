import React, { useState } from "react";

const FormInput = ({ type, placeholder }) => {
  const [focus, setFocus] = useState(false);
  return (
    <input
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      type={type ? type : "text"}
      className={`border-b customPlaceholder bg-transparent ${
        focus ? "border-primary" : "border-secondary border-opacity-20"
      }  text-secondary  w-full py-3 outline-none`}
      placeholder={placeholder}
    />
  );
};

export default FormInput;
