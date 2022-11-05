import Lettericon from "../assets/lettericon.svg";

function Contact() {
  return (
    <section className='bg-brandPurple-50 px-10 py-16 '>
      <div className='container m-auto flex flex-col md:flex-row justify-around items-center gap-4'>
        <div className='py-10'>
          <header className='flex flex-col gap-2'>
            <h3 className='text-brandPurple-700 text-5xl font-medium'>So, what do you think?</h3>
            <p className='text-gray-900'>
              Ready to get your good writting pen out? <br></br> This years mailing deadline is on the
              <span className='text-brandPurple-500'>10th of December 2022</span>
            </p>
          </header>
          <div className='flex flex-col gap-10 mt-14'>
            <div className='border-b  border-gray-400 block'></div>
            <div className='border-b  border-gray-400 block'></div>
            <div className='border-b  border-gray-400 block w-3/4'></div>
          </div>
        </div>
        <div className='w-full md:w-1/2 flex flex-col-reverse md:flex-col gap-8  items-center'>
          <div className='bg-white relative shadow-2xl shadow-brandPurple-200 p-8 w-[300px] md:w-[350px] rounded-t-2xl rounded-br-2xl speech-bubble mb-8 '>
            <div className='flex flex-col gap-4'>
              <h3 className='text-brandPurple-700 font-bold uppercase'>our Address is</h3>
              <div>
                <p className='text-xl'>Santa Claus' Main Post Office </p>
                <p>Tahtikuja 1, 96930 Arctic Circle,</p>
                <p className='text-gray-900 font-bold uppercase'>Finland</p>
              </div>
            </div>
          </div>
          <div className='pt-5 flex gap-3'>
            <div className='flex flex-col items-center justify-center '>
              <div className='w-24'>
                <img src={Lettericon} alt=' sobre ilustracion' />
              </div>
              <div className='w-16 opacity-60'>
                <img src={Lettericon} alt=' sobre ilustracion' />
              </div>
            </div>
            <div className='flex flex-col items-start justify-center gap-8'>
              <div className='w-14 opacity-40'>
                <img src={Lettericon} alt=' sobre ilustracion' />
              </div>
              <div className='w-24 opacity-10'>
                <img src={Lettericon} alt=' sobre ilustracion' />
              </div>
            </div>
            <div className='flex flex-col items-center justify-between '>
              <div className='w-24'></div>
              <div className='w-16 opacity-60 self-start'>
                <img src={Lettericon} alt=' sobre ilustracion' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
