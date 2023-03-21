import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Navbar, Footer } from '@/components';
import NextNProgress from 'nextjs-progressbar';
import { useRouter } from 'next/router';
import { PostProps } from '@/interface';

const App = ({ Component, pageProps }: AppProps) => {
  const [filteredWord, setFilteredWord] = React.useState<PostProps[]>([]);
  const [word, setWord] = React.useState<string>('');
  const isPath = useRouter().asPath === '/';

  return (
    <React.Fragment>
      <NextNProgress color={'#ff5277'} />
      {!isPath && <Navbar data={[]} />}
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
