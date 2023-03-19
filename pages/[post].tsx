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

const Post = (props: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const breadcum = [
    'home',
    'movie',
    "New X-Men Cosplay Brings Professor X's Krakoa-Era Costume To Life",
  ];

  if (router.isFallback) return <p>404</p>;

  const d = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Mobile',
      url: '/mobile',
    },
    {
      name: 'How IT jobs and recruiting on the dark web might trick you',
      url: '/doctor-who-the-family-of-blood-explained',
    },
  ];

  return (
    <main className='w-full px-6 md:px-20 gap-20 py-20'>
      <h1>How IT jobs and recruiting on the dark web might trick you</h1>
      <Breadcrumb>
        <span>Home</span>
        <span>Movies</span>
      </Breadcrumb>

      {/* <section className='w-full md:w-[50rem]'>
        <section className='flex flex-col gap-2 mb-5'>
          <span>Posted 30 January 2023, 04:00am</span>
          <h1 className='text-4xl font-bold'>
            New X-Men Cosplay Brings Professor X&apos;s Krakoa-Era Costume To
            Life
          </h1>

          <div className='uppercase flex items-center gap-10 text-sm'>
            <p className=''>
              By <span className='font-medium'> ROCKY ESSEL</span>
            </p>

            <p>
              PUBLISHED <span className='font-medium'>{4} MINUTES AGO</span>
            </p>
          </div>

          <div className='w-full'>
            <Image
              src='/deadpool.png'
              className='rounded-md shadow-md'
              width={1000}
              height={1000}
              alt=''
            />
          </div>
        </section>

        <article className='prose-xl'>
          <h2>Professor Xs Krakoa Design Gets a Perfect Cosplay Look</h2>
          <p>
            In X-Men lore, Professor X hasnt had too many wardrobe changes over
            the years, but after creating a mutant utopia on the island nation
            of Krakoa, Professor Xs upgraded his look with a sleek and helmeted
            design that this new cosplay embodies perfectly! Recently posted on
            Instagram by Pat Loika (@patloika), this creative talent specializes
            in taking nerdy photographs of the best cosplayers around while
            utilizing his skills to edit and enhance these photos in ways that
            make them even more comic-accurate than before. Meanwhile, Mike
            Dickens (@contagiousmedia) might not have many costumes under his
            belt just yet, but this Professor X design immediately makes a case
            for why he needs to dabble in the world of cosplay more often!
          </p>

          <p>
            The leader, benefactor, mastermind, and father figure behind the
            X-Men and an extremely powerful telepathic mutant in his own right,
            Professor X aka Charles Xavier, was once confined to a wheelchair
            before gaining back the ability to walk right around the time
            mutant-kind made Krakoa their home, bringing with it a new look that
            hes still sporting today. Wearing a giant “X” branded Cerebro helmet
            and an all-black, skin tight bodysuit, Charles Xaviers current X-Men
            design is a simple yet effective one, and with both Pat Loika and
            Mike Dickens on the cosplay case, it looks even better in real life.
          </p>

          <Image
            src='/deadpool.png'
            className='rounded-md shadow-md'
            width={1000}
            height={1000}
            alt=''
          />

          <h3>Testing H3</h3>
          <p>
            The leader, benefactor, mastermind, and father figure behind the
            X-Men and an extremely powerful telepathic mutant in his own right,
            Professor X aka Charles Xavier, was once confined to a wheelchair
            before gaining back the ability to walk right around the time
            mutant-kind made Krakoa their home, bringing with it a new look that
            hes still sporting today. Wearing a giant “X” branded Cerebro helmet
            and an all-black, skin tight bodysuit, Charles Xaviers current X-Men
            design is a simple yet effective one, and with both Pat Loika and
            Mike Dickens on the cosplay case, it looks even better in real life.
          </p>

          <p>
            The leader, benefactor, mastermind, and father figure behind the
            X-Men and an extremely powerful telepathic mutant in his own right,
            Professor X aka Charles Xavier, was once confined to a wheelchair
            before gaining back the ability to walk right around the time
            mutant-kind made Krakoa their home, bringing with it a new look that
            hes still sporting today. Wearing a giant “X” branded Cerebro helmet
            and an all-black, skin tight bodysuit, Charles Xaviers current X-Men
            design is a simple yet effective one, and with both Pat Loika and
            Mike Dickens on the cosplay case, it looks even better in real life.
          </p>

          <h1>H1</h1>
          <p>
            The leader, benefactor, mastermind, and father figure behind the
            X-Men and an extremely powerful telepathic mutant in his own right,
            Professor X aka Charles Xavier, was once confined to a wheelchair
            before gaining back the ability to walk right around the time
            mutant-kind made Krakoa their home, bringing with it a new look that
            hes still sporting today. Wearing a giant “X” branded Cerebro helmet
            and an all-black, skin tight bodysuit, Charles Xaviers current X-Men
            design is a simple yet effective one, and with both Pat Loika and
            Mike Dickens on the cosplay case, it looks even better in real life.
          </p>

          <h2>H2</h2>
          <p>
            The leader, benefactor, mastermind, and father figure behind the
            X-Men and an extremely powerful telepathic mutant in his own right,
            Professor X aka Charles Xavier, was once confined to a wheelchair
            before gaining back the ability to walk right around the time
            mutant-kind made Krakoa their home, bringing with it a new look that
            hes still sporting today. Wearing a giant “X” branded Cerebro helmet
            and an all-black, skin tight bodysuit, Charles Xaviers current X-Men
            design is a simple yet effective one, and with both Pat Loika and
            Mike Dickens on the cosplay case, it looks even better in real life.
          </p>

          <h3>H3</h3>
          <p>
            The leader, benefactor, mastermind, and father figure behind the
            X-Men and an extremely powerful telepathic mutant in his own right,
            Professor X aka Charles Xavier, was once confined to a wheelchair
            before gaining back the ability to walk right around the time
            mutant-kind made Krakoa their home, bringing with it a new look that
            hes still sporting today. Wearing a giant “X” branded Cerebro helmet
            and an all-black, skin tight bodysuit, Charles Xaviers current X-Men
            design is a simple yet effective one, and with both Pat Loika and
            Mike Dickens on the cosplay case, it looks even better in real life.
          </p>

          <h4>H4</h4>
          <p>
            The leader, benefactor, mastermind, and father figure behind the
            X-Men and an extremely powerful telepathic mutant in his own right,
            Professor X aka Charles Xavier, was once confined to a wheelchair
            before gaining back the ability to walk right around the time
            mutant-kind made Krakoa their home, bringing with it a new look that
            hes still sporting today. Wearing a giant “X” branded Cerebro helmet
            and an all-black, skin tight bodysuit, Charles Xaviers current X-Men
            design is a simple yet effective one, and with both Pat Loika and
            Mike Dickens on the cosplay case, it looks even better in real life.
          </p>

          <h5>H5</h5>
          <p>
            The leader, benefactor, mastermind, and father figure behind the
            X-Men and an extremely powerful telepathic mutant in his own right,
            Professor X aka Charles Xavier, was once confined to a wheelchair
            before gaining back the ability to walk right around the time
            mutant-kind made Krakoa their home, bringing with it a new look that
            hes still sporting today. Wearing a giant “X” branded Cerebro helmet
            and an all-black, skin tight bodysuit, Charles Xaviers current X-Men
            design is a simple yet effective one, and with both Pat Loika and
            Mike Dickens on the cosplay case, it looks even better in real life.
          </p>

          <h6>H6</h6>
          <p>
            The leader, benefactor, mastermind, and father figure behind the
            X-Men and an extremely powerful telepathic mutant in his own right,
            Professor X aka Charles Xavier, was once confined to a wheelchair
            before gaining back the ability to walk right around the time
            mutant-kind made Krakoa their home, bringing with it a new look that
            hes still sporting today. Wearing a giant “X” branded Cerebro helmet
            and an all-black, skin tight bodysuit, Charles Xaviers current X-Men
            design is a simple yet effective one, and with both Pat Loika and
            Mike Dickens on the cosplay case, it looks even better in real life.
          </p>

          <pre className='bg-slate-900 text-white'>
            <code>const rust = &apos;Rust&apos;</code>
          </pre>

          <h3>Unordered List</h3>
          <ul className='list-disc'>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>

          <h3>Ordered List</h3>
          <ul className='list-decimal'>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </article>
      </section>

      <section className='sticky top-20 flex flex-col gap-10 md:w-[20rem]'>
        <div className='flex flex-col gap-3'>
          <h3 className='font-medium text-sm'>Share Post</h3>

          <ul className='flex flex-wrap gap-3 text-5xl text-blue-600'>
            <li className='cursor-pointer'>
              <FaFacebookSquare />
            </li>
            <li className='cursor-pointer'>
              <FaFacebookSquare />
            </li>
            <li className='cursor-pointer'>
              <FaFacebookSquare />
            </li>
            <li className='cursor-pointer'>
              <FaFacebookSquare />
            </li>
          </ul>
        </div>

        <div className='flex flex-col gap-3'>
          <h3 className='font-medium text-sm'>Categories</h3>

          <ul className='flex flex-wrap gap-2 text-white'>
            <li className='px-2 py-1 rounded-md bg-slate-900 cursor-pointer'>
              Movies
            </li>
            <li className='px-2 py-1 rounded-md bg-slate-900 cursor-pointer'>
              Anime
            </li>
            <li className='px-2 py-1 rounded-md bg-slate-900 cursor-pointer'>
              Football
            </li>
            <li className='px-2 py-1 rounded-md bg-slate-900 cursor-pointer'>
              Top 10
            </li>
            <li className='px-2 py-1 rounded-md bg-slate-900 cursor-pointer'>
              V-blog
            </li>
            <li className='px-2 py-1 rounded-md bg-slate-900 cursor-pointer'>
              Release Dates
            </li>
            <li className='px-2 py-1 rounded-md bg-slate-900 cursor-pointer'>
              Top 5
            </li>
          </ul>
        </div>

        <div className='flex flex-col gap-3'>
          <h3 className='font-medium text-sm'>Popular Post</h3>

          <ul>
            {data?.slice(0, 2)?.map((data, index) => (
              <ImageTextCard key={index} data={data} />
            ))}
          </ul>
        </div>
      </section> */}
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
  };
};
