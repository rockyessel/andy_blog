import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Navbar, Footer } from '@/components';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
