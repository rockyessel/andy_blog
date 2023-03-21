import React from 'react';
import Image from 'next/image';
import { PostProps } from '@/interface';

export interface ImageTextCardProps {
  mainClass?: string;
  class?: string;
  data: PostProps;
}

const ImageTextCard = (props: ImageTextCardProps) => {
  return (
    <div className={`py-2`}>
      <div className={`flex items-center ${props.mainClass}`}>
        <Image
          className={`h-auto ${props.class}`}
          width={1000}
          height={1000}
          src={props?.data?.image}
          alt=''
        />
        <h3 className='capitalize w-fit font-medium text-lg leading-none tracking-tighter px-1 py-2'>
          {props?.data?.title}
        </h3>
      </div>
    </div>
  );
};

export default ImageTextCard;
