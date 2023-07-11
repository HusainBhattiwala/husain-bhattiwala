import React from "react";

export default function Center({ children }) {
  return (
    <div className='max-w-[800px] mx-5 sm:mx-auto py-5 mt-[120px] sm:mt-[200px] '>
      {children}
    </div>
  );
}
