import React from "react";
import { TbArrowBigDownLines } from "react-icons/tb";
import Housexmas from "../assets/housexmas.png";
import ToastNotification from "./ToastNotification";
import Wavebanner from "../assets/wavebanner.svg";
import WavesSvg from "./WavesSvg";
import Cookie from "../assets/cookie.png";
import Letter from "../assets/Letter.png";

function Hero() {
  return (
    <div className='bg-gradient-to-b from-brandPurple-700 to-brandPurple-600 pt-4 md:pt-8 min-h-[calc(100vh-56px)] md:min-h-0  flex flex-col justify-around '>
      <div className='container m-auto px-4 md:px-8 xl:px-0 text-white flex flex-col-reverse md:flex-row lg:items-center lg:justify-between'>
        <div className='flex flex-col gap-2 md:gap-4 md:p-10 lg:p-0 w-full xl:1/2'>
          <div className='flex justify-center p-4 md:p-0 md:justify-start'>
            <button className='bg-brandPurple-600 py-2 px-4 uppercase text-xs rounded-lg shadow-brandPurple-500 shadow-inner '>Do you belive in magic?</button>
          </div>
          <h1 className='text-6xl md:text-6xl lg:text-8xl xl:text-9xl font-normal max-w-[10ch]'>
            Santa Arrive in <span className='text-brandRed font-medium'>10 min!</span>
          </h1>
          <div className='text-xl mb-4'>
            <p>Plenty of gifts to go around if you've been good!</p>
            <p>Do you have a poen or dance ready</p>
          </div>
          <div className='flex items-center text-white gap-1'>
            <TbArrowBigDownLines />
            <p className='text-sm mb-2'>Scroll down for quick helper</p>
          </div>
        </div>
        <div className='w-full md:w-3/4 p-4 m-auto relative'>
          <img src={Housexmas} alt='3d House with christmas lights' className='w-full h-auto' />
        </div>
        {/* <div className='hidden lg:absolute -bottom-14 lg:bottom-24 right-8 lg:flex flex-col gap-4'>
          <ToastNotification />
          <ToastNotification updatetype='previuos' date='24 000m above Norway, March 5.2, T-12min' timepassed={10} />
        </div> */}
      </div>
      <div className='relative top-1 '>
        <WavesSvg />
        <div className='relative '>
          <div className='absolute -top-[60px] md:-top-[200px]  lg:-top-[250px] xl:-top-[460px]'>
            <div className='w-36 lg:w-44 xl:w-96 relative ml-4 rotate-12'>
              <img src={Cookie} alt='galleta de gengibe' />
            </div>
            <div className='w-56 xl:w-96 translate-x-20 xl:translate-x-80 -translate-y-[80px] xl:-translate-y-[180px] '>
              <img src={Letter} alt='carta' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
