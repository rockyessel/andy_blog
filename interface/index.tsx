import React from 'react';
import { ParsedUrlQuery } from 'querystring';

export interface DefaultMetaDataProps {
  description: string;
  title: string;
  image: string;
  type: string;
  alt: string;
  keywords: string;
  publishedAt: string;
  updatedAt: string;
  MIME: string;
  author_name: string;
}

export interface HeaderProps {
  props: DefaultMetaDataProps;
}

export interface MetaInfoTagsProps {
  name: string;
  content: string;
}

export interface LayoutProps {
  children: React.ReactNode;
  description: string;
  title: string;
  image: string;
  type: string;
  alt: string;
  keywords: string;
  publishedAt: string;
  updatedAt: string;
  MIME: string;
  author_name: string;
}

export interface FormDataProps {
  name: string;
  email: string;
  message: string;
}

export interface FormErrorProps {
  state: boolean;
  msg: string;
}

export interface Params extends ParsedUrlQuery {
  post: string;
}

interface BodyProps {
  markDefs?: {
    _key: string;
    _type: string;
    href: string;
  }[];
  level?: number;
  listItem?: string;
  style: string;
  _key: string;
  _type: string;
  children: {
    _key: string;
    _type: string;
    marks?: {
      text: string;
      _key: string;
      _type: string;
    }[];
    text: string;
  };
}

export interface CommonPath {
  slug: {
    current: string;
  };
}

export interface DefaultMetaDataProps {
  description: string;
  title: string;
  image: string;
  type: string;
  alt: string;
  keywords: string;
  publishedAt: string;
  updatedAt: string;
  MIME: string;
  author_name: string;
}

export interface PostProps {
  _createdAt: string;
  _id: string;
  _updatedAt: string;
  author: {
    bio: BodyProps;
    name: string;
    slug: {
      current: string;
    };
  };
  body: BodyProps;
  category: {
    title: string;
    slug: {
      current: string;
    };
    description: string;
  };
  description: string;
  image: string;
  caption: string;
  featured: boolean;
  recommended: boolean;
  publishedAt: string;
  slug: {
    current: string;
  };
  tags?: {
    title: string;
  }[];
  title: string;
}

export interface AllTopicsProps {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  title: string;
  slug: {
    current: string;
  };
}
export interface AllCategoryProps {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
}

export interface SpecificCategoryProps {
  title: string;
  slug: { current: string };
  _id: string;
  post: PostProps[];
}
