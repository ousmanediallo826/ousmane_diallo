import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas'; 

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-1'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-80 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span className='text-[#915eff]'>Ousmane</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am Junior at <br className='sm:block hidden' />
            <span className='mb-3 text-[#915eff]'>CUNY New York City College of Technology.</span>
            I am majoring in <span className='text-[#915eff]'>Computer Systems | Software Engineering.</span>
          </p>
        </div>
      </div>
      <div className="relative w-full h-full " >
        <ComputersCanvas />
        <div  className='absolute xs:bottom-10 bottom-34 w-full flex justify-center items-center'>
        <a href='#about'>
        <div className='w-[35px] h-[64px] rounded-3x1 border-4 border-secondary flex justify-center items-start p-2 mt-2'>
        <motion.dev 
        animate={{
          y:[0, 24, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop'
        }} className="w-3 h-3 rounded-full bg-secondary mb-1" />
        </div>
        </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
