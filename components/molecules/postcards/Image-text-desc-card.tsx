import Image from 'next/image';
import React from 'react';

const ImageTextDescCard = ({ data }: { data: any }) => {
  return (
    <div className='py-5'>
      <div className='flex flex-col md:flex-row max-w-3xl'>
        <Image
          className='w-[20rem]'
          width={1000}
          height={1000}
          src={data?.image}
          alt='Deadpool'
          title='Deadpool'
        />
        <div className='px-3 py-3 flex flex-col gap-4'>
          <header className='flex flex-col gap-2'>
            <span className='uppercase font-bold text-sm text-yellow-500'>
              {data?.category}
            </span>
            <h2 className='capitalize font-bold text-3xl leading-none tracking-tighter'>
              {data?.name}
            </h2>
            <p>{data?.description}</p>
          </header>
          <footer className='uppercase flex items-center gap-4 text-black/60 text-xs'>
            <p>
              By{' '}
              <span className='text-black/80 font-medium'>{data?.author}</span>
            </p>
            <p>{data?.estimated_time} minutes ago</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ImageTextDescCard;
