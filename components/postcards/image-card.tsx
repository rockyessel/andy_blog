import React from 'react';
import Image from 'next/image';

const ImageCard = ({ data }: { data: any }) => {
  return (
    <div className='group w-full h-[20rem] relative first:col-span-2 overflow-hidden bg-no-repeat border border-gray-200 rounded-lg shadow'>
      <Image
        className='w-full h-full object-cover rounded-md'
        src={data?.image}
        width={1000}
        height={1000}
        alt='deadpool 3'
      />
      <header className='absolute py-6 bg-inherit bg-fixed bottom-0 left-0 w-full px-2 cursor-pointer before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-black/70 before:to-black/75'>
        <h1 className='relative m-0 flex flex-col text-white text-2xl font-bold'>
          <span className='text-sm'>{data?.category}</span>
          <span className='group-hover:underline'>{data?.name}</span>
        </h1>
      </header>
    </div>
  );
};

export default ImageCard;
