import React from "react";

interface CardClientsProps {
  quote: string;
  author: string;
  image: string;
  altTxt: string;
}

function CardClients({ author, quote, image, altTxt }: CardClientsProps) {
  return (
    <div className='flex flex-col w-[75%] lg:flex-row items-center portrait:min-h-[372px] portrait:md:min-h-0  md:min-h-0 gap-4 p-8 bg-brandPurple-600 rounded-2xl md:w-1/2 justify-center'>
      {/* Profile */}
      <div className='w-20 h-20 flex justify-center rounded-full overflow-hidden  bg-brandPurple-400 flex-shrink-0'>
        <img className='object-cover ' src={image} alt={altTxt} />
      </div>
      {/* review */}
      <blockquote className='flex-1 text-center md:text-left '>
        <p className='text-brandPurple-50 text-xl mb-2'>{quote}</p>
        <cite className='text-2xl text-brandPurple-400'>{author}</cite>
      </blockquote>
    </div>
  );
}

export default CardClients;
