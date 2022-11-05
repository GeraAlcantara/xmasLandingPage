import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { RiDoubleQuotesL } from "react-icons/ri";
import WaveBanner from "../src/assets/wavebanner.svg";
import Wavebottom from "../src/assets/wavebottom.svg";
import Wavebottom2 from "../src/assets/wavebottom2.svg";
import Cookie from "../src/assets/cookie.png";
import Letter from "../src/assets/Letter.png";
import Socks from "../src/assets/socks.png";
import Mittens from "../src/assets/mittens.png";
import Rudolf from "../src/assets/rudolf.png";
import Footter from "./components/Footter";
import Contact from "./components/Contact";
import Clients from "./components/Clients";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      {/* Divider waves top */}
      <div className='-mb-[1px]'>
        <img src={WaveBanner} alt='wave' />
      </div>
      <section className=' bg-brandPurple-50'>
        {/* Imagenes flotantes */}
        <div className='relative w-1/3 '>
          <div className='relative top-0 -translate-y-1/4 md:-translate-y-2/4 xl:-translate-y-1/4 transition-all duration-500'>
            <div className='relative ml-4 rotate-12 w-1/2'>
              <img src={Cookie} alt='galleta de gengibe' />
            </div>
            <div className='w-3/4 absolute top-1/4 right-0  translate-x-1/4 '>
              <img src={Letter} alt='carta' />
            </div>
          </div>
        </div>
        <div className='px-2 text-center'>
          <h2 className='text-3xl text-brandPurple-700 font-semibold mb-2'>First-a few short poems for when you're in a bind!</h2>
          <p className='text-gray-900 '>Copy or screenshot these and store them in your phone</p>
        </div>
        {/* card quotes */}
        <div className='flex flex-col md:flex-row flex-wrap items-center justify-center p-4 xl:p-16 gap-8 w-full '>
          {/* Card 1 */}
          <div className='bg-white relative shadow-2xl shadow-brandPurple-200 p-8 max-w-[400px] min-h-[390px] rounded-t-2xl rounded-br-2xl speech-bubble mb-8 '>
            <blockquote cite='Shirley Sallay p-4'>
              <RiDoubleQuotesL className='text-9xl text-brandPurple-600 font-serif leading-none'>"</RiDoubleQuotesL>
              <p className='text-xl mb-4'>Christmas now surround us, Happiness is everywhere Our hands are busy with many tasks As carols fill the air. </p>
              <cite className='text-gray-400 text-lg '>Shirley Sallay</cite>
              <p className='text-brandPurple-700 font-bold mt-4'>TAP CARD TO COPY</p>
            </blockquote>
          </div>
          {/* Card 2 */}
          <div className='bg-white relative shadow-2xl shadow-brandPurple-200 p-8 max-w-[400px] min-h-[390px] rounded-t-2xl rounded-br-2xl speech-bubble mb-8 '>
            <blockquote cite='Shirley Sallay p-4'>
              <RiDoubleQuotesL className='text-9xl text-brandPurple-600 font-serif leading-none'>"</RiDoubleQuotesL>
              <p className='text-xl mb-4'>Christmas now surround us, Happiness is everywhere Our hands are busy with many tasks As carols fill the air. </p>
              <cite className='text-gray-400 text-lg '>Shirley Sallay</cite>
              <p className='text-brandPurple-700 font-bold mt-4'>TAP CARD TO COPY</p>
            </blockquote>
          </div>
          {/* Card 3 */}
          <div className='bg-white relative shadow-2xl shadow-brandPurple-200 p-8 max-w-[400px] min-h-[390px] rounded-t-2xl rounded-br-2xl speech-bubble mb-8 '>
            <blockquote cite='Shirley Sallay p-4'>
              <RiDoubleQuotesL className='text-9xl text-brandPurple-600 font-serif leading-none'>"</RiDoubleQuotesL>
              <p className='text-xl mb-4'>Christmas now surround us, Happiness is everywhere Our hands are busy with many tasks As carols fill the air. </p>
              <cite className='text-gray-400 text-lg '>Shirley Sallay</cite>
              <p className='text-brandPurple-700 font-bold mt-4'>TAP CARD TO COPY</p>
            </blockquote>
          </div>
        </div>
      </section>
      {/* divider wave bottom */}
      <div className='-mt-[1px]'>
        <img src={Wavebottom} alt='wave' />
      </div>
      {/* get in touch  */}
      <section className='text-white'>
        <div className='flex flex-col items-center justify-center p-4 xl:p-16 gap-8 w-full '>
          <header className='flex flex-col gap-1 justify-center items-center'>
            <h2 className='text-center text-4xl md:text-3xl border-gray-200 font-semibold mb-2'>Get in touch with Santa Claus</h2>
            <p className='text-sm font-light text-center'>It's so simple that we all learn this even way before kindergarten</p>
            <div className='bg-white w-10 h-[2px]'></div>
          </header>
          <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
            {/* cards */}
            <div className='bg-brandPurple-500 h-[450px] w-full md:w-[340px] rounded-2xl flex flex-col justify-center items-center origin-bottom-right rotate-0 lg:-rotate-2 lg:hover:scale-105 transition-all duration-500'>
              <div className='w-full h-auto flex justify-center'>
                <img src={Socks} alt='calcetas de navidad' />
              </div>
              <div className='text-center flex flex-col items-center gap-2 pt-4'>
                <h3 className='text-2xl font-semibold w-[17ch]'>Write down all your super secret wishes</h3>
                <p className='text-sm w-3/4 m-auto'>
                  Be extra carefull with your handwriting, Santa has very old eyes. Mail them <a href='#'>here.</a>
                </p>
              </div>
            </div>
            <div className='bg-brandPurple-500 h-[450px] w-full md:w-[340px] rounded-2xl flex flex-col justify-center items-center origin-bottom-left rotate-0 lg:rotate-2 lg:hover:scale-105 transition-all duration-500'>
              <div className='w-full h-auto flex justify-center'>
                <img src={Mittens} alt='guantes de navidad' />
              </div>
              <div className='text-center flex flex-col items-center gap-2 pt-4'>
                <h3 className='text-2xl font-semibold w-[20ch]'>Sit back, relax and wait! Santa will deliver </h3>
                <p className='text-sm w-3/4 m-auto'>Reflect on the past year and wonder if you've been good enough.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='-mb-[1px] '>
        <img src={Wavebottom2} alt='wave' />
      </div>
      {/* clientes Grinch, Mi pobre angelito, Jack the nightmare before chrismas, pawpatrol, buenaidea mala idea Animanics */}
      <div className='bg-brandPurple-50'>
        <header className='flex flex-col gap-1 justify-center items-center'>
          <h2 className='text-center text-3xl md:text-4xl border-gray-200 font-bold mb-2'>Our clients</h2>
          <p className='text-sm font-light text-center'>The good and the bad reviews help us improve our service </p>
          <div className='bg-gray-900 w-10 h-[2px]'></div>
        </header>
        <Clients />
      </div>
      {/* divider */}
      <div className='-mt-[2px] rotate-180 '>
        <img src={Wavebottom2} alt='wave' />
      </div>
      <div className='bg-brandPurple-600 relative '>
        <div className='absolute -translate-y-3/4  lg:-translate-y-full left-8 w-1/3  lg:w-1/4 z-10'>
          <img src={Rudolf} alt='rudolf' />
        </div>
        <div className='flex flex-col lg:flex-row justify-between container m-auto text-white'>
          {/* left side */}
          <div className='px-6 lg:px-4 py-16 w-full lg:w-1/2'>
            <header className='flex flex-col gap-6'>
              <h2 className='text-3xl md:text-6xl border-gray-200 mb-2 font-light w-[15ch]'>
                A Section Strictly for <span className='text-brandRed '>the parents</span>
              </h2>
              <p>
                Given the global and multinational nature of our service we prefer to only handle MX Pesos. The bright and bold future, here we come! Click on a
                package to start.
              </p>
              <p>
                Read more about our commitment to Mexican Peso & the Mexican economy.
                <a className='text-brandRed' href='#'>
                  here!
                </a>
              </p>
            </header>
            <div className='pl-2 relative before:w-[2px] before:h-full before:bg-white before:absolute before:top-0 before:-left-2 mt-20'>
              <p>
                You've never used Mexican Pesos before? No worries, we'll help you out!{" "}
                <a className='text-brandRed' href='#'>
                  Learn more
                </a>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima omnis quisquam corporis, tempore pariatur molestias libero? Est, nostrum maxime
                non vero illum nam praesentium sit esse cupiditate labore libero reprehenderit?
              </p>
            </div>
          </div>
          {/* right side */}
          <div className='flex justify-center items-center'>
            <div className='p-4 lg:p-8 xl:p-16 md:p-2'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 text-center text-gray-900'>
                <div className='bg-white px-4 py-8 rounded-2xl flex flex-col gap-2 '>
                  <h3 className='text-2xl font-medium'>The Starter Package</h3>
                  <p className='text-sm'>2 adults + 2 children and a pet</p>
                  <p className='font-normal text-6xl'>2000</p>
                  <p className='text-xs text-gray-900'>MX Pesos</p>
                </div>
                <div className='bg-brandPurple-50 px-4 py-8 rounded-2xl flex flex-col gap-2 '>
                  <h3 className='text-2xl font-medium'>Friends & Fam</h3>
                  <p className='text-sm'>8 adults + 4 children and 2 pet</p>
                  <p className='font-normal text-6xl'>4000</p>
                  <p className='text-xs text-gray-900'>MX Pesos</p>
                </div>
                <div className='bg-brandPurple-100/80 px-4 py-8 rounded-2xl flex flex-col gap-2 '>
                  <h3 className='text-2xl font-medium'>Kids Party Only</h3>
                  <p className='text-sm'>Up to 16 children</p>
                  <p className='font-normal text-6xl'>8000</p>
                  <p className='text-xs text-gray-900'>MX Pesos</p>
                </div>
                <div className='bg-brandPurple-400 px-4 py-8 rounded-2xl flex flex-col gap-2 '>
                  <h3 className='text-2xl font-medium'>The Company Giftaway</h3>
                  <p className='text-sm'>Up to 24 adults</p>
                  <p className='font-normal text-6xl'>10000</p>
                  <p className='text-xs text-gray-900'>MX Pesos</p>
                </div>
              </div>
              <p className='text-white text-center mt-16'>
                The current exchange rate is $1 usd dollar = <span className='font-bold'>$18.76 mx pesos</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* divider */}
      <div className='-mt-[2px] '>
        <img src={Wavebottom2} alt='wave' />
      </div>
      <Contact />
      <Footter />
    </div>
  );
}

export default App;
