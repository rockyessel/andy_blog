import React from 'react';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full h-auto bg-slate-900 px-6 py-10 text-white flex flex-wrap gap-20'>
      <section className='flex flex-col gap-5'>
        <div className='flex flex-col gap-4'>
          <span className='text-4xl font-extrabold'>Logo</span>

          <p className='max-w-md'>
            Professionally fabricate client-centered content for superior
            expertise. Objectively leverage others covalent imperatives
            vis-a-vis state of the art potentialities. Competently matrix
            principle-centered manufactured products for viral portals.
            Dynamically.
          </p>
        </div>

        <div className='flex flex-col gap-5'>
          <p className='font-bold flex flex-col gap-y-0 p-0 mp0'>
            <span>Email: andyblog@andy.io</span>
            <span>Phone: 0243316032</span>
          </p>

          <ul className='flex items-center gap-2 text-4xl'>
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
      </section>

      <section className='flex flex-col gap-10'>
        <div>
          <span className='text-lg font-bold'>Quick Link</span>
          <ul className='grid grid-cols-2 gap-x-10'>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Top 10</li>
            <li>Category</li>
            <li>Write For Us</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <span className='text-lg font-bold'>Popular Tags</span>
          <ul className='flex flex-wrap gap-2 max-w-sm text-sm'>
            <li className='bg-slate-700 p-2'>anime</li>
            <li className='bg-slate-700 p-2'>fashion</li>
            <li className='bg-slate-700 p-2'>travel</li>
            <li className='bg-slate-700 p-2'>javscript</li>
            <li className='bg-slate-700 p-2'>rust</li>
            <li className='bg-slate-700 p-2'>hangout</li>
            <li className='bg-slate-700 p-2'>sony</li>
            <li className='bg-slate-700 p-2'>apple</li>
            <li className='bg-slate-700 p-2'>canon</li>
            <li className='bg-slate-700 p-2'>canva</li>
            <li className='bg-slate-700 p-2'>photoshop</li>
          </ul>
        </div>
      </section>

      <section className='flex flex-col gap-4'>
        <div>
          <span className='text-lg font-bold'>Subscribe</span>
          <p className='max-w-sm'>
            Subscribe to our free weekly newsletter and never miss a thing. No
            spam. Only hand-picked lifestyle trends.
          </p>
        </div>

        <form className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <label className='sr-only'>Email</label>
            <input
              title='Email'
              className='max-w-xl py-2 px-4 h-10 white-black/25 bg-transparent border border-white/25 outline-none'
              type='text'
            />
            <button className='bg-slate-700 px-4 py-2.5 h-10 font-medium'>
              Subscribe
            </button>
          </div>
          <div className='max-w-sm'>
            <label className='sr-only'>Checkbox</label>
            <input title='checkbox' type='checkbox' />{' '}
            <label>
              I agree that my submitted data is being collected and stored.
            </label>
          </div>
        </form>

        <div>
          <span>© 2023 AndyBlog. All rights reserved.</span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
