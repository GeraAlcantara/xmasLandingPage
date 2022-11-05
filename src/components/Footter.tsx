import React from "react";
import { ImLocation } from "react-icons/im";

function Footter() {
  return (
    <div className='bg-brandPurple-50'>
      <div>
        <div className='flex flex-col md:flex-row items-center justify-between p-4 xl:p-16 gap-8 w-full '>
          <div className='flex  items-center gap-4'>
            <div className='bg-brandPurple-500 p-2  rounded-lg inline-flex justify-center items-center'>
              <ImLocation className='text-white text-xl' />
            </div>
            <div className='flex flex-col justify-center text-brandPurple-700'>
              <h1 className='text-2xl font-bold leading-none'>SantaTrack</h1>
              <h2 className='uppercase text-xs'>CHRISTMAS SERVICES</h2>
            </div>
          </div>
          <ul className='flex flex-col  md:flex-row gap-4 font-light justify-around md:items-center'>
            <li className=' text-xl text-gray-900 font-normal '>
              <a href='#'>Home</a>
            </li>
            <li className=' text-xl text-gray-900 font-normal '>
              <a href='#'>About</a>
            </li>
            <li className=' text-xl text-gray-900 font-normal '>
              <a href='#'>My Whislist</a>
            </li>
            <li className=' text-xl text-gray-900 font-normal '>
              <a href='#'>
                COVID Restrictions <span className='bg-brandRed  px-3 py-1 ml-1 font-medium rounded-full leading-tight text-sm'>New</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footter;
