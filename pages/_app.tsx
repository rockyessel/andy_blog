import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Navbar, Footer } from '@/components';
import NextNProgress from 'nextjs-progressbar';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }: AppProps) => {


  return (
    <React.Fragment>
      <NextNProgress color={'#ff5277'} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
};

// App.getInitialProps = async ({ Component, ctx }: AppContext) => {
//   let pageProps = {};

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }

//   const data: PostProps[] = await AllPostData();

//   return { pageProps, data };
// };

export default App;
