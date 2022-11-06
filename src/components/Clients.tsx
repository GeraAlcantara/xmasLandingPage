// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Grinch from "../assets/grinchProfile.png";
import Homealone from "../assets/homealone.png";
import Jack from "../assets/jack.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import CardClients from "./CardClients";

function Clients() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className='w-full m-auto mt-16'>
      <SwiperSlide className='flex justify-center items-center'>
        <CardClients
          author='- Kevin McCallister'
          quote={`It's great; I asked my family not to forget me again at Christmas and it worked!😉`}
          image={Homealone}
          altTxt='Kevin McCallister'
        ></CardClients>
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center '>
        <CardClients
          author='- El Grinch'
          quote={`No no no, never send a letter to Santa Claus, he's a fat liar!!! 😡`}
          image={Grinch}
          altTxt='El grinch'
        ></CardClients>
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>
        <CardClients
          author='- Jack Skellington'
          quote={`I think this year has been the least horrible, since I discovered SantaTracker I don't lose Santa Claus anymore 🤣`}
          image={Jack}
          altTxt='Jack Skellington'
        ></CardClients>
      </SwiperSlide>
    </Swiper>
  );
}

export default Clients;
