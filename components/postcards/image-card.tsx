import React from 'react';
import Image from 'next/image';

const ImageCard = () => {
  return (
    <div className='group relative overflow-hidden bg-no-repeat'>
      <Image src='/deadpool.png' width={1000} height={1000} alt='deadpool 3' />
      <header className='absolute py-6 bg-inherit bg-fixed bottom-0 left-0 w-full px-2 cursor-pointer before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-black/70 before:to-black/75'>
        <h1 className='relative m-0 flex flex-col text-white text-3xl font-bold'>
          <span className='text-sm'>SR ORDINAL</span>
          <span className='group-hover:underline'>
            8 Marvel Franchises Avengers: Secret Wars Can Make MCU Canon
          </span>
        </h1>
      </header>
    </div>
  );
};

export default ImageCard;
