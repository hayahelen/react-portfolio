import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { RiAngularjsLine } from "react-icons/ri";
import { RiPhpFill } from "react-icons/ri";
import { TbBrandLaravel } from "react-icons/tb";
import { SiSpringboot } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoPython } from "react-icons/bi";
import { SiXampp } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiApacheairflow } from "react-icons/si";
import { animate, transform } from 'framer-motion';
import {motion} from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate:{
        y: [10,-10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
})






const Technologies = () => {
  return <div className='border-b border-neutral-800 pb-24'>
    <motion.h1 whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y:-100}}
    transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h1>
    <motion.div whileInView={{opacity:1, x:0}}
    initial={{opacity:0 , x:-100}}
    transition={{duration:1.5}}
    className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div variants={iconVariants(2.5)} 
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div variants={iconVariants(4)} 
        initial="initial"
        animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiAngularjsLine className='text-7xl'/>
        </motion.div>
        <motion.div variants={iconVariants(3.5)} 
        initial="initial"
        animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiPhpFill className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div variants={iconVariants(3)} 
        initial="initial"
        animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <TbBrandLaravel className='text-7xl text-red-500'/>
        </motion.div>
        <motion.div variants={iconVariants(4.5)} 
        initial="initial"
        animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiSpringboot className='text-7xl text-green-400'/>
        </motion.div>
        <motion.div variants={iconVariants(5)} 
        initial="initial"
        animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div variants={iconVariants(5.5)} 
        initial="initial"
        animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <BiLogoPostgresql className='text-7xl text-sky-700'/>
        </motion.div>
        <motion.div variants={iconVariants(2)} 
        initial="initial"
        animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <BiLogoPython className='text-7xl'/>
        </motion.div>
        <motion.div variants={iconVariants(5.5)} 
        initial="initial"
        animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiXampp className='text-7xl text-orange-400'/>
        </motion.div>
        <motion.div variants={iconVariants(4)} 
        initial="initial"
        animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaDocker className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div variants={iconVariants(1.5)} 
        initial="initial"
        animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiApacheairflow  className='text-7xl text-cyan-400'/>
        </motion.div>
    </motion.div>
  </div>
}

export default Technologies