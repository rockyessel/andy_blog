import React from 'react';
import { CommonPath, Params, SpecificCategoryProps } from '@/interface';
import { CommonPathProps, SpecificCategory } from '@/utils/query';
import { GetStaticPaths, GetStaticProps, InferGetServerSidePropsType } from 'next';
import { ImageCard, ImageTextDescCard, Layout } from '@/components';

const Category = ( props: InferGetServerSidePropsType<typeof getStaticProps> ) => {
  

  return (
    <>
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
        <main>
          <section className='w-full lg:h-[30rem] bg-black/70 flex flex-col lg:flex-row gap-5 px-4 lg:px-6 xl:px-20 py-5'>
            <ul className='flex'>
              {props?.result?.map((data, index) => (
                <React.Fragment key={index}>
                  {data?.post
                    ?.sort(
                      (a, b) =>
                        new Date(b.publishedAt).getTime() -
                        new Date(a.publishedAt).getTime()
                    )
                    ?.slice(0, 1)
                    ?.map(
                      (post, index) =>
                        post?.featured === true && (
                          <ImageCard class={'h-full'} key={index} data={post} />
                        )
                    )}
                </React.Fragment>
              ))}
            </ul>

            <ul className='grid sm:grid-cols-2 gap-4'>
              {props?.result?.map((data, index) => (
                <React.Fragment key={index}>
                  {data?.post
                    ?.sort(
                      (a, b) =>
                        new Date(b.publishedAt).getTime() -
                        new Date(a.publishedAt).getTime()
                    )
                    ?.slice(1, 5)
                    ?.map(
                      (post, index) =>
                        post?.featured === true && (
                          <ImageCard class={'h-full'} key={index} data={post} />
                        )
                    )}
                </React.Fragment>
              ))}
            </ul>
          </section>

          <section className='flex flex-col lg:flex-row gap-5 lg:gap-3 justify-between px-4 lg:px-6 xl:px-20 py-5'>
            <div>
              <h2 className='text-xl font-bold'>Recent</h2>
              <ul className='flex flex-col divide-y-[1px]'>
                {props?.result?.map((data, index) => (
                  <React.Fragment key={index}>
                    {data?.post
                      ?.sort(
                        (a, b) =>
                          new Date(b.publishedAt).getTime() -
                          new Date(a.publishedAt).getTime()
                      )
                      ?.map((post, index) => (
                        <ImageTextDescCard key={index} data={post} />
                      ))}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Category;

export const getStaticPaths: GetStaticPaths = async () => {
  const category_paths: CommonPath[] = await CommonPathProps('category');

  const paths = category_paths.map((path) => ({
    params: {
      category: path.slug.current,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{ result: SpecificCategoryProps[] }> = async (context) => {
  const { category }: any = context.params as Params;

  const result: SpecificCategoryProps[] = await SpecificCategory(category);

  if (!result) return { notFound: true };

  return {
    props: { result: JSON.parse(JSON.stringify(result)) },
    revalidate: 10,
  };
};
