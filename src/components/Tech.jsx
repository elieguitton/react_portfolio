import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaPhp } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";



const style = { color: 'black' }

const Tech = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPhp className='text-7xl text-sky-700' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJava className='text-7xl text-orange-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-500' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoPostgresql className='text-7xl text-sky-700' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiMongodb className='text-7xl text-green-500' />
            </div>
        </div>
    </div>
  )
}

export default Tech