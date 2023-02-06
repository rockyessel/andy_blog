import React from 'react';
import Image from 'next/image';

const ImageTextCard = ({ data }: { data: any }) => {
  return (
    <div className=' py-5'>
      <div className='max-w-sm border border-gray-200 rounded-md shadow'>
        <Image
          className='rounded-t-md'
          width={500}
          height={100}
          src={data?.image}
          alt=''
        />
        <h3 className='capitalize font-bold text-lg px-2 py-2'>
        {data?.name}
        </h3>
      </div>
    </div>
  );
};

export default ImageTextCard;
