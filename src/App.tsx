import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { RiDoubleQuotesL } from "react-icons/ri";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <section className='pt-[200px] md:pt-[100px] xl:pt-[140px]  bg-brandPurple-50'>
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
    </div>
  );
}

export default App;
