import { SearchDataProps } from '@/interface';
import { SearchData } from '@/utils/query';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

interface Props {}

const Search = () => {
  const [filteredWord, setFilteredWord] = React.useState<SearchDataProps[]>([]);
  const [searchData, setSearchData] = React.useState<SearchDataProps[]>([]);
  const [word, setWord] = React.useState('');


  React.useEffect(() => {
    const fetchData = async () => {
      const data: SearchDataProps[] = await SearchData();
      setSearchData(data);
    };
    fetchData();
  }, []);

  const handleWord = (event: any) => {
    const searchWord = event.target.value.toLowerCase();
    setWord(searchWord);
    const filterWord = searchData.filter((post) => {
      return post?.title.toLowerCase().includes(searchWord);
    });
    if (searchWord === '') {
      setFilteredWord([]);
    } else {
      setFilteredWord(filterWord);
    }
  };
  const handleClear = () => {
    setWord('');
    setFilteredWord([]);
  };

  return (
    <div className={`hidden sm:block w-full bg-slate-500/60 relative px-2 rounded-sm`}>
      <div className='flex items-center justify-between'>
        <input
          type='text'
          name='search'
          value={word}
          onChange={handleWord}
          className={`w-full bg-transparent outline-none px-4 py-2`}
          placeholder='Search for movies, tv shows and people...'
        />
        {word.length > 0 ? (
          <FaTimes
            onClick={handleClear}
            className='text-2xl cursor-pointer text-gray-50/20'
          />
        ) : (
          <FaSearch className='text-2xl cursor-pointer text-gray-50/20' />
        )}
      </div>
      {word.length > 0 && filteredWord?.length > 0 && (
        <ul className='bg-slate-500 text-black h-auto absolute top-[3.4rem] w-full right-0 rounded-md z-[10]'>
          {word.length > 0 && filteredWord?.length === 0 ? (
            <li
              className={`flex gap-2 items-center py-1 hover:bg-gray-50/20 w-full rounded px-1 active:bg-blue-400 cursor-pointer`}
            >
              Couldn&apos; find your result
            </li>
          ) : (
            filteredWord?.slice(0, 5)?.map((item, index) => (
              <Link key={index} href={`/posts/${item?.slug?.current}`}>
                <li
                  className={`flex gap-2 items-center py-1 hover:bg-gray-50/20 w-full rounded px-1 active:bg-bg-gray-50/20 hover:text-white cursor-pointer`}
                >
                  <Image
                    width={100}
                    height={100}
                    src={item?.image}
                    className={`w-14 h-14 rounded-md object-cover object-center`}
                    alt={item?.title}
                  />
                  <div className={` text-sm`}>
                    <span className={`font-bold`}>{item?.title}</span>
                    <p className={`text-sm hidden md:block`}>{item?.description}</p>
                  </div>
                </li>
              </Link>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;
