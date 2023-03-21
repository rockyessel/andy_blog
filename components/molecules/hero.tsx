import React from 'react';
import { FaPlay } from 'react-icons/fa';
import Navbar from '../atoms/navbar';

const Hero = () => {
  const homeSlider = ['c', 'c', 'c'];

  const [currentSlider, setCurrentSlider] = React.useState(1);

  const imageLength = homeSlider.length;
  const repeat = currentSlider === imageLength ? 1 : currentSlider + 1;

  const handleMoveDot = (index: number) => {
    setCurrentSlider(index);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlider(repeat);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentSlider, repeat]);

  return (
    <>
      {homeSlider?.map(
        (data, index) =>
          data?.length === currentSlider && (
            <div
              key={index}
              className='bg-[url("/g.jpg")] main animation_for_slider relative box-border overflow-hidden bg-no-repeat bg-cover w-full text-white'
            >
              <Navbar />
              <div className='bg-black/60 w-full h-[50vh] flex justify-center items-center py-10 md:py-40'>
                {/* <Image className='w-full object-cover object-center' src='/g.jpg' width={1000} height={1000} alt='' /> */}
                <div className='px-4 lg:px-6 xl:px-20 flex flex-col gap-2 md:mb-20 lg:text-2xl'>
                  <span>⭐ 7.5/10</span>
                  <p className='text-2xl md:text-3xl lg:text-4xl lx:text-5xl font-bold'>
                    Black Panther: Wakanda Forever
                  </p>
                  <p className='md:text-xl max-w-7xl lg:w-full'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat repellat voluptatibus nihil suscipit nemo ab, dolorem
                    sed reprehenderit, illo magni quos assumenda accusamus
                    dolores porro nostrum voluptas ipsam dolorum nulla? Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                    repellat voluptatibus nihil suscipit nemo ab, dolorem sed
                    reprehenderit, illo magni quos
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
          )
      )}

      <div className={'flex justify-center gap-3 relative bottom-[2rem]'}>
        {Array.from({ length: imageLength }).map((dot, index) => {
          return (
            <div
              key={index}
              onClick={() => handleMoveDot(index + 1)}
              className={`${
                currentSlider === index + 1
                  ? 'w-[3rem] h-2  bg-blue-500 transition-all duration-500 ease-in-out '
                  : 'w-[1rem] h-2'
              } rounded-md  bg-gray-200`}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default Hero;
