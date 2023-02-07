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
  const query = `*[type=="post"]`;

  const result = await client.fetch(query, { post });

  return result;
};
