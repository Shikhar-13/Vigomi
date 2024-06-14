import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion"


export default function Front() {
  return (
    <div>
      
      <section className='h-[540px] w-full flex bg-black '>
          <div>
            <div>
              <Spline className='sm:mt-0 md:absolute md:pl-96 md:pr-0.5 items-end md:justify-end sm:h-80 absolute' scene="https://prod.spline.design/G3XyWtyW-2xuJbsq/scene.splinecode" />
            </div>
            <motion.div className='sm:mt-40 md:mt-0 md:pt-0 items-center justify-center bg-transparent'>
              <h3 className=' pl-6 pt-28 bg-transparent md:pt-80  mt-12 md:px-14 md:pl-16 text-slate-50 items-start justify-start font-montserrat absolute'>vigomi</h3>
              <h1 className=' bg-transparent md:pt-96 pt-44 md:px-14 text-slate-50 text-8xl items-start justify-start font-montserrat'>Grow with us</h1>
            </motion.div> 
          </div>


      </section>
    </div>
  );
}

