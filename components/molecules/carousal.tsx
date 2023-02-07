import Image from 'next/image';
import React from 'react';

const Carousal = (props: any) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [length, setLength] = React.useState(12);
  const [touchPosition, setTouchPosition] = React.useState(null);

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX;
    console.log('Initial Position:', touchDown);

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: any) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    console.log('Final Position:', currentTouch);
    console.log('Difference:', diff);

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  // Set the length to match current children from props
  React.useEffect(() => {
    setLength(12);
  }, [currentIndex]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className='w-full flex flex-cols relative'>
     <div>
         {currentIndex > 0 && (
          <button onClick={prev} className='absolute z-10 top-1/2 -translate-y-1/2 w-10 h-10 rounded-md bg-white border-2 border-black/40 left-40'>
            &lt;
          </button>
        )}

        {currentIndex < length - 1 && (
          <button onClick={next} className='absolute z-10 top-1/2 -translate-y-1/2 w-10 h-10 rounded-md bg-white border-2 border-black/40 right-40'>
            &gt;
          </button>
        )}
     </div>
        <div
          className='w-full h-full overflow-hidden'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`flex w-full transition-all flex-shrink-0 flex-grow-[1]`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <Image className='w-full flex-shrink-0 flex-grow-[1] h-[50vh]' src='/deadpool.png' width={500} height={100} alt='' />
            <Image className='w-full flex-shrink-0 flex-grow-[1] h-[50vh]' src='/deadpool.png' width={500} height={100} alt='' />
            <Image className='w-full flex-shrink-0 flex-grow-[1] h-[50vh]' src='/deadpool.png' width={500} height={100} alt='' />
            <Image className='w-full flex-shrink-0 flex-grow-[1] h-[50vh]' src='/deadpool.png' width={500} height={100} alt='' />
            <Image className='w-full flex-shrink-0 flex-grow-[1] h-[50vh]' src='/deadpool.png' width={500} height={100} alt='' />
            <Image className='w-full flex-shrink-0 flex-grow-[1] h-[50vh]' src='/deadpool.png' width={500} height={100} alt='' />
            <Image className='w-full flex-shrink-0 flex-grow-[1] h-[50vh]' src='/deadpool.png' width={500} height={100} alt='' />
            <Image className='w-full flex-shrink-0 flex-grow-[1] h-[50vh]' src='/deadpool.png' width={500} height={100} alt='' />
            <Image className='w-full flex-shrink-0 flex-grow-[1] h-[50vh]' src='/deadpool.png' width={500} height={100} alt='' />
            <Image className='w-full flex-shrink-0 flex-grow-[1] h-[50vh]' src='/deadpool.png' width={500} height={100} alt='' />
            <Image className='w-full flex-shrink-0 flex-grow-[1] h-[50vh]' src='/deadpool.png' width={500} height={100} alt='' />
            <Image className='w-full flex-shrink-0 flex-grow-[1] h-[50vh]' src='/deadpool.png' width={500} height={100} alt='' />
          </div>
      </div>
    </div>
  );
};

export default Carousal;
// <!-- Clarity tracking code for https://esselr.vercel.app/ --><script>    (function(c,l,a,r,i,t,y){        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);    })(window, document, "clarity", "script", "fqlckq7y6k");</script>
