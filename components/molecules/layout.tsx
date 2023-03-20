import React from 'react';
import { Head } from '../index';
import { LayoutProps } from '@/interface';

const Layout = (props: LayoutProps) => {
  return (
    <React.Fragment>
      <Head
        description={props?.description}
        title={props?.title}
        image={props?.image}
        type={props?.type}
        alt={props?.alt}
        keywords={props?.keywords}
        publishedAt={props?.publishedAt}
        updatedAt={props?.updatedAt}
        MIME={props?.MIME}
        author_name={props?.author_name}
      />

      {props.children}
    </React.Fragment>
  );
};

export default Layout;
