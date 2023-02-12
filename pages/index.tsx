import React from 'react';
import {
  Hero,
  ImageCard,
  ImageTextCard,
  ImageTextDescCard,
} from '@/components';
import { data } from '@/utils/services';
import Image from 'next/image';

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <main className='w-full flex flex-col py-10 px-6'>
        <div className='flex flex-col gap-2'>
          <p className='text-3xl font-bold'>Recent Uploads</p>
          <ul className='w-full grid grid-cols-3 gap-x-5 gap-y-5'>
            <li className='flex flex-col gap-8 cursor-pointer'>
              <div className=''>
                <Image src='/g.jpg' width={1000} height={1000} alt='' />
              </div>

              <div className='text-xl flex flex-col gap-3'>
                <p className='text-sm font-medium'>
                  Phoenix barker・19 Jan 2023
                </p>

                <div className='mb-2'>
                  <p className='font-bold capitalize'>
                    How collaboration makes us better designers
                  </p>
                  <p className='text-lg'>
                    Linear helps streamline software projects, sprints. task,
                    and bug tracking. Here&apos;s how to get started.
                  </p>
                </div>

                <div className='flex gap-2 items-center text-lg'>
                  <span className='border-2 border-black/60 rounded-md px-3'>
                    Product
                  </span>
                  <span className='border-2 border-black/60 rounded-md px-3'>
                    Tools
                  </span>
                  <span className='border-2 border-black/60 rounded-md px-3'>
                    Saas
                  </span>
                  <span className='border-2 border-black/60 rounded-md px-3'>
                    Frameworks
                  </span>
                </div>
              </div>
            </li>

            <li className='flex flex-col gap-8 cursor-pointer'>
              <div className=''>
                <Image src='/g.jpg' width={1000} height={1000} alt='' />
              </div>

              <div className='text-xl flex flex-col gap-3'>
                <p className='text-sm font-medium'>
                  Phoenix barker・19 Jan 2023
                </p>

                <div className='mb-2'>
                  <p className='font-bold capitalize'>
                    How collaboration makes us better designers
                  </p>
                  <p className='text-lg'>
                    Linear helps streamline software projects, sprints. task,
                    and bug tracking. Here&apos;s how to get started.
                  </p>
                </div>

                <div className='flex gap-2 items-center text-lg'>
                  <span className='border-2 border-black/60 rounded-md px-3'>
                    Product
                  </span>
                  <span className='border-2 border-black/60 rounded-md px-3'>
                    Tools
                  </span>
                  <span className='border-2 border-black/60 rounded-md px-3'>
                    Saas
                  </span>
                  <span className='border-2 border-black/60 rounded-md px-3'>
                    Frameworks
                  </span>
                </div>
              </div>
            </li>

            <li className='flex flex-col gap-8 cursor-pointer'>
              <div className=''>
                <Image src='/g.jpg' width={1000} height={1000} alt='' />
              </div>

              <div className='text-xl flex flex-col gap-3'>
                <p className='text-sm font-medium'>
                  Phoenix barker・19 Jan 2023
                </p>

                <div className='mb-2'>
                  <p className='font-bold capitalize'>
                    How collaboration makes us better designers
                  </p>
                  <p className='text-lg'>
                    Linear helps streamline software projects, sprints. task,
                    and bug tracking. Here&apos;s how to get started.
                  </p>
                </div>

                <div className='flex gap-2 items-center text-lg'>
                  <span className='border-2 border-black/60 rounded-md px-3'>
                    Product
                  </span>
                  <span className='border-2 border-black/60 rounded-md px-3'>
                    Tools
                  </span>
                  <span className='border-2 border-black/60 rounded-md px-3'>
                    Saas
                  </span>
                  <span className='border-2 border-black/60 rounded-md px-3'>
                    Frameworks
                  </span>
                </div>
              </div>
            </li>
          </ul>

          <p className='w-full flex justify-center items-center gap-10 mt-8'>
            <span>Previous</span>
            <span className='flex gap-4 justify-center'>
              <span className='bg-black text-white px-3 py-1 rounded-md'>1</span>
              <span className='bg-black text-white px-3 py-1 rounded-md'>2</span>
              <span className='bg-black text-white px-3 py-1 rounded-md'>3</span>
              <span className='bg-black text-white px-3 py-1 rounded-md'>4</span>
            </span>
            <span>Next</span>
          </p>
        </div>
      </main>
    </React.Fragment>
  );
}

{
  /* <main className='px-6 flex flex-col gap-5 my-16'>
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
</main> */
}
