import React from 'react';
import {
  Hero,
  ImageCard,
  ImageTextCard,
  ImageTextDescCard,
} from '@/components';
import { data } from '@/utils/services';

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <main className='px-6 flex flex-col gap-5 my-16'>
        <div>
          <ul className='grid grid-cols-3 gap-4'>
            {data?.slice(0, 5)?.map((data, index) => (
              <ImageCard key={index} data={data} />
            ))}
          </ul>
        </div>
        <section className='flex flex-wrap justify-between'>
          <section className='flex flex-col gap-5'>
            <div>
              <h2>Recent</h2>
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
