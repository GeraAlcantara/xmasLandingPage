import React from "react";
import Logo from "./Logo";
import { AiFillBell } from "react-icons/ai";
import { RiMenuLine, RiCloseFill } from "react-icons/ri";

function Header() {
  /* mobile menu states showmenu */
  const [showMenu, setShowMenu] = React.useState(false);
  /* handle show menu */
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='bg-brandPurple-700 py-2 px-6 lg:py-8'>
      <div className='container flex justify-between m-auto'>
        <Logo />
        <nav className=' hidden lg:flex items-center gap-4 '>
          <ul className='flex  gap-4 font-light'>
            <li className='text-white text-xl '>
              <a href='#'>Home</a>
            </li>
            <li className='text-white text-xl '>
              <a href='#'>About</a>
            </li>
            <li className='text-white text-xl '>
              <a href='#'>My Whislist</a>
            </li>
            <li className='text-white text-xl '>
              <a href='#'>
                COVID Restrictions <span className='bg-brandRed text-white px-3 py-1 ml-1 font-medium rounded-full leading-tight text-sm'>New</span>
              </a>
            </li>
          </ul>
          <button className='border-2 border-white rounded-xl bg-white/30 inline-flex justify-center items-center py-2 px-6 text-white hover:scale-[1.01] transition-all hover:bg-white/10 ml-8'>
            <AiFillBell className='text-white text-2xl mr-2' />
            Notify Me!
          </button>
        </nav>
        <button onClick={handleShowMenu} className=' bg-brandPurple-400 rounded-lg text-gray-900  lg:hidden '>
          <span className='sr-only'>menu</span>
          <RiMenuLine className=' text-2xl p-2 box-content' />
        </button>
        {/* mobile menu */}
        <div className={`${showMenu ? "block" : "hidden"} lg:hidden `}>
          <div className='bg-brandPurple-700 absolute top-0 left-0 w-full min-h-screen z-50'>
            <div className='container m-auto'>
              <div className=' flex justify-end py-2 px-6 m-auto'>
                <button onClick={handleShowMenu} className=' bg-brandPurple-400 rounded-lg text-gray-900 '>
                  <span className='sr-only'>close</span>
                  <RiCloseFill className=' text-2xl p-2 box-content' />
                </button>
              </div>
              <ul className='flex flex-col gap-4 font-light h-[calc(100vh-200px)] justify-around items-center'>
                <li className='text-white text-xl '>
                  <a href='#'>Home</a>
                </li>
                <li className='text-white text-xl '>
                  <a href='#'>About</a>
                </li>
                <li className='text-white text-xl '>
                  <a href='#'>My Whislist</a>
                </li>
                <li className='text-white text-xl '>
                  <a href='#'>
                    COVID Restrictions <span className='bg-brandRed text-white px-3 py-1 ml-1 font-medium rounded-full leading-tight text-sm'>New</span>
                  </a>
                </li>
              </ul>
              <div className='flex justify-center'>
                <button className='border-2 border-white rounded-xl bg-white/30 inline-flex justify-center items-center py-2 px-6 text-white hover:scale-[1.01] transition-all hover:bg-white/10 '>
                  <AiFillBell className='text-white text-2xl mr-2' />
                  Notify Me!
                </button>
              </div>
            </div>
            {/* close button */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
