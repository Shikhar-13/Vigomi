import React from 'react'
import { motion } from 'framer-motion'

export default function Links() {
  return (
    <div>
      <div id="about"className='conatainer mx-auto px-4 items-center justify-center'>
        <div className='container px-10'>
          <motion.h1 
          initial={{opacity:0}}
          whileInView={{transition:{duration:1},opacity:1,transitionDelay:1}}
          
          className='mb-20 font-raleway text-5xl sm:text-7xl text-white text-center'>We help our client to build presence.</motion.h1>
          <motion.p initial={{opacity:0}}
          whileInView={{transition:2,opacity:1,transitionDelay:1}} className='font-medium text-xl text-white text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni doloremque facilis asperiores odio quis natus id sint delectus quaerat eum doloribus unde dolorum, possimus beatae tempora. Quos error maxime ad.</motion.p>
        </div>
      </div>
    </div>
  )
}
