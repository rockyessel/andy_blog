import React from 'react';
import { ParsedUrlQuery } from 'querystring';

// -------Head---------- //
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
// -------------------------- //

// -------Layout---------- //
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
// -------------------------- //

// -------Form/Form-Validation---------- //
export interface FormDataProps {
  name: string;
  email: string;
  message: string;
}

export interface FormErrorProps {
  state: boolean;
  msg: string;
}

interface CommentFormDataProps {
  name: string;
  profile: string;
  email: string;
  comment: string;
  _id: string;
}

interface THOUGHT_ID_PROPS {
  url: string;
  _id: string;
  close: () => void;
}
// -------------------------- //

// -------[project]/[note]---------- //
export interface Params extends ParsedUrlQuery {
  post: string;
}

export interface Comment {
  name: string;
  email: string;
  profile: string;
  comment: string;
  _createdAt: string;
  _updatedAt: string;
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

export interface CodeProps {
  code: string;
  language: string;
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
  publishedAt: string;
  slug: {
    current: string;
  };
  tags?: {
    title: string;
  }[];
  title: string;
}

export interface CommentUserProps {
  data: {
    name: string;
    profile: string;
    _createdAt: string;
    comment: string;
  }[];
}
// -------------------------- //

// -------Modal---------- //
export interface ModalProps {
  isShown: boolean;
  close: () => void;
  modalContent: JSX.Element;
  modalHeader: string;
}

// --------------------------------- //
export interface NoteCardProps {
  title: string;
  viewCount: number;
  featured: boolean;
  recommended: boolean;
  image: string;
  description: string;
  tags: string;
  slug: { current: string };
  estimated_reading_time: number;
  comment: { _id: string }[];
}

export interface SanityImageProps {
  asset: { _ref: string; _type: string };
  _key: string;
  _type: string;
  alt: string;
  image: {
    url: string;
    metadata: {
      dimensions: {
        height: number;
        width: number;
      };
    };
  };
}
export interface SanityTableProps {
  _key: string;
  _type: string;
  rows: {
    _key: string;
    _type: string;
    cells: string[];
  }[];
}

export interface HomeProps {
  tags: string;
  type: string;
  _createdAt: string;
  _id: string;
  _type: string;
  _updatedAt: string;
  body: BodyProps;
  description: string;
  github_project_url: string;
  image: string[];
  live_website: string;
  slug: { current: string };
  title: string;
}

export interface ResumeQueryProps {
  _createdAt: string;
  _updatedAt: string;
  title: string;
  description: string;
  body: BodyProps;
}
