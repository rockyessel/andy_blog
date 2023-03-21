import { Layout } from '@/components';
import { AllCategoryProps } from '@/interface';
import { AllCategory } from '@/utils/query';
import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import React from 'react';

const Categories = (
  props: InferGetServerSidePropsType<typeof getStaticProps>
) => {
  console.log('categories', props?.categories);
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
        <main className='w-full lg:h-[49.9vh] bg-black/70 flex flex-col lg:flex-row gap-5 px-4 lg:px-6 xl:px-20 py-5'>
          <ul>
            {props?.categories?.map((category, index) => (
              <Link key={index} href={`/categories/${category?.slug?.current}`}>
                <li>{category?.title}</li>
              </Link>
            ))}
          </ul>
        </main>
      </Layout>
    </>
  );
};

export default Categories;

export const getStaticProps: GetStaticProps<{
  categories: AllCategoryProps[];
}> = async (context) => {
  const categories: AllCategoryProps[] = await AllCategory();

  if (!categories) return { notFound: true };

  return {
    props: { categories: JSON.parse(JSON.stringify(categories)) },
    revalidate: 10,
  };
};
