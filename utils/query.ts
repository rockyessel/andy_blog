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
