import client from './client';

export const CommonPathProps = async (path: string = '') => {
  const query = `
  *[_type=="${path}"]{
    slug{
        current,
    }
}`;

  const result = await client.fetch(query, { path });

  return result;
};

export const PostDetailsData = async (post = '') => {
  const query = `*[_type == 'post' && slug.current == '${post}'][0]{
    title,
    caption,
    featured,
    recommended,
    description,
  _createdAt,
  _id,
  _updatedAt,
  author->{
    bio,
    "image":image.asset->url,
    name,
    slug{
      current,
    },
  },
  body,
  category->{
  title,
  slug{
    current,
  },
  description,
  },
  "image": mainImage.asset->url,
  publishedAt,
  slug{
  current,
  }
}`;

  const result = await client.fetch(query, { post });

  return result;
};

export const AllPostData = async () => {
  const query = `*[_type == 'post'][]{
    title,
    description,
    featured,
    recommended,
  _createdAt,
  _id,
  _updatedAt,
  author->{
    bio,
    "image":image.asset->url,
    name,
    slug{
      current,
    },
  },
  body,
  category->{
  title,
  slug{
    current,
  },
  description,
  },
  "image": mainImage.asset->url,
  publishedAt,
  slug{
  current,
  }
}`;

  const result = await client.fetch(query);

  return result;
};

export const AllTopics = async () => {
  const query = `*[_type == 'topics']`;

  const result = await client.fetch(query);

  return result;
};

export const SpecificCategory = async (category = '') => {
  const query = `*[_type == "category" && slug.current == "${category}"]{
  title,
    slug {
    current,
    },
  _id,
  "post": *[_type == "post" && category->._id == ^._id][]{
  author->{
    name,
    slug {
    current,
    },
    "image": image.asset->url,
  },
    slug {
    current,
    },
  "image": mainImage.asset->url,
  category->{
    title,
    slug {
    current,
    },
  },
  body,
  title,
  featured,
  recommended,
  publishedAt,
  _createdAt,
  _updatedAt,
  description,
}
}`;

  const result = await client.fetch(query, { category });

  return result;
};

export const AllCategory = async () => {
  const query = `*[_type == 'category']`;

  const result = await client.fetch(query);

  return result;
};