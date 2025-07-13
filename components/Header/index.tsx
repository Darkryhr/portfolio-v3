import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

import MobileNavLink from './MobileNavLink';

const navLinks = [
  { name: 'home', href: '/' },
  { name: 'portfolio', href: '/portfolio' },
  { name: 'about', href: '/about' },
  { name: 'contact', href: '/contact' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const closeMenu = () => {
    document.body.style.overflow = 'scroll';
    document.body.style.height = '100%';
    mobileMenuRef.current.classList.remove('close');
    mobileMenuRef.current.classList.add('open');

    setMobileMenuOpen(false);
  };

  const openMenu = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    mobileMenuRef.current.classList.remove('open');
    mobileMenuRef.current.classList.add('close');
    setMobileMenuOpen(true);
  };

  return (
    <header className='w-full sticky top-0 z-50 h-22 flex items-center transition-colors duration-300 bg-none'>
      <div className='mx-auto px-6 sm:px-6 lg:px-8 flex items-center justify-between rtl:flex-row-reverse md:rtl:flex-row h-16 w-full mt-1'>
        <div className='flex-shrink-0 flex-1 justify-start'>
          <Link
            href='/'
            className='hover:opacity-75 transition-opacity duration-200 font-bold text-3xl'
          >
            Gabriel L.
          </Link>
        </div>
        {/* === Mobile Menu Button === */}
        <button
          ref={mobileMenuRef}
          onClick={() => (mobileMenuOpen ? closeMenu() : openMenu())}
          className='flex flex-col justify-between items-center flex-1 p-0 max-w-8 h-8 relative z-50 lg:hidden cursor-pointer'
        >
          <div className='h-[1px] w-full bg-foreground absolute origin-center top-1/3 -translate-y-1/2 transition-all ease-in-out duration-200'></div>
          <div className='h-[1px] w-full bg-foreground absolute origin-center bottom-1/3 -translate-y-1/2 transition-all ease-in-out duration-200'></div>
        </button>

        {/* === Desktop Navigation === */}
        <nav className='hidden lg:block flex-1  ' aria-label='Main navigation'>
          <ul className='flex space-x-14 items-center justify-center mx-auto'>
            {navLinks.map(
              (navLink, i) =>
                navLink.name !== 'contact' && (
                  <li key={i} className=''>
                    <Link
                      href={navLink.href}
                      className='transition-opacity ease-in opacity-70 capitalize text-sm font-bold font-heading font-stretch-115% px-4 py-2 hover:opacity-100 contrast-150'
                    >
                      {navLink.name}
                    </Link>
                  </li>
                )
            )}
          </ul>
        </nav>
        <div className='hidden lg:flex items-center space-x-4 flex-1 justify-end'>
          <Link
            href='/contact'
            className=' font-semibold text-sm font-heading font-stretch-115% border py-3 px-6 bg-amber-400 text-black'
          >
            Contact
          </Link>
        </div>

        {/* === Mobile Navigation === */}

        <div
          className={`w-full h-screen absolute top-0 right-0 z-10 bg-black flex flex-col justify-between items-center transition-all duration-500 lg:hidden px-7 pb-1.5 pt-[20vh] ${
            mobileMenuOpen
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-100'
          }`}
        >
          <div className='absolute h-0.5 w-11/12 bg-zinc-800 top-[10vh] right-0'></div>
          <div
            className={`flex w-full justify-between items-start transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ul className='font-light font-lg opacity-75 flex flex-col space-y-6'>
              <li className=''>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://www.linkedin.com/in/gabriel-lellouche'
                >
                  <FaLinkedinIn size={28} />
                </a>
              </li>
              <li className=''>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://instagram.com/crck_dome'
                >
                  <AiOutlineInstagram size={28} />
                </a>
              </li>
              <li className=''>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://github.com/Darkryhr'
                >
                  <AiFillGithub size={28} />
                </a>
              </li>
            </ul>
            <nav
              className={`flex flex-col justify-between items-end max-h-52 h-full relative space-y-8 ${
                mobileMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {navLinks.map((navLink, index) => (
                <MobileNavLink
                  key={index}
                  href={navLink.href}
                  closeMenu={closeMenu}
                  index={index}
                  open={mobileMenuOpen}
                >
                  {navLink.name}
                </MobileNavLink>
              ))}
            </nav>
          </div>
          <div className='flex flex-col w-full justify-start pb-[15vh]'>
            <h6 className='font-extrabold text-amber-400'>Email</h6>
            <p className='opacity-90'>hello@gabriel-lellouche.com</p>
          </div>
          <div className='absolute h-0.5 w-11/12 bg-zinc-800 bottom-[10vh] left-0'></div>
        </div>
      </div>
      <div className='absolute w-full -bottom-2.5 [&>svg]:fill-none'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='100%'
          height='10px'
          preserveAspectRatio='none'
          viewBox='0 0 901.61 107.37'
        >
          <path d='M900 26.92c-3.66-.03-5.84-2.03-8.72-3.05-.23-.15-.46-.31-.69-.46-2.35-1.76-1.76-4.62-3.67-6.54-.48-.33-.94-.67-1.44-.98-2.79-1.69-2.79-1.67.29-2.98.45-.19.91-.44 1.23-.75 1.91-1.84 3.77-3.71 5.65-5.57 2.73-.98 2.02-3.12 2.07-4.73.06-1.66-2.27-1.61-3.71-1.73-.33-.03-.64-.07-.93-.13H.06c.03.15.09.31.17.48.84 1.64 2.72 1.67 4.61 1.1C7.1.9 9.35.78 11.61 1.5c.46 1.07 2.61.96 2.54 2.37-.08 1.46 1 2.33 2.2 3.17-1.23 2.25-3.66 3.52-5.97 4.9-2.76-.31-5.46.3-8.19.4-1.66.06-2.29.96-2.17 2.07.12 1.06 0 2.26 1.09 3.11-.25 2.57 2.45 4 3.67 6.01v.02c.02.05.07.09.09.14.17.3.3.61.38.94.06.22.89.3 1.36.45.51 1 2.2.81 2.74 1.96 1.16 2.48 4.2 4.08 4.84 6.89.18.8 1.53 1.01 2.65 1.1 2.47.2 2.27 1.28 1.28 2.69-1.71 2.44-3.64 3.7-7.65 3.38-6.07-.5-6.68.49-5.09 5.2.17.5.27 1.02.54 1.47 1.21 1.96.24 2.84-2.18 2.57-2.26-.25-2.59.67-2.38 2.07.33 2.22.68 4.57 2.26 6.37 1.56 1.78 1.92 4.49 5.25 5.07 2.04 2.14 4.08 4.29 6.11 6.43.26 1.74 1.01 3.14 3.46 3.38 1.89-.25 2.52.99 3.4 1.92-.11.41-.1.93-.69 1.07-.88.21-1.95.12-1.92 1.28.03 1.08.98 1.45 1.8 2.12 1.97 1.61 4 .73 6.05.58.91 1.09 1.31 2.09.78 3.56-.92 2.55 1.68 5.12 4.19 4.3 2.66-.87 5.37-.87 8.08-1.2 4.3.55 8.6.03 12.88-.2 4.25-.23 8.2-.4 9.68 3.8.21.18.41.36.62.54.85 1.37 3.21.86 4.09 2.15.65.94 3.84 2.34-.65 2.5-.92.03-.99.78-1.08 1.38 1.87 1.1 3.53 2.42 6.17 2.36 3.05-.07 4.27 1.57 3.16 3.89-.96 2 .63 3.61 3.53 3.61 13.33 0 26.67.12 40 0 22.03-.21 44.05-.68 66.08-.87 23.92-.2 47.87.32 71.77-.42 43.09-1.34 86.16-3.39 129.24-5.12 17.78-.72 35.56-1.38 53.35-2.07 23.7-.29 47.39-.67 71.09-.34 12.69.18 25.4-.36 38.1-.44 30.47-.18 60.94-.13 91.41-.45 18.63-.2 37.25-.98 55.88-1.36 8.33-.17 16.68-.34 25 .3.5.35 1.13.51 1.75.45 3.46-.36 6.9.07 10.34.13 3 .06 6.04-.1 8.99.53.4 0 .8 0 1.2-.01 1.78.67 3.5-.3 5.29-.13 7.11.69 14.28.72 21.42.89 10.63.26 21.26.44 31.87 1.02 8.7.48 17.36 1.56 26.11 1.48 11.08-.1 22.13.38 33.2.54 1.22.02 2.86.4 3.36-1.17-.03-.01-.05-.02-.08-.03l.59-.5c.9-.14 1.81-.28 2.72-.42 3.09-1.49 6.29-2.79 9.98-2.23 4.11.63 5.64-1.71 7.33-3.96.18-.19.37-.38.55-.57 1.07-.66 2.12-1.36 3.23-1.99 2.16-1.23 1.16-3.14 1.4-4.7.24-1.5-1.9-1.26-3.1-1.51-1.19-.24-2.54 0-3.46-.9-.59-.24-1.05-.77-1.85-.5-.89-.46-1.78-.93-2.66-1.39.06-.01.1-.01.16-.03-1.88-2.26-1.55-5.3-3.9-7.4.59-1.95 2.68-1.32 3.82-1.08 3.64.76 5.91-.4 7.59-2.87.2-.19.39-.39.59-.58.03-.3.06-.6.08-.9.57-.62.98-1.44 1.73-1.83 3.18-1.64 3.25-3.96 2.6-6.63-2.84.77-5.41.85-6.88-1.58-1.28-2.12-5-2-5.89-4.41-.06-.16-.11-.35-.06-.51.55-1.9-1.01-3.06-2.6-3.73-2.39-1.01-5.07-1.53-3.8-4.53.1-.25-.75-.75-1.15-1.14-.55-.53-1.97-.77-1.19-1.77.66-.84 1.79-.48 2.6-.17 4.24 1.6 6.78-1.32 9.63-2.75 1.28-.64 2.34-1.42 3.77-1.23 2.17.29 4.47-.41 6.55.56.63.3 1.17.07 1.52-.51 1.47-2.37 3.96-4.08 6.24-5.86 2.01-1.57 2.23-5.72-.03-5.74Z' />
        </svg>
      </div>
    </header>
  );
};

export default Header;
