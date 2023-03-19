import React from 'react';
import Image from 'next/image';

const ImageTextCard = ({ data }: { data: any }) => {
  return (
    <div className='py-5'>
      <div className='max-w-[10rem] flex items-center shadow'>
        <Image
          className='w-auto h-auto'
          width={1000}
          height={1000}
          src={data?.image}
          alt=''
        />
        <h3 className='capitalize w-fit font-bold text-md px-1 py-2'>
          {data?.name}
        </h3>
      </div>
    </div>
  );
};

export default ImageTextCard;
