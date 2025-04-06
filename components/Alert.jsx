"use client";
import React, { useEffect, useState } from "react";

const Alert = ({ type, text }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className='absolute top-10 left-0 right-0 flex justify-center items-center z-50'>
      <div
        className={`px-4 py-2 ${
          type === "danger" ? "bg-[#FFD1D1]/80 text-[#7A1F1F]" : "bg-[#D1FAD7]/80 text-[#24532E]"
        } items-center leading-none rounded-lg shadow-lg backdrop-blur-md flex transition-all duration-300`}
        role='alert'
      >
        <p
          className={`flex rounded-full ${
            type === "danger" ? "bg-[#FF6B6B]" : "bg-[#6BE090]"
          } text-white uppercase px-2 py-1 text-xs font-semibold mr-3`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className='mr-2 text-sm font-medium'>{text}</p>
      </div>
    </div>
  );
};

export default Alert;
