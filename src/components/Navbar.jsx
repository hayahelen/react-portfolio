import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full bg-neutral-900 bg-opacity-80 backdrop-blur-md shadow-md z-50'>
      <div className='container mx-auto flex flex-wrap items-center justify-between px-8 py-4'>
        {/* Branding */}
        <div className='text-xl font-bold text-cyan-400 hover:text-cyan-300 transition duration-300'>
          <Link to='hero' smooth={true} duration={500} className='cursor-pointer'>
            MyPortfolio
          </Link>
        </div>

        {/* Hamburger Menu for Smaller Screens */}
        <input id='menu-toggle' type='checkbox' className='hidden peer' />
        <label
          htmlFor='menu-toggle'
          className='block md:hidden text-cyan-400 cursor-pointer text-2xl'
        >
          ☰
        </label>

        {/* Navigation Links */}
        <ul className='hidden peer-checked:flex peer-checked:flex-col peer-checked:items-center md:flex md:flex-row items-center gap-6 text-sm font-medium mt-4 md:mt-0 mx-auto'>
          <li>
            <Link
              to='hero'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-cyan-400 transition duration-300'
            >
              Hero
            </Link>
          </li>
          <li>
            <Link
              to='about'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-cyan-400 transition duration-300'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='technologies'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-cyan-400 transition duration-300'
            >
              Technologies
            </Link>
          </li>
          <li>
            <Link
              to='experience'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-cyan-400 transition duration-300'
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to='projects'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-cyan-400 transition duration-300'
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-cyan-400 transition duration-300'
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className='flex items-center gap-4 text-lg text-neutral-400'>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
