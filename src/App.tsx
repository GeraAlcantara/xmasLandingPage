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
import Grinch from "../src/assets/grinchProfile.png";
import Homealone from "../src/assets/homealone.png";

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
            <div className='bg-brandPurple-500 h-[450px] w-[340px] rounded-2xl flex flex-col justify-center items-center origin-bottom-right rotate-0 lg:-rotate-2 lg:hover:scale-105 transition-all duration-500'>
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
            <div className='bg-brandPurple-500 h-[450px] w-[340px] rounded-2xl flex flex-col justify-center items-center origin-bottom-left rotate-0 lg:rotate-2 lg:hover:scale-105 transition-all duration-500'>
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
        <div className='flex flex-col md:flex-row items-center justify-center p-4 xl:p-16 gap-8 w-full '>
          {/* card review clients */}
          <div className='flex flex-col w-full md:flex-row items-center md:min-h-[216px] xl:min-h-0 gap-4 p-8 bg-brandPurple-600 rounded-2xl md:w-1/2 justify-center'>
            {/* Profile */}
            <div className='w-20 h-20 flex justify-center rounded-full overflow-hidden  bg-brandPurple-400'>
              <img className='object-cover ' src={Grinch} alt='Grinch' />
            </div>
            {/* review */}
            <blockquote className='flex-1 text-center md:text-left'>
              <p className='text-brandPurple-50 text-xl mb-2'>No no no, nunca le manden carta a Santa Claus es un gordito mentiroso!!! 😡</p>
              <cite className='text-2xl text-brandPurple-400'>- El Grinch</cite>
            </blockquote>
          </div>
          {/* card 2 */}
          <div className='flex flex-col w-full md:flex-row items-center md:min-h-[216px] xl:min-h-0 gap-4 p-8 bg-brandPurple-600 rounded-2xl md:w-1/2 justify-center'>
            {/* Profile */}
            <div className='w-20 h-20 rounded-full overflow-hidden  bg-brandPurple-400'>
              <img className='object-cover ' src={Homealone} alt='mi pobre angelito' />
            </div>
            {/* review */}
            <blockquote className='flex-1 text-center md:text-left'>
              <p className='text-brandPurple-50 text-xl mb-2'>Es Genial; pedí que no me olvidera mi familia otra vez en Navidad y funciono 🤣 </p>
              <cite className='text-2xl text-brandPurple-400'>- Kevin McCallister</cite>
            </blockquote>
          </div>
        </div>
      </div>
      <div className='-mt-[2px] rotate-180 '>
        <img src={Wavebottom2} alt='wave' />
      </div>
    </div>
  );
}

export default App;
