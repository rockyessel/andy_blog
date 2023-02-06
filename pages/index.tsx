import { ImageCard, Navbar } from '@/components';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='grid grid-rows-3 grid-flow-col gap-4'>
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </>
  );
}
