import React from 'react'

import { motion } from "framer-motion"
import Spline from '@splinetool/react-spline';

export default function Services() {
    
    return (
        <div >
            <section className='h-fit md:h-screen w-full bg-black justify-center'>
                <div className='grid-rows-1  md:grid md:grid-cols-2'>
                <div className='h-96 md:h-auto'>
              <Spline className='sm:mt-0 md:pr-0.5 h-80 md:h-auto' scene="https://prod.spline.design/68EdzTqxQ0BUIyX5/scene.splinecode"
      />

            </div>
                    <div>
                        <div className=' mt-28 pb-28 md:pb-0 px-auto md:mt-0 grid grid-rows-3 gap-6'>
                            <motion.div className=' mx-6 align-middle justify-center'>
                                <motion.h1  
                                className=' text-5xl md:text-6xl text-slate-50'>SOFTWARE</motion.h1>
                                <h4 className=' text-slate-50'>web</h4>
                                <h4 className=' text-slate-50'>app</h4>
                            </motion.div >
                            <div className=' mx-6 align-middle justify-center'>
                                <h1 className='text-5xl md:text-6xl text-slate-50'>MARKETING</h1>
                                <h4 className='pt-3 text-slate-50'>social media</h4>
                                <h4 className='pt-3 text-slate-50'>seo</h4>
                            </div>
                            <div className='mx-6 align-middle justify-center'>
                                <h1 className='text-5xl md:text-6xl text-slate-50'>DESIGNING</h1>
                                <h4 className='pt-3 text-slate-50'>UI/Ux</h4>
                                <h4 className='pt-3 text-slate-50'>graphic design</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
    )
}
