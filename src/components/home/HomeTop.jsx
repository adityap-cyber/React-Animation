import React from 'react'
import Video from './Video'

function HomeTop() {
  return (
    <div className='font-[font-1] pt-5 text-center'>
        <div  className='text-[9.5vw] uppercase flex justify-center items-center  leading-[9vw]'>
            {/* L'étincelle */}welcome
        </div>
        <div className='text-[9.5vw] uppercase flex justify-center items-center leading-[9vw]'>
            {/*qui*/}to<div className='h-[7vw] w-[16vw] rounded-full overflow-hidden  '><Video/></div>génère
        </div>
        <div className='text-[9.5vw] flex justify-center items-center uppercase leading-[9vw]'>
            la créativité
        </div>
    </div>
  )
}

export default HomeTop