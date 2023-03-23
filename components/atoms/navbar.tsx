import { PostProps } from '@/interface';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaTimes, FaSearch, FaBars } from 'react-icons/fa';
import Search from './search';

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [showSearchBar, setShowSearchBar] = React.useState<boolean>(false);

  const handleState = () => {
    setShowMenu((prev) => !prev);
  };
  const handleStateSearch = () => {
    setShowSearchBar((prev) => !prev);
  };

  return (
    <header className='bg-black text-white flex items-center py-2 justify-between lg:flex-row gap-5 px-4 lg:px-6 xl:px-20'>
      <nav className='flex items-center gap-5'>
        <Link href='/'>
          <Image
            src='/logo.png'
            width={1000}
            height={1000}
            className='w-16'
            alt=''
          />
        </Link>

        <ul className=' hidden sm:flex items-center gap-5'>
          <Link className='rounded-sm hover:bg-slate-500/60 px-2 py-1' href='/'>
            <li>Home</li>
          </Link>
          <Link
            className='rounded-sm hover:bg-slate-500/60 px-2 py-1'
            href='/categories'
          >
            <li>Categories</li>
          </Link>
      
            <li>
           
              <a className='rounded-sm hover:bg-slate-500/60 px-2 py-1' href='mailto:andyblog@gmail.com'>Contact</a>
            </li>
        </ul>
      </nav>

      <div className='flex-1'>
        <Search />
      </div>

      <div className='m-0 p-0 relative'>
        <button
          className='rounded-sm hover:bg-slate-500/60 p-2.5'
          title='Show menu'
          type='button'
          onClick={handleState}
        >
          {showMenu ? <FaTimes className='' /> : <FaBars className='' />}
        </button>
        {showMenu && (
          <nav className='absolute top-11 sm:top-11 right-0 m-0 p-0 sm:-right-0 z-[10] text-black'>
            <ul className='w-screen sm:w-full rounded-sm px-10 py-2 bg-slate-500 text-left flex flex-col justify-start gap-2'>
              <Link
                className='block sm:hidden w-full rounded-sm hover:bg-white/60 px-2 py-1'
                href='/'
              >
                <li>Home</li>
              </Link>
              <Link
                className='block sm:hidden w-full rounded-sm hover:bg-white/60 px-2 py-1'
                href='/categories'
              >
                <li>Categories</li>
              </Link>
              <Link
                className='block sm:hidden w-full rounded-sm hover:bg-white/60 px-2 py-1'
                href='/contact'
              >
                <li>
                  <a href='mailto:andyblog@gmail.com'>Contact</a>
                </li>
              </Link>
              <Link
                className='w-full rounded-sm hover:bg-white/60 px-2 py-1'
                href='/categories/anime'
              >
                <li>Anime</li>
              </Link>
              <Link
                className='w-full rounded-sm hover:bg-white/60 px-2 py-1'
                href='/categories/life'
              >
                <li>Life</li>
              </Link>
              <Link
                className='w-full rounded-sm hover:bg-white/60 px-2 py-1'
                href='/categories/business'
              >
                <li>Business</li>
              </Link>
              <Link
                className='w-full rounded-sm hover:bg-white/60 px-2 py-1'
                href='/categories/movies'
              >
                <li>Movies</li>
              </Link>
              <Link
                className='w-full rounded-sm hover:bg-white/60 px-2 py-1'
                href='/categories/how-to'
              >
                <li>How-to</li>
              </Link>
              <Link
                className='w-full rounded-sm hover:bg-white/60 px-2 py-1'
                href='/categories/top-10'
              >
                <li>Top 10</li>
              </Link>
              <Link
                className='w-full rounded-sm hover:bg-white/60 px-2 py-1'
                href='/categories/others'
              >
                <li>Others</li>
              </Link>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
