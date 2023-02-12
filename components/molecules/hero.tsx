import React from 'react';
import { FaPlay } from 'react-icons/fa';
import Navbar from '../atoms/navbar';

const Hero = () => {
  return (
    <>
      <div className='bg-[url("/g.jpg")] bg-no-repeat bg-cover w-full text-white'>
        <Navbar />
        <div className='bg-black/60 w-full h-[50vh] flex justify-center items-center py-10 md:py-40'>
          {/* <Image className='w-full object-cover object-center' src='/g.jpg' width={1000} height={1000} alt='' /> */}
          <div className='px-6 lg:px-16 xl:px-36 flex flex-col gap-2 md:mb-20 lg:text-2xl'>
            <span>⭐ 7.5/10</span>
            <p className='text-2xl md:text-3xl lg:text-4xl lx:text-5xl font-bold'>
              Black Panther: Wakanda Forever
            </p>
            <p className='md:text-xl max-w-7xl lg:w-full'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              repellat voluptatibus nihil suscipit nemo ab, dolorem sed
              reprehenderit, illo magni quos assumenda accusamus dolores porro
              nostrum voluptas ipsam dolorum nulla? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Fugiat repellat voluptatibus nihil
              suscipit nemo ab, dolorem sed reprehenderit, illo magni quos
            </p>
            <p className='text-yellow-600 font-medium'>
              <span>Action</span> / <span>Adventure</span> /{' '}
              <span>Science Fiction</span>
            </p>

            <button className='bg-red-500 inline-flex items-center gap-2 rounded-xl px-4 py-2 w-fit'>
              <FaPlay />
              Play Trailer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
