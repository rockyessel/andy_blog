import Link from 'next/link';
import React from 'react';
import { FaTimes, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [showSearchBar, setShowSearchBar] = React.useState<boolean>(false);
  const NavItem = [
    'Reviews',
    'Movies',
    'Tech',
    'Gaming',
    'Comics',
    'Anime',
    'Lyrics',
    'News',
    'Contact',
    'About',
  ];

  const handleState = () => {
    setShowMenu((prev) => !prev);
  };
  const handleStateSearch = () => {
    setShowSearchBar((prev) => !prev);
  };

  return (
    <header className='w-full h-auto bg-slate-900 py-5 text-white px-10'>
      <section className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='text-4xl'>Logo</div>

          {/* Desktop Menu */}
          <nav className='max_screen:hidden'>
            <ul className='flex gap-4'>
              {NavItem?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </nav>
        </div>

        <div className='flex items-center gap-5'>
            
          {/* Search Bar & Button */}
          <div className='flex items-center'>
            <div className='flex items-center gap-5 transition-all duration-400'>
              <input
                className={`text-black transition-all duration-400 outline-none rounded-md p-2 ${
                  showSearchBar ? 'w-[17rem] block' : 'w-[0.5px] p-0'
                }`}
                placeholder='Into The Badlands'
                type='text'
              />
              <button onClick={handleStateSearch} title='Search' type='button'>
                <FaSearch />
                <span className='sr-only'>Search button</span>
              </button>
            </div>
          </div>

          {/* Menu Button */}
          {showMenu ? (
            <button
              type='button'
              title=''
              onClick={handleState}
              className='z-[2] px-3 py-3 hover:rounded-md md:hidden inline-flex flex-col justify-center items-center'
            >
              <FaTimes className='text-2xl' />
              <span className='hidden columns-md:block'>Close</span>
            </button>
          ) : (
            <button
              type='button'
              title=''
              onClick={handleState}
              className=' min_screen:hidden inline-flex flex-col justify-center items-center'
            >
              <div className='space-y-2 group'>
                <span className='block w-5 h-0.5 bg-gray-200 group-hover:bg-opacity-[0.4]'></span>
                <span className='block w-8 h-0.5 bg-gray-200 group-hover:bg-opacity-[0.4]'></span>
                <span className='block w-8 h-0.5 bg-gray-200 group-hover:bg-opacity-[0.4]'></span>
              </div>
              <span className='hidden md:block'>Menu</span>
            </button>
          )}

          {/* Mobile Menu */}
          {showMenu && (
            <div className='transition-all duration-400 md:hidden bg-slate-900 bg-opacity-[0.7] flex justify-end items-center absolute top-0 left-0 w-full h-screen overflow-hidden'>
              <div className='flex flex-col overflow-auto pt-32 pl-5 bg-slate-900 items-start gap-8 w-[280px] h-screen'>
                <ul className='flex flex-col uppercase divide-white/60 items-start gap-8 w-full h-full'>
                  {NavItem.map((item, index) => (
                    <Link key={index} href={'/'}>
                      <li className='inline-flex z-[1] justify-start items-center gap-2  hover:text-gray-500  duration-700 cursor-pointer w-full text-center hover:border-none'>
                        {item}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </header>
  );
};

export default Navbar;
