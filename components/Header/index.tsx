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
  { name: 'contact', href: 'contact' },
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
    <header className='w-full sticky top-0 z-50 h-22 flex items-center transition-colors duration-300'>
      <div className='mx-auto px-6 sm:px-6 lg:px-8 flex items-center justify-between rtl:flex-row-reverse md:rtl:flex-row h-16 w-full'>
        <div className='flex-shrink-0 flex-1 justify-start'>
          <Link
            href='/'
            className='hover:opacity-75 transition-opacity duration-200'
          >
            Logo
          </Link>
        </div>
        {/* === Mobile Menu Button === */}
        <button
          ref={mobileMenuRef}
          onClick={() => (mobileMenuOpen ? closeMenu() : openMenu())}
          className='flex flex-col justify-between items-center flex-1 p-0 max-w-8 h-8 relative z-50 lg:hidden cursor-pointer'
        >
          <div className='h-[1px] w-full bg-zinc-50 absolute origin-center top-1/3 -translate-y-1/2 transition-all ease-in-out duration-200'></div>
          <div className='h-[1px] w-full bg-zinc-50 absolute origin-center bottom-1/3 -translate-y-1/2 transition-all ease-in-out duration-200'></div>
        </button>

        {/* === Desktop Navigation === */}
        <nav
          className='hidden lg:flex space-x-14 flex-1 justify-center items-center'
          aria-label='Main navigation'
        >
          <ul>
            <li>
              <Link
                href='/'
                className='transition-colors capitalize duration-300 px-4 py-2 hover:text-zinc-500'
              >
                Home
              </Link>
              <Link
                href='/portfolio'
                className='transition-colors capitalize duration-300 px-4 py-2 hover:text-zinc-500'
              >
                Portfolio
              </Link>
              <Link
                href='/about'
                className='transition-colors capitalize duration-300 px-4 py-2 hover:text-zinc-500'
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        <div className='hidden lg:flex items-center space-x-4 flex-1 justify-end'>
          <Link href='/contact'>Contact</Link>
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
    </header>
  );
};

export default Header;
