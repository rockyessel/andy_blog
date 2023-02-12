import React from 'react';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-black flex text-white flex-col gap-5 justify-center items-center w-full h-auto text-center py-5'>
      <p className='text-4xl font-extrabold'>lOGO</p>
      <p>
        The world&apos;s defining voice in music and pop culture: breaking
        what&apos;s new and what&apos;s next since 1952
      </p>

      <p className='flex flex-col gap-1'>
        <i className='text-2xl capitalize font-medium text-red-600'>
          join our mailing list
        </i>
        <i className='font-bold'>Sign Up Now {`>`}</i>
      </p>

      <div>
        <ul className='flex items-center gap-5 text-2xl'>
          <li>
            <a rel='noopener' title='Facebook' target={`_blank`} href='#'>
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a rel='noopener' title='Instagram' target={`_blank`} href='#'>
              <FaInstagramSquare />
            </a>
          </li>
          <li>
            <a rel='noopener' title='Twitter' target={`_blank`} href='#'>
              <FaTwitterSquare />
            </a>
          </li>
          <li>
            <a rel='noopener' title='YouTube' target={`_blank`} href='#'>
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>

      <div>
        <ul className='flex gap-5 items-center'>
          <li>Privacy Policy</li>
          <li>Cookie notice</li>
          <li>terms of use</li>
          <li>advertise</li>
          <li>contact</li>
        </ul>
      </div>

      <p>
        When you purchase through links on our site, we may earn affiliate
        commission.
      </p>

      <p>© 2023 AndyBlog. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
