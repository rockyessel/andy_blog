import { PostProps } from '@/interface';
import { AllPostData } from '@/utils/query';
import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaTimes, FaSearch, FaBars } from 'react-icons/fa';

const Navbar = (props: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [showSearchBar, setShowSearchBar] = React.useState<boolean>(false);
  const [filteredWord, setFilteredWord] = React.useState<PostProps[]>([]);
  const [word, setWord] = React.useState<string>('');

  const isPath = useRouter().asPath === '/';

  console.log('filteredWord', filteredWord);
  console.log('navbar', props.data);
  console.log('word', word);

  const handleState = () => {
    setShowMenu((prev) => !prev);
  };
  const handleStateSearch = () => {
    setShowSearchBar((prev) => !prev);
  };
  const handleWord = (event: any) => {
    const searchWord: string = event.target.value.toLowerCase();
    setWord(searchWord);
    const filterWord: PostProps[] = props?.data?.filter((post) => {
      return post.title.toLowerCase().includes(searchWord);
    });

    if (searchWord === '') {
      setFilteredWord([]);
    } else {
      setFilteredWord(filterWord);
    }
  };

  return (
    <header
      className={`w-full px-6 py-5 flex items-center gap-20 justify-between  text-white ${
        !isPath ? 'bg-gray-600' : 'bg-black/60'
      }`}
    >
      {/* Logo & Search Bar */}
      <div className='w-fit lg:w-full flex items-center gap-5'>
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
          className={`w-full lg:bg-slate-500/70 rounded-md relative px-4 py-1 lg:max-w-5xl group: flex items-center ${
            showSearchBar ? 'bg-transparent' : ''
          }`}
        >
          <input
            type='text'
            name='search'
            value={word}
            onChange={handleWord}
            className={` w-full ${
              showSearchBar
                ? 'block px-5 outline-none py-10 h-10 absolute top-0 left-0 bg-black'
                : 'bg-transparent hidden lg:block outline-none px-4 py-2'
            }`}
            placeholder='Search for movies, tv shows and people...'
          />

          {filteredWord?.length && (
            <ul className='bg-white text-black absolute top-[3.4rem] w-full right-0 h-[10rem] rounded-md'>
              {filteredWord?.map((item, index) => (
                <li
                  key={index}
                  className={`flex gap-2 items-center py-1 hover:bg-blue-200 w-full rounded px-1 active:bg-blue-400 cursor-pointer`}
                >
                  <Image
                    width={100}
                    height={100}
                    src={item?.image}
                    className={`w-14 h-14 rounded-md object-cover object-center`}
                    alt=''
                  />
                  <div className={` text-sm`}>
                    <span className={`font-bold`}>{item?.title}</span>
                    <p className={`text-sm`}>{item?.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
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
      <nav className='w-full hidden md:flex items-center gap-1 xl:gap-10 font-medium'>
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
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <ul className='flex items-center gap-5'>
          <li className='rounded-md bg-white text-black px-4 py-2'>
            <Link href='/write-with-us'>Write with us</Link>
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

export const getStaticProps: GetStaticProps<{
  data: PostProps[];
}> = async () => {
  const data: PostProps[] = await AllPostData();

  if (!data) return { notFound: true };

  return {
    props: { data: JSON.parse(JSON.stringify(data)) },
    revalidate: 10,
  };
};
