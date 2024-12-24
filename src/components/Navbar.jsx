import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full bg-neutral-900 bg-opacity-80 backdrop-blur-md shadow-md z-50'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4'>
        {/* Branding */}
        <div className='text-2xl font-bold text-cyan-400 mb-4 md:mb-0'>
          <Link to='hero' smooth={true} duration={500} className='cursor-pointer'>
            MyPortfolio
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className='flex flex-col md:flex-row gap-4 md:gap-8 text-lg'>
          <li>
            <Link
              to='hero'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-cyan-400'
            >
              Hero
            </Link>
          </li>
          <li>
            <Link
              to='about'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-cyan-400'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='technologies'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-cyan-400'
            >
              Technologies
            </Link>
          </li>
          <li>
            <Link
              to='experience'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-cyan-400'
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to='projects'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-cyan-400'
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-cyan-400'
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className='flex items-center gap-4 text-2xl mt-4 md:mt-0'>
          <a
            href='https://www.linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-cyan-400'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-cyan-400'
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
