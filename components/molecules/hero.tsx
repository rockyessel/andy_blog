import React from 'react';
import { PostProps } from '@/interface';
import Link from 'next/link';

const Hero = ({ data }: { data: PostProps[] }) => {
  const [currentSlider, setCurrentSlider] = React.useState(0);

  const _data = data.filter((post) => post?.recommended === true);
  const imageLength = _data.length - 1;
  const repeat = currentSlider === imageLength ? 0 : currentSlider + 1;
  const handleMoveDot = (index: number) => {
    setCurrentSlider(index);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlider(repeat);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentSlider, repeat]);

  return (
    <section className='flex flex-col mb-0 pb-0 gap-0  w-full h-full bg-black/70 relative '>
      {_data
        ?.sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        )
        ?.map(
          (data, index) =>
            data?.recommended === true &&
            index === currentSlider && (
              <div
                key={index}
                style={{ backgroundImage: `url("${data?.image}")` }}
                className={`h-full box-border overflow-hidden bg-no-repeat bg-cover w-full text-white transition-all duration-500 ease-in-out`}
              >
                <div className='bg-black/60 flex flex-col justify-center items-center py-10 md:py-40'>
                  <div className='px-4 lg:px-6 xl:px-20 flex flex-col gap-2 md:mb-20 lg:text-2xl'>
                    <span className='text-yellow-500 font-bold'>
                      {data?.category?.title}
                    </span>
                    <p className='text-2xl md:text-3xl lg:text-4xl lx:text-5xl font-bold'>
                      {data?.title}
                    </p>
                    <p className='md:text-xl max-w-7xl lg:w-full'>
                      {data?.description}
                    </p>
                  </div>
                  <Link href={`/posts/${data?.slug?.current}`}>
                    <button
                      className='bg-yellow-500 px-4 py-2 rounded-sm font-extrabold'
                      type='button'
                      title='Read more'
                    >
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            )
        )}

      <div className={'flex justify-center gap-3 relative bottom-[2rem] mt-2'}>
        {Array.from({ length: _data?.length }).map((_, index) => {
          return (
            <div
              key={index}
              onClick={() => handleMoveDot(index)}
              className={`${
                currentSlider !== index
                  ? 'w-[3rem] h-2  bg-blue-500 transition-all duration-500 ease-in-out '
                  : 'w-[1rem] h-2'
              } rounded-md  bg-gray-200`}
            ></div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
