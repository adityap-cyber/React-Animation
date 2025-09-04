import React from 'react'
import { Link } from 'react-router-dom'

function HomeBottom() {
  return (
    <div className='font-[font-2] flex items-center justify-center gap-2 '>
      <div className=' hover:border-violet-600 hover:text-pink-300  text-[6.5vw] uppercase border-white border-2  rounded-full px-10 pt-4 leading-[6vw]'>
        <Link to="/projects" >Projects</Link>
      </div>
      <div className='hover:border-violet-600 hover:text-pink-300 text-[6.5vw] uppercase border-white border-2  rounded-full px-10 pt-4 leading-[6vw]'>
        <Link to="/agence" >Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottom