import React from 'react'
import Video from '../components/home/Video'
import HomeTop from '../components/home/HomeTop'
import HomeBottom from '../components/home/HomeBottom'

function Home() {
  return (
    <div className=' text-white'>
       <div className='h-screen w-screen fixed bg-red-900'>
            <Video/>
        </div>
        <div className='h-screen w-screen flex flex-col justify-between relative'>
            <HomeTop/>
            <HomeBottom/>
        </div>
    </div>
       
    
    
  )
}

export default Home