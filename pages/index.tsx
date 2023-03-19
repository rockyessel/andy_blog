import React from 'react';
import {
  Hero,
  ImageCard,
  ImageTextCard,
  ImageTextDescCard,
} from '@/components';
import { data } from '@/utils/services';
import Image from 'next/image';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';

export default function Home() {
  return (
    <React.Fragment>
      <Hero />

      <main className='flex flex-col gap-5'>
        <div className='w-full h-full bg-black/70 flex flex-col lg:flex-row gap-5 px-6 lg:px-16 xl:px-36 py-5'>
          <ul className='flex'>
            {data?.slice(0, 1)?.map((data, index) => (
              <ImageCard key={index} data={data} />
            ))}
          </ul>

          <ul className='grid sm:grid-cols-2 gap-4'>
            {data?.slice(1, 4)?.map((data, index) => (
              <ImageCard class={'h-full'} key={index} data={data} />
            ))}
          </ul>
        </div>
        
        <section className='flex flex-wrap justify-between px-6 lg:px-16 xl:px-36'>
          <section className='flex flex-col gap-5'>
            <div>
              <h2 className='text-xl font-bold'>Recent</h2>
              <ul className='flex flex-col divide-y-[1px]'>
                {data?.slice(0, 3)?.map((data, index) => (
                  <ImageTextDescCard key={index} data={data} />
                ))}
              </ul>
            </div>

            <div>
              <h2>Anime</h2>
              <ul className='grid grid-cols-1 divide-y-[1px]'>
                {data?.slice(0, 3)?.map((data, index) => (
                  <ImageTextDescCard key={index} data={data} />
                ))}
              </ul>
            </div>
          </section>

          <section className='flex flex-col gap-10'>
            <div>
              <h3>TRENDING</h3>
              <ul className='grid grid-cols-1 divide-y-[1px]'>
                {data?.slice(0, 3)?.map((data, index) => (
                  <ImageTextCard key={index} data={data} />
                ))}
              </ul>
            </div>
          </section>
        </section>
      </main>
    </React.Fragment>
  );
}
