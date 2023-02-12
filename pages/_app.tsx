import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Navbar, Footer } from '@/components';
import NextNProgress from 'nextjs-progressbar';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <NextNProgress color={'#ff5277'} />
      {/* <Navbar /> */}
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
