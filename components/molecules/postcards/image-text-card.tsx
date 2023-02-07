import React from 'react';
import Image from 'next/image';

const ImageTextCard = ({ data }: { data: any }) => {
  return (
    <div className='py-5'>
      <div className='max-w-[18rem] border border-gray-200 rounded-md shadow'>
        <Image
          className='rounded-t-md'
          width={300}
          height={50}
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
