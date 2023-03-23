import {
  GetStaticProps,
  GetStaticPaths,
  InferGetServerSidePropsType,
} from 'next';
import { AllPostData, CommonPathProps, PostDetailsData } from '@/utils/query';
import { CommonPath, Params, PostProps } from '@/interface';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  Breadcrumb,
  ImageTextCard,
  Layout,
  SocialButtonLinks,
} from '@/components';
import { PortableText } from '@portabletext/react';
import moment from 'moment';
import Link from 'next/link';
import Script from 'next/script';

const Post = (props: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const mimeType = props?.post_data?.image?.split('.')?.slice(-1)[0];

  if (router.isFallback) return <p>404</p>;

  console.log(props);

  return (
    <Layout
      description={props?.post_data?.description}
      title={props?.post_data?.title}
      image={props?.post_data?.image}
      type={'Blog'}
      alt={props?.post_data?.slug?.current}
      keywords={''}
      publishedAt={props?.post_data?.publishedAt}
      updatedAt={props?.post_data?._updatedAt}
      MIME={mimeType}
      author_name={props?.post_data?.author?.name}
    >
      <main className='max_screen:w-full max_screen:px-4 px-4 xl:w-[80rem] mx-auto pb-10'>
        <Breadcrumb>
          <Link href={`/`}>Home</Link>
          <Link
            href={`/categories/${props?.post_data?.category?.slug?.current}`}
          >
            {props?.post_data?.category?.title}
          </Link>
        </Breadcrumb>
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl font-bold capitalize tracking-tighter leading-none'>
            {props?.post_data?.title}
          </h1>
          <p className='text-lg'>{props.post_data?.caption}</p>

          <div className='inline-flex items-center gap-1 text-xs uppercase'>
            <p>
              By{' '}
              <span className='text-black/80 font-medium'>
                {props?.post_data?.author.name}
              </span>
            </p>
            <p className=' '>
              PUBLISHED{' '}
              {moment(props?.post_data?.publishedAt).startOf('hour').fromNow()}
            </p>
          </div>
        </div>

        <section className='w-full flex flex-col gap-4 mt-5'>
          <div className='w-full'>
            <Image
              src={props?.post_data?.image}
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
                  <SocialButtonLinks
                    body={props?.post_data?.description}
                    title={props?.post_data?.title}
                    slug={props?.post_data?.slug?.current}
                  />
                  <div className='m-0 p-0'>
                    <p className='text-xl font-bold'>About The Author</p>
                    <p className='flex items-center gap-1 text-xs'>
                      <span className='font-medium'>
                        {props?.post_data?.author?.name}
                      </span>
                      <span>(384 Articles Published)</span>
                    </p>
                    <p>
                      <PortableText value={props?.post_data?.author?.bio} />
                    </p>
                  </div>
                </div>

                <div id='disqus_thread'>
                  <Script id='my-script'>
                    {`
    var disqus_config = function () {
    this.page.url = document.location.href;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = document.location.href.split(".app")[1]; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
  
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://airby.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();`}
                  </Script>
                  <noscript>
                    Please enable JavaScript to view the{' '}
                    <a href='https://disqus.com/?ref_noscript'>
                      comments powered by Disqus.
                    </a>
                  </noscript>
                </div>
              </div>
            </div>

            <section className='flex-1 sticky top-0 flex flex-col gap-10 md:w-[20rem]'>
              <div>
                <h3 className='text-xl font-bold'>
                  More on {props?.post_data?.category?.title}
                </h3>
                <ul className='grid grid-cols-1 divide-y-[1px]'>
                  {props?.all_post
                    ?.sort(
                      (a, b) =>
                        new Date(b.publishedAt).getTime() -
                        new Date(a.publishedAt).getTime()
                    )
                    ?.map(
                      (data, index) =>
                        data?.featured === true &&
                        data?.category?.title ===
                          props.post_data.category.title && (
                          <ImageTextCard
                            class={`w-[5rem]`}
                            key={index}
                            data={data}
                          />
                        )
                    )}
                </ul>
              </div>
            </section>
          </div>
        </section>
      </main>
    </Layout>
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

export const getStaticProps: GetStaticProps<{
  post_data: PostProps;
  all_post: PostProps[];
}> = async (context) => {
  const { post }: any = context.params as Params;

  const post_data: PostProps = await PostDetailsData(post);
  const all_post: PostProps[] = await AllPostData();

  if (!post_data || !all_post) return { notFound: true };

  return {
    props: {
      all_post: JSON.parse(JSON.stringify(all_post)),
      post_data: JSON.parse(JSON.stringify(post_data)),
    },
    revalidate: 10,
  };
};
