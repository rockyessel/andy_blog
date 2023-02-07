import React from 'react';
import {
  GetStaticProps,
  GetStaticPaths,
  InferGetServerSidePropsType,
} from 'next';
import { CommonPathProps, PostDetailsData } from '@/utils/query';
import { CommonPath, Params } from '@/interface';
import { useRouter } from 'next/router';

const Post = (props: InferGetServerSidePropsType<typeof getStaticProps>) => {


  const router = useRouter();

      if (router.isFallback) return <p>404</p>;

  return <div>Post</div>;
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const post_paths: CommonPath[] = await CommonPathProps('post');

  const paths = post_paths.map((path) => ({
    params: {
      post: path.slug.current,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{ post_data: any }> = async ( context ) => {
  const { post }: any = context.params as Params;

  const post_data: any = await PostDetailsData(post);

  if (!post_data) return { notFound: true };

  return {
    props: { post_data: JSON.parse(JSON.stringify(post_data)) },
  };
};
