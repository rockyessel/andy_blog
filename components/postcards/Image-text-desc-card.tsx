import Image from 'next/image';
import React from 'react';

const ImageTextDescCard = ({ data }: { data: any }) => {
  return (
    <div className='py-5'>
      <div className='flex max-w-3xl border border-gray-200 rounded-md shadow'>
        <Image
          className='rounded-l-md'
          width={300}
          height={100}
          src={data?.image}
          alt='Deadpool'
          title='Deadpool'
        />
        <div className='px-3 py-3 flex flex-col gap-4'>
          <header className='flex flex-col gap-2'>
            <span className='uppercase font-bold text-sm'>
              {data?.category}
            </span>
            <h2 className='capitalize font-bold text-xl'>{data?.name}</h2>
            <p>{data?.description}</p>
          </header>
          <footer className='uppercase flex items-center gap-4 text-black/30 text-sm'>
            <p>
              By
              <span className='text-black/60 font-medium'>{data?.author}</span>
            </p>
            <p>{data?.estimated_time} minutes ago</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ImageTextDescCard;
