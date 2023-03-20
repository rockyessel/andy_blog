import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import moment from 'moment'
import { PostProps } from '@/interface';

const ImageTextDescCard = ({ data }: { data: PostProps }) => {

  console.log('data', data);
  return (
    <li className='py-5'>
      <Link href={`/posts/${data?.slug?.current}`}>
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
              <span className='text-sm text-yellow-500'>
                {data?.category?.title}
              </span>
              <h2 className='capitalize font-bold md:text-2xl lg:text-3xl screen_fold:text-lg leading-none tracking-tighter'>
                {data?.title}
              </h2>
              <p className='text-lg screen_fold:text-sm'>{data?.description}</p>
            </header>
            <footer className='uppercase flex items-center gap-1 text-black/60 text-xs'>
              <p>
                By{' '}
                <span className='text-black/80 font-medium'>
                  {data?.author.name}
                </span>
              </p>
              <p className=' '>
                PUBLISHED {moment(data?.publishedAt).startOf('hour').fromNow()}
              </p>
            </footer>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ImageTextDescCard;
