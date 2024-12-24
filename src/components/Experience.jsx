import React from 'react';
import { EXPERIENCES } from '../constants';
import {motion} from "framer-motion";
const Experience = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <motion.h1 whileInView={{opacity:1, y:0}}
      initial={{opacity:0 , y:-100}}
      transition={{duration:0.5}} className="my-20 text-center text-4xl">Experience</motion.h1>
      <div>
        {EXPERIENCES.map((experience) => (
          <article
            key={experience.id} // Use a unique ID if available
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
             className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">
                {experience.year}
              </p>
            </motion.div>
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}} className="w-full max-w-xl lg:w-3/4">
              <motion.h6 whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}} className="mb-2 font-semibold">
                {experience.role} -{' '}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </motion.h6>
              <motion.p whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}} className="mb-4 text-neutral-400">{experience.description}</motion.p>
              <div>
                {experience.technologies?.map((tech) => (
                  <span
                    key={tech} // Use tech name directly as key if unique
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
