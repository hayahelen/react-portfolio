import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-auto items-center'>
        <ul className='flex gap-8 text-lg'>
          <li>
            <Link
              to='hero'
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-cyan-400'
            >
              Hello
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
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a
          href='https://www.linkedin.com/in/haya-helen-hani-1179a899/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-cyan-400'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://github.com/hayahelen'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-cyan-400'
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
