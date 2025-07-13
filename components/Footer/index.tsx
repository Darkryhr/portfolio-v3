import React from 'react';
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import SocialButton from './SocialButton';

const Footer = () => {
  return (
    <footer className='bg-amber-400 py-16 px-8 border-t-2'>
      <div className='flex justify-between items-center pt-3'>
        <div className='flex-1 flex flex-col items-start'>
          <p className='font-heading font-black font-stretch-125% text-2xl'>
            &copy;
            <span className=' text-transparent outlined-text'>
              {new Date().getFullYear()}
            </span>
          </p>
          <strong className='font-heading font-black font-stretch-125% text-2xl leading-tight'>
            Gabriel
            <br />
            Lellouche
          </strong>
        </div>
        <div className='flex-1 flex items-center lg:justify-center justify-end'>
          Logotype
        </div>
        <div className='hidden lg:flex-1 lg:flex justify-end items-end flex-col overflow-x-clip'>
          <p className=''>Try your best to like yourself.</p>
          <ul className='flex justify-between mt-2 w-2/5'>
            <li>
              <SocialButton
                href={'https://twitter.com/GabrielAintReal'}
                id='twitter_link'
              >
                <AiOutlineTwitter size={24} />
              </SocialButton>
            </li>
            <li>
              <SocialButton
                href={'https://www.linkedin.com/in/gabriel-lellouche'}
                id='linkedin_link'
              >
                <FaLinkedinIn size={24} />
              </SocialButton>
            </li>
            <li>
              <SocialButton
                href={'https://instagram.com/crck_dome'}
                id='instagram_link'
              >
                <AiOutlineInstagram size={24} />
              </SocialButton>
            </li>
            <li>
              <SocialButton
                href={'https://github.com/Darkryhr'}
                id='github_link'
              >
                <AiFillGithub size={24} />
              </SocialButton>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
