import React from 'react';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaFlipboard } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { TbBrandReddit } from 'react-icons/tb';
import { TfiFacebook } from 'react-icons/tfi';

interface Props {
  body?: string;
  title?: string;
  slug?: string;
}

const handleCopy = (url: string) => {
  navigator.clipboard.writeText(url).then(
    () => {
      console.log('Text copied to clipboard');
    },
    () => {
      console.error('Unable to copy text to clipboard');
    }
  );
};

// screenrant.com
const SocialButtonLinks = (props: Props) => {
  return (
    <div className='flex flex-wrap items-center justify-between'>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=https://andyblog-lake.vercel.app/posts/${props.slug}&src=sdkpreparse`}
        rel='noreferrer'
        target='_blank'
        title='Share on Facebook'
        className='bg-[#3156ad] font-medium text-white inline-flex items-center gap-1 rounded-sm py-1 px-3'
      >
        <TfiFacebook className='text-xl' /> Share
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${props?.title}&url=https://andyblog-lake.vercel.app/posts/${props.slug}`}
        target='_blank'
        title='Share on Facebook'
        rel='noreferrer'
        className='bg-[#21acdf] font-medium text-white inline-flex items-center gap-1 rounded-sm py-1 px-3'
      >
        <BsTwitter className='text-xl' /> Tweet
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=https://andyblog-lake.vercel.app/posts/${props.slug}&title=${props?.title}&source=andyblog-lake.vercel.app&summary=${props?.body}`}
        target='_blank'
        title='Share on Facebook'
        rel='noreferrer'
        className='bg-[#2179d1] font-medium text-white inline-flex items-center gap-1 rounded-sm py-1 px-3'
      >
        <BsLinkedin className='text-xl' /> Share
      </a>
      <a
        href={`https://www.reddit.com/submit?url=https://andyblog-lake.vercel.app/posts/${props.slug}`}
        target='_blank'
        title='Share on Facebook'
        rel='noreferrer'
        className='bg-[#f05e31] font-medium text-white inline-flex items-center gap-1 rounded-sm py-1 px-3'
      >
        <TbBrandReddit className='text-xl' /> Share
      </a>
      <a
        href={`http://share.flipboard.com/bookmarklet/popout?v=2&title=${props?.title}&url=https://andyblog-lake.vercel.app/posts/${props.slug}&utm_campaign=tools&utm_medium=article-share&utm_source=andyblog-lake.vercel.app`}
        target='_blank'
        title='Share on Facebook'
        rel='noreferrer'
        className='bg-[#e9483d] font-medium text-white inline-flex items-center gap-1 rounded-sm py-1 px-3'
      >
        <FaFlipboard className='text-xl' /> Share
      </a>
      <button
        type='button'
        onClick={() =>
          handleCopy(`https://andyblog-lake.vercel.app/posts/${props.slug}`)
        }
        title='Share on Facebook'
        className='bg-[#42484e] font-medium text-white inline-flex items-center gap-1 rounded-sm py-1 px-3'
      >
        <FiLink className='text-xl' /> Copy
      </button>
      <a
        href={`mailto:?Subject=${props?.title}&Body=Check this out https://andyblog-lake.vercel.app/posts/${props.slug}`}
        target='_blank'
        title='Share on Facebook'
        rel='noreferrer'
        className='bg-[#bdc3cc] font-medium text-white inline-flex items-center gap-1 rounded-sm py-1 px-3'
      >
        <MdEmail className='text-xl' /> Email
      </a>
    </div>
  );
};

export default SocialButtonLinks;
