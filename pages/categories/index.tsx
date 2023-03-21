import { Layout } from '@/components';
import { AllCategoryProps } from '@/interface';
import { AllCategory } from '@/utils/query';
import { GetStaticProps, InferGetServerSidePropsType } from 'next';
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
        <main>hello</main>
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
