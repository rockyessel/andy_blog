import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaTimes, FaSearch, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [showSearchBar, setShowSearchBar] = React.useState<boolean>(false);

  const isPath = useRouter().asPath === '/';

  const handleState = () => {
    setShowMenu((prev) => !prev);
  };
  const handleStateSearch = () => {
    setShowSearchBar((prev) => !prev);
  };

  return (
    <header
      className={`w-full px-6 py-5 flex items-center gap-20 justify-between  text-white ${
        !isPath ? 'bg-gray-600' : 'bg-black/60'
      }`}
    >
      {/* Logo & Search Bar */}
      <div className='w-full flex items-center gap-5'>
        {/* Logo */}
        <Link href='/'>
          <span className='text-3xl font-bold'>
            <Image
              src='/logo.png'
              width={1000}
              height={1000}
              className='w-16'
              alt=''
            />
          </span>
        </Link>
        {/* Search Bar */}
        <div
          className={`w-full lg:bg-slate-500/70 rounded-md px-4 py-1 max-w-5xl group: flex items-center ${
            showSearchBar ? 'bg-transparent' : ''
          }`}
        >
          <input
            type='text'
            name='search'
            className={` w-full ${
              showSearchBar
                ? 'block px-5 outline-none py-10 h-10 absolute top-0 left-0 bg-black'
                : 'bg-transparent hidden lg:block outline-none px-4 py-2'
            }`}
            placeholder='Search for movies, tv shows and people...'
          />
          <FaSearch
            onClick={handleStateSearch}
            className='text-2xl cursor-pointer'
          />
          {showSearchBar && (
            <FaTimes
              onClick={handleStateSearch}
              className='text-2xl z-[200] absolute right-10 cursor-pointer'
            />
          )}
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className='w-full hidden md:flex items-center gap-10 justify-between font-medium'>
        <ul className='flex items-center gap-5'>
          <li>
            <Link href='/categories/movies'>Movies</Link>
          </li>
          <li>
            <Link href='/categories/anime'>Anime</Link>
          </li>
          <li>
            <Link href='/categories'>Categories</Link>
          </li>
          <li>Contact</li>
        </ul>

        <ul className='flex items-center gap-5'>
          <li className='rounded-md bg-white text-black px-4 py-2'>
            Write with us
          </li>
        </ul>
      </nav>

      {/* Button */}
      <button
        onClick={handleState}
        className='w-30 md:hidden'
        type='button'
        title='mobile-menu'
      >
        <span className='w-full inline-flex flex-col gap-1'>
          <span className='block w-full h-0.5 bg-gray-200 group-hover:bg-opacity-[0.4]'></span>
          <span className='block w-full h-0.5 bg-gray-200 group-hover:bg-opacity-[0.4]'></span>
          <span className='block w-full h-0.5 bg-gray-200 group-hover:bg-opacity-[0.4]'></span>
        </span>
        <span>Menu</span>
      </button>

      {/* Mobile menu */}
      {showMenu && (
        <nav className='md:hidden absolute w-full top-20 right-0'>
          <ul className='bg-slate-900 w-full py-10 px-2 text-xl font-medium flex flex-col gap-2'>
            <li className='hover:rounded-md hover:bg-white hover:text-black px-4 py-2'>
              Movies
            </li>
            <li className='hover:rounded-md hover:bg-white hover:text-black px-4 py-2'>
              Series
            </li>
            <li className='hover:rounded-md hover:bg-white hover:text-black px-4 py-2'>
              Anime
            </li>
            <li className='hover:rounded-md hover:bg-white hover:text-black px-4 py-2'>
              Contact
            </li>
            <li className='rounded-md bg-white text-black px-4 py-2 hover:bg-blue-700 hover:text-white'>
              Write with us
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
