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
  const query = `*[_type == 'post' && slug.current == '${post}'][0]`;

  const result = await client.fetch(query, { post });

  return result;
};

export const AllPostData = async () => {
  const query = `*[_type == 'post'][]{
    title,
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
  categories[]->{
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
