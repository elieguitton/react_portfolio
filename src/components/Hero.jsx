import React from 'react'
import { HERO_CONTENT } from '../constants/index'
import profilePic from '../assets/profile.png'

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='pb-16 text-6xl font-thin tracking-light lg:mt-16 text-black'>Elie Guitton</h1>
                    <span className='bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Développeur Full-Stack</span>
                    <p className='my-2 max-w-xl py-6 font-light tracking-tighter text-black' style={{ whiteSpace: 'pre-line' }}>{HERO_CONTENT}</p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'> 
                    <img className='w-90 h-90' src={profilePic} alt='profile'/>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Hero