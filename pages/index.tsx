import { ImageCard, ImageTextCard, ImageTextDescCard } from '@/components';

export default function Home() {
  const data = [
    {
      category: 'Movies',
      estimated_time: '7',
      author: 'brennan klein',
      name: 'Potential Stranger Things Season 5 Release Window Suggested By Star',
      description: `Hogwarts Legacy beautifully recreates the world of Harry Potter and fills it with quirky characters, tense combat, and a huge amount of collectibles.`,
      image: '/deadpool.png',
    },
    {
      category: 'Movies',
      estimated_time: '7',
      author: 'brennan klein',
      name: 'Potential Stranger Things Season 5 Release Window Suggested By Star',
      description: `Hogwarts Legacy beautifully recreates the world of Harry Potter and fills it with quirky characters, tense combat, and a huge amount of collectibles.`,
      image: '/deadpool.png',
    },
    {
      category: 'Movies',
      estimated_time: '7',
      author: 'brennan klein',
      name: 'Potential Stranger Things Season 5 Release Window Suggested By Star',
      description: `Hogwarts Legacy beautifully recreates the world of Harry Potter and fills it with quirky characters, tense combat, and a huge amount of collectibles.`,
      image: '/deadpool.png',
    },
    {
      category: 'Movies',
      estimated_time: '7',
      author: 'brennan klein',
      name: 'Potential Stranger Things Season 5 Release Window Suggested By Star',
      description: `Hogwarts Legacy beautifully recreates the world of Harry Potter and fills it with quirky characters, tense combat, and a huge amount of collectibles.`,
      image: '/deadpool.png',
    },
    {
      category: 'Movies',
      estimated_time: '7',
      author: 'brennan klein',
      name: 'Potential Stranger Things Season 5 Release Window Suggested By Star',
      description: `Hogwarts Legacy beautifully recreates the world of Harry Potter and fills it with quirky characters, tense combat, and a huge amount of collectibles.`,
      image: '/deadpool.png',
    },
    {
      category: 'Movies',
      estimated_time: '7',
      author: 'brennan klein',
      name: 'Potential Stranger Things Season 5 Release Window Suggested By Star',
      description: `Hogwarts Legacy beautifully recreates the world of Harry Potter and fills it with quirky characters, tense combat, and a huge amount of collectibles.`,
      image: '/deadpool.png',
    },
    {
      category: 'Movies',
      estimated_time: '7',
      author: 'brennan klein',
      name: 'Potential Stranger Things Season 5 Release Window Suggested By Star',
      description: `Hogwarts Legacy beautifully recreates the world of Harry Potter and fills it with quirky characters, tense combat, and a huge amount of collectibles.`,
      image: '/deadpool.png',
    },
  ];

  return (
    <main className='px-6 flex flex-col gap-5 my-16'>
      <div>
        <ul className='grid grid-cols-3 gap-4'>
          {data?.slice(0, 5)?.map((data, index) => (
            <ImageCard key={index} data={data} />
          ))}
        </ul>
      </div>
      <section className='flex justify-between'>
        <section className='flex flex-col gap-5'>
          <div>
            <h2>Recent</h2>
            <ul className='flex flex-col divide-y-[1px]'>
              {data?.map((data, index) => (
                <ImageTextDescCard key={index} data={data} />
              ))}
            </ul>
          </div>

          <div>
            <h2>Anime</h2>
            <ul className='grid grid-cols-1 divide-y-[1px]'>
              {data?.map((data, index) => (
                <ImageTextDescCard key={index} data={data} />
              ))}
            </ul>
          </div>
        </section>

        <section className='flex flex-col gap-10'>
          <div>
            <h3>TRENDING</h3>
            <ul className='grid grid-cols-1 divide-y-[1px]'>
              {data?.map((data, index) => (
                <ImageTextCard key={index} data={data} />
              ))}
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}
