import React from 'react';
import {
  GetStaticProps,
  GetStaticPaths,
  InferGetServerSidePropsType,
} from 'next';
import { CommonPathProps, PostDetailsData } from '@/utils/query';
import { CommonPath, Params } from '@/interface';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Breadcrumb, ImageTextCard } from '@/components';
import { data } from '@/utils/services';
import { FaFacebookSquare } from 'react-icons/fa';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

const Post = (props: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const router = useRouter();

console.log('data', props?.post_data);

  if (router.isFallback) return <p>404</p>;

  return (
    <main className='max_screen:w-full max_screen:px-4 px-4 xl:w-[80rem] mx-auto'>
      <Breadcrumb>
        <span>Home</span>
        <span>Movies</span>
      </Breadcrumb>
      <div className='flex flex-col gap-2'>
        <h1 className='text-4xl font-bold capitalize tracking-tighter leading-none'>
          Did Better Call Saul Redeem Saul In The End? Howard Actor Responds How
          IT jobs and recruiting on the dark web might trick you
        </h1>
        <p className='text-lg'>
          After the ending of Better Call Saul, it&apos;s hard to decide if Saul
          Goodman was truly redeemed. Howard actor Patrick Fabian gives his
          view.
        </p>

        <div className='inline-flex items-center gap-1 text-xs uppercase'>
          <p>
            By <span className='text-black font-medium'>LUKAS SHAYO</span>
          </p>
          <p>
            PUBLISHED <span className='text-black font-medium'>29 MINUTES</span>{' '}
            AGO
          </p>
        </div>
      </div>

      <section className='w-full flex flex-col gap-4 mt-5'>
        <div className='w-full'>
          <Image
            src='/howard-in-better-call-saul-1.avif'
            className='w-full max-h-[35rem]'
            width={1000}
            height={1000}
            alt=''
          />
        </div>

        <div className='w-full flex flex-wrap justify-between gap-5'>
          <article className='xl:w-[50rem] prose-lg'>
            <PortableText value={props?.post_data?.body} />
          </article>

          <section className='flex-1 sticky top-0 flex flex-col gap-10 md:w-[20rem]'>
            <div>
              <h3 className='text-xl font-bold'>TRENDING</h3>
              <ul className='grid grid-cols-1 divide-y-[1px]'>
                {data?.slice(0, 3)?.map((data, index) => (
                  <ImageTextCard class={`w-[5rem]`} key={index} data={data} />
                ))}
              </ul>
            </div>
          </section>
        </div>

        <section></section>
      </section>
    </main>
  );
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

export const getStaticProps: GetStaticProps<{ post_data: any }> = async (
  context
) => {
  const { post }: any = context.params as Params;

  const post_data: any = await PostDetailsData(post);

  if (!post_data) return { notFound: true };

  return {
    props: { post_data: JSON.parse(JSON.stringify(post_data)) },
    revalidate: 10,
  };
};
