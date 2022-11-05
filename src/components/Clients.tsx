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
    <Swiper navigation={true} modules={[Navigation]} className='w-[90%] md:w-full m-auto mt-16'>
      <SwiperSlide className='flex justify-center items-center '>
        <CardClients
          author='- El Grinch'
          quote='No no no, nunca le manden carta a Santa Claus es un gordito mentiroso!!! 😡'
          image={Grinch}
          altTxt='El grinch'
        ></CardClients>
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>
        <CardClients
          author='- Kevin McCallister'
          quote='Es Genial; pedí que no me olvidarán mi familia otra vez en Navidad y funciono 🤣'
          image={Homealone}
          altTxt='Kevin McCallister'
        ></CardClients>
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>
        <CardClients
          author='- Jack Skellington'
          quote='“Creo que este año ha sido el menos horrible, ya que descubri SantaTracker ya no pierdo a Santa Claus 🤣'
          image={Jack}
          altTxt='Jack Skellington'
        ></CardClients>
      </SwiperSlide>
    </Swiper>
  );
}

export default Clients;
