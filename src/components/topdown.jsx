import React from 'react'
import Spline from '@splinetool/react-spline';
import Form from './form';

export default function Topdown() {
  return (
    <div>

      <div className="relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center  text-white bg-zinc-900">
        <div>
        </div>
        <h2 className="text-4xl md:text-8xl font-raleway font-light">Services starts at</h2>
        <p className='text-3xl'>$250</p>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-black text-white">
        <h2 className="text-4xl">The Second Title</h2>
        <p>Scroll Down</p>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-zinc-800 text-white">
        <h2 className="text-4xl">The Third Title</h2>
        <p>Scroll Down</p>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-neutral-900 text-white">
        <Form />
      </div>
    </div>

        
    </div>
  )
}
