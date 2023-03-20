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
import { TfiFacebook } from 'react-icons/tfi';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { TbBrandReddit } from 'react-icons/tb';
import { FaFlipboard } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { PortableText } from '@portabletext/react';

const Post = (props: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const router = useRouter();

  console.log('data', props?.post_data);

  if (router.isFallback) return <p>404</p>;

  return (
    <main className='max_screen:w-full max_screen:px-4 px-4 xl:w-[80rem] mx-auto pb-10'>
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

        <div className='w-full flex flex-col lg:flex-row justify-between gap-5'>
          <div className='lg:w-[45rem] prose-lg'>
            <article>
              <PortableText value={props?.post_data?.body} />
            </article>

            <div>
              <div>
                <div className='flex flex-wrap items-center justify-between'>
                  <a
                    href='www.facebook.com'
                    target='_blank'
                    title='Share on Facebook'
                    className='bg-[#3156ad] font-medium text-white inline-flex items-center gap-1 rounded-sm py-1 px-3'
                  >
                    <TfiFacebook className='text-xl' /> Share
                  </a>
                  <a
                    href='www.facebook.com'
                    target='_blank'
                    title='Share on Facebook'
                    className='bg-[#21acdf] font-medium text-white inline-flex items-center gap-1 rounded-sm py-1 px-3'
                  >
                    <BsTwitter className='text-xl' /> Tweet
                  </a>
                  <a
                    href='www.facebook.com'
                    target='_blank'
                    title='Share on Facebook'
                    className='bg-[#2179d1] font-medium text-white inline-flex items-center gap-1 rounded-sm py-1 px-3'
                  >
                    <BsLinkedin className='text-xl' /> Share
                  </a>
                  <a
                    href='www.facebook.com'
                    target='_blank'
                    title='Share on Facebook'
                    className='bg-[#f05e31] font-medium text-white inline-flex items-center gap-1 rounded-sm py-1 px-3'
                  >
                    <TbBrandReddit className='text-xl' /> Share
                  </a>
                  <a
                    href='www.facebook.com'
                    target='_blank'
                    title='Share on Facebook'
                    className='bg-[#e9483d] font-medium text-white inline-flex items-center gap-1 rounded-sm py-1 px-3'
                  >
                    <FaFlipboard className='text-xl' /> Share
                  </a>
                  <a
                    href='www.facebook.com'
                    target='_blank'
                    title='Share on Facebook'
                    className='bg-[#42484e] font-medium text-white inline-flex items-center gap-1 rounded-sm py-1 px-3'
                  >
                    <FiLink className='text-xl' /> Copy
                  </a>
                  <a
                    href='www.facebook.com'
                    target='_blank'
                    title='Share on Facebook'
                    className='bg-[#bdc3cc] font-medium text-white inline-flex items-center gap-1 rounded-sm py-1 px-3'
                  >
                    <MdEmail className='text-xl' /> Email
                  </a>
                </div>

                <div className='m-0 p-0'>
                  <p className='text-xl font-bold'>Related Topics</p>
                  <ul className='uppercase text-xs font-medium flex items-center flex-wrap gap-2'>
                    <li className='bg-gray-400/60 rounded-sm py-1 px-2'>
                      tech
                    </li>
                    <li className='bg-gray-400/60 rounded-sm py-1 px-2'>
                      one-piece
                    </li>
                  </ul>
                </div>

                <div className='m-0 p-0'>
                  <p className='text-xl font-bold'>About The Author</p>
                  <p className='flex items-center gap-1 text-xs'>
                    <span className='font-medium'>Shikhar Mehrotra</span>{' '}
                    <span>(384 Articles Published)</span>
                  </p>
                  <p>
                    Fascinated by companies like Apple and Samsung, Shikhar has
                    covered consumer tech for three years. His favorite topics
                    include how-to explainers, guides, and features with a
                    helpful point of view that makes tech ...
                  </p>
                </div>
              </div>
            </div>
          </div>

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
