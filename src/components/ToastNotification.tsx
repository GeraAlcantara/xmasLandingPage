import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

function ToastNotification({ updatetype = "Last" || "previuos", date = "12 00m above Greenland, March 8.6, T-10min", timepassed = 8 }) {
  return (
    <div className={`px-6 py-4 bg-white/95 rounded-lg border-none ${updatetype === "previuos" ? "opacity-80" : ""}`}>
      <span className='text-gray-300 font-bold uppercase'>{updatetype} UPDATE FROM</span>
      <div className='flex gap-1 items-center'>
        <p className='text-gray-900 xl:text-lg'>{date}</p>´
        {updatetype === "Last" && (
          <div className='bg-green-400 w-4 h-4 rounded-full flex justify-center items-center'>
            <FiArrowUpRight className='text-sm text-white ' />
          </div>
        )}
      </div>
      <span className='text-gray-500'>{timepassed} min ago</span>
    </div>
  );
}

export default ToastNotification;
