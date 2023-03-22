import React from 'react';
import { FaPlay } from 'react-icons/fa';
import Navbar from '../atoms/navbar';
import { PostProps } from '@/interface';

const Hero = () => {
  const [filteredWord, setFilteredWord] = React.useState<PostProps[]>([]);
  const [word, setWord] = React.useState<string>('');
  const [currentSlider, setCurrentSlider] = React.useState(0);
  const homeSlider: any[] = [
    {
      title: 'Black Panther: Wakanda Forever',
      star: '⭐ 7.5/10',
      image: '/g.jpg',
      description: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat repellat voluptatibus nihil suscipit nemo ab, dolorem
                    sed reprehenderit, illo magni quos assumenda accusamus
                    dolores porro nostrum voluptas ipsam dolorum nulla? Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                    repellat voluptatibus nihil suscipit nemo ab, dolorem sed
                    reprehenderit, illo magni quos`,
    },
    {
      title: 'The Airby Blog',
      star: '⭐ 7.5/10',
      image: '/logo.png',
      description: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat repellat voluptatibus nihil suscipit nemo ab, dolorem
                    sed reprehenderit, illo magni quos assumenda accusamus
                    dolores porro nostrum voluptas ipsam dolorum nulla? Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                    repellat voluptatibus nihil suscipit nemo ab, dolorem sed
                    reprehenderit, illo magni quos`,
    },
    {
      title: 'The Deadpool',
      star: '⭐ 7.5/10',
      image: '/deadpool.png',
      description: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat repellat voluptatibus nihil suscipit nemo ab, dolorem
                    sed reprehenderit, illo magni quos assumenda accusamus
                    dolores porro nostrum voluptas ipsam dolorum nulla? Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                    repellat voluptatibus nihil suscipit nemo ab, dolorem sed
                    reprehenderit, illo magni quos`,
    },
  ];

  //   const handleWord = (event: any) => {
  //   const searchWord: string = event.target.value.toLowerCase();
  //   setWord(searchWord);
  //   const filterWord: PostProps[] = props?.data?.filter((post) => {
  //     return post.title.toLowerCase().includes(searchWord);
  //   });

  //   if (searchWord === '') {
  //     setFilteredWord([]);
  //   } else {
  //     setFilteredWord(filterWord);
  //   }
  // };
  

  const imageLength = homeSlider.length - 1;

  console.log('length', imageLength);
  const repeat = currentSlider === imageLength ? 0 : currentSlider + 1;
  console.log('repeat', repeat);

  const handleMoveDot = (index: number) => {
    console.log('index', index)
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
      {homeSlider?.map(
        (data, index) =>
          index === currentSlider && (
            <div
              key={index}
              className={`bg-[url('/g.jpg')] box-border overflow-hidden bg-no-repeat bg-cover h-full w-full text-white`}
            >
              <Navbar  />
              <div className='bg-black/60 w-full h-[50vh] flex justify-center items-center py-10 md:py-40'>
                {/* <Image className='w-full object-cover object-center' src='/g.jpg' width={1000} height={1000} alt='' /> */}
                <div className='px-4 lg:px-6 xl:px-20 flex flex-col gap-2 md:mb-20 lg:text-2xl'>
                  <span>{data?.star}</span>
                  <p className='text-2xl md:text-3xl lg:text-4xl lx:text-5xl font-bold'>
                    {data?.title}
                  </p>
                  <p className='md:text-xl max-w-7xl lg:w-full'>
                    {data?.description}
                  </p>
                  <p className='text-yellow-600 font-medium'>
                    <span>Action</span> / <span>Adventure</span> /{' '}
                    <span>Science Fiction</span>
                  </p>

                  <button className='bg-red-500 inline-flex items-center gap-2 rounded-xl px-4 py-2 w-fit'>
                    <FaPlay />
                    Play Trailer
                  </button>
                </div>
              </div>
            </div>
          )
      )}

      <div className={'flex justify-center gap-3 relative bottom-[2rem]'}>
        {Array.from({ length: homeSlider?.length }).map((dot, index) => {
          return (
            <div
              key={index}
              onClick={() => handleMoveDot(index)}
              className={`${
                currentSlider === index
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
