import React from 'react'
import aboutImg from '../assets/about.png'
import { ABOUT_TEXT } from '../constants/index'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>
          Mon
          <span className='text-neutral-500'> parcours</span>
        </h2>

        <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
              <img className='w-90 h-90 rounded-2xl' src={aboutImg} alt='about-me'/>
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
              <div className='flex justify-center lg:items-start'> 
                <p className='my-2 maxw-wl py-6 font-light tracking-tighter text-black' style={{ whiteSpace: 'pre-line' }}>{ABOUT_TEXT}</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About