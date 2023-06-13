import React from "react";

const SinglePostItem = ({ title, children }) => {
  return (
    <div className="w-full py-8 sm:px-8 px-4 bg-bgSoft flex flex-col items-start gap-3">
      {title && (
        <>
          <h6 className="text-[24px] font-gilda text-white">{title}</h6>
          <div className="bg-secondary w-full h-[1px] bg-opacity-10 mb-1" />
        </>
      )}

      {children}
    </div>
  );
};

export default SinglePostItem;
