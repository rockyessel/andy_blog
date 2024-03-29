import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PostProps } from '@/interface';

interface ImageCardProps {
  data: PostProps;
  class?: string;
}

const ImageCard = (props: ImageCardProps) => {
  return (
    <li
      className={`group w-full relative overflow-hidden bg-no-repeat shadow shadow-white/10 ${props.class}`}
    >
      <Link href={`/posts/${props?.data?.slug?.current}`}>
        <Image
          className='w-full h-full object-cover'
          src={props?.data?.image}
          width={1000}
          height={1000}
          alt={props?.data?.title}
          title={props?.data?.title}
        />
        <header className='absolute py-5 bg-inherit bg-fixed bottom-0 left-0 w-full px-2 cursor-pointer before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-gray-800/70 before:to-gray-900/75'>
          <h1 className='relative m-0 flex flex-col text-white sm:text-lg md:text-xl font-bold'>
            <Link href={`/categories/${props?.data?.category?.slug?.current}`}>
              <span className='text-sm text-yellow-500'>
                {props?.data?.category?.title}
              </span>
            </Link>
            <span className='group-hover:underline'>{props?.data?.title}</span>
          </h1>
        </header>
      </Link>
    </li>
  );
};

export default ImageCard;
