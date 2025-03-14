import React from 'react'
import logo from '../assets/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const style = { color: 'black' }

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <h1 className='mx-2 w-10 font-bold text-black'>EG</h1>
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin style={style}/>
            <FaGithub style={style}/>
        </div>
    </nav>
  )
}

export default Navbar