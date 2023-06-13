import React, { useState } from "react";

const Textarea = ({ placeholder }) => {
  const [focus, setFocus] = useState(false);

  return (
    <textarea
      rows={4}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      className={`border-b md:col-span-2 customPlaceholder ${
        focus ? "border-primary" : "border-secondary border-opacity-20"
      }  text-secondary bg-transparent w-full py-3 outline-none`}
      placeholder={placeholder}
    ></textarea>
  );
};

export default Textarea;
