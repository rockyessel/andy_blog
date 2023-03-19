import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ImageTextDescCard = ({ data }: { data: any }) => {
  return (
    <Link href='/'>
      <li className='py-5'>
        <div className='flex flex-col items-center md:flex-row lg:max-w-3xl xl:max-w-4xl'>
          <Image
            className='w-full md:w-[20rem] lg:w-[25rem] lg:h-[13rem] object-cover object-top'
            width={1000}
            height={1000}
            src={data?.image}
            alt='Deadpool'
            title='Deadpool'
          />
          <div className='px-3 py-3 flex flex-col gap-2'>
            <header className='flex flex-col gap-1'>
              <span className='uppercase font-bold text-sm text-yellow-500'>
                {data?.category}
              </span>
              <h2 className='capitalize font-bold md:text-2xl lg:text-3xl screen_fold:text-lg leading-none tracking-tighter'>
                {data?.name}
              </h2>
              <p className='text-lg screen_fold:text-sm'>{data?.description}</p>
            </header>
            <footer className='uppercase flex items-center gap-4 text-black/60 text-xs'>
              <p>
                By{' '}
                <span className='text-black/80 font-medium'>
                  {data?.author}
                </span>
              </p>
              <p className=' '>{data?.estimated_time} minutes ago</p>
            </footer>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default ImageTextDescCard;
