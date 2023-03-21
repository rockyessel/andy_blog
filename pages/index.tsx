import React from 'react';
import {
  Hero,
  Layout,
  ImageCard,
  ImageTextCard,
  ImageTextDescCard,
} from '@/components';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { AllPostData, AllTopics } from '@/utils/query';
import { AllTopicsProps, PostProps } from '@/interface';

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {

  console.log(props)
  return (
    <Layout
      description={''}
      title={''}
      image={''}
      type={''}
      alt={''}
      keywords={''}
      publishedAt={''}
      updatedAt={''}
      MIME={''}
      author_name={''}
    >
      <Hero />

      <main className='flex flex-col gap-5 pb-10'>
        <section className='w-full lg:h-[30rem] bg-black/70 flex flex-col lg:flex-row gap-5 px-4 lg:px-6 xl:px-20 py-5'>
          <ul className='flex'>
            {props?.data?.slice(0, 1)?.map((data, index) => (
              <ImageCard key={index} data={data} />
            ))}
          </ul>

          <ul className='grid sm:grid-cols-2 gap-4'>
            {props?.data?.slice(1, 5)?.map((data, index) => (
              <ImageCard class={'h-full'} key={index} data={data} />
            ))}
          </ul>
        </section>

        <section className='flex flex-col lg:flex-row gap-5 lg:gap-3 justify-between px-4 lg:px-6 xl:px-20 py-5'>
          <section className='flex flex-col gap-5'>
            <div>
              <h2 className='text-xl font-bold'>Recent</h2>
              <ul className='flex flex-col divide-y-[1px]'>
                {props?.data
                  ?.sort(
                    (a, b) =>
                      new Date(b.publishedAt).getTime() -
                      new Date(a.publishedAt).getTime()
                  )
                  ?.map((data, index) => (
                    <ImageTextDescCard key={index} data={data} />
                  ))}
              </ul>
            </div>

            <div>
              <h2 className='text-xl font-bold'>Anime</h2>
              <ul className='grid grid-cols-1 divide-y-[1px]'>
                {props?.data
                  ?.sort(
                    (a, b) =>
                      new Date(b.publishedAt).getTime() -
                      new Date(a.publishedAt).getTime()
                  )
                  ?.map(
                    (data, index) =>
                      data.category?.title === 'Anime' && (
                        <ImageTextDescCard key={index} data={data} />
                      )
                  )}
              </ul>
            </div>

            <div>
              <h2 className='text-xl font-bold'>Technology</h2>
              <ul className='grid grid-cols-1 divide-y-[1px]'>
                {props?.data
                  ?.sort(
                    (a, b) =>
                      new Date(b.publishedAt).getTime() -
                      new Date(a.publishedAt).getTime()
                  )
                  ?.map(
                    (data, index) =>
                      data.category?.title === 'Technology' && (
                        <ImageTextDescCard key={index} data={data} />
                      )
                  )}
              </ul>
            </div>

            <div>
              <h2 className='text-xl font-bold'>Reality TV</h2>
              <ul className='grid grid-cols-1 divide-y-[1px]'>
                {props?.data
                  ?.sort(
                    (a, b) =>
                      new Date(b.publishedAt).getTime() -
                      new Date(a.publishedAt).getTime()
                  )
                  ?.map(
                    (data, index) =>
                      data.category?.title === 'Reality TV' && (
                        <ImageTextDescCard key={index} data={data} />
                      )
                  )}
              </ul>
            </div>
          </section>

          <section className='lg:w-[19rem] xl:w-[23rem]'>
            <div>
              <h3 className='text-xl font-bold'>Featured</h3>
              <ul className='grid screen_fold:grid-cols-1 grid-cols-2 lg:grid-cols-1 divide-y-[1px]'>
                {props?.data
                  ?.sort(
                    (a, b) =>
                      new Date(b.publishedAt).getTime() -
                      new Date(a.publishedAt).getTime()
                  )
                  ?.slice(0, 4)
                  ?.map(
                    (data, index) =>
                      data?.featured === true && (
                        <ImageTextCard
                          mainClass={`flex-col m-1`}
                          class={`h-[10rem] object-cover object-top`}
                          key={index}
                          data={data}
                        />
                      )
                  )}
              </ul>
            </div>

            <div className='flex flex-col gap-2 sticky top-0'>
              <div>
                <h3 className='text-xl font-bold'>Recommended</h3>
                <ul className='grid grid-cols-1 divide-y-[1px]'>
                  {props?.data
                    ?.sort(
                      (a, b) =>
                        new Date(b.publishedAt).getTime() -
                        new Date(a.publishedAt).getTime()
                    )
                    // ?.slice(0, 3)
                    ?.map(
                      (data, index) =>
                        data?.recommended === true && (
                          <ImageTextCard
                            class={`w-[5rem]`}
                            key={index}
                            data={data}
                          />
                        )
                    )}
                </ul>
              </div>

              <div className='flex flex-col gap-4'>
                <p className='text-xl font-bold'>Upcoming Movies</p>
                <ul className='flex flex-col gap-5'>
                  {props?.topics?.map((topic, index) => (
                    <li key={index} className='inline-flex items-center gap-2'>
                      <span className='py-1 font-extrabold px-3 border-[1px] border-black'>
                        {index + 1}
                      </span>
                      <span className='font-medium leading-none tracking-tighter w-full text-lg'>
                        {topic.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<{ data: PostProps[]; topics: AllTopicsProps[] }> = async () => {
  const data: PostProps[] = await AllPostData();
  const topics: AllTopicsProps[] = await AllTopics();

    if (!data || !topics) return { notFound: true };

  return {
    props: JSON.parse(JSON.stringify({data, topics })),
  };
};
