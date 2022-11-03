import React from "react";
import { ImLocation } from "react-icons/im";

function Logo() {
  return (
    <div className='flex  items-center gap-4'>
      <div className='bg-brandPurple-500 p-2  rounded-lg inline-flex justify-center items-center'>
        <ImLocation className='text-white text-xl' />
      </div>
      <div className='flex flex-col justify-center text-white'>
        <h1 className='text-2xl font-bold leading-none'>SantaTrack</h1>
        <h2 className='uppercase text-xs'>CHRISTMAS SERVICES</h2>
      </div>
    </div>
  );
}

export default Logo;
