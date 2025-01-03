import React from 'react';
import { HERO_CONTENT } from '../constants';
import profile from "../assets/profile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.1, delay: delay } }
});

const Hero = () => {
  return (
    <div className='pt-20 border-b border-neutral-900 pb-4 lg:mb-35'>
      {/* Added padding to ensure the content is not overlapped by the navbar */}
      <motion.h1
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className='pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl text-center'
      >
        Haya-Helen Hani
      </motion.h1>

      <div className='flex flex-wrap'>
        {/* Left Section */}
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='my-2 max-w-xl py-6 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent text-center lg:text-left'
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className='my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left'
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Section */}
        <div className='w-100% lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profile}
              alt='Haya-Helen Hani'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
