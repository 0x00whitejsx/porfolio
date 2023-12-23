import React from 'react'
import Core from "../assets/Untitled design(1).png"

function Skills() {
  return (
    <div className='w-full h-[100vh] bg-black backpattern md:pl-10 md:pr-10'>
      <div className='flex justify-center items-center'>
      <div className='w-1/2'></div>
      <div className='w-1/2'>
        <div>
        <img src={Core} alt="tmeline" className='w-[700px] mt-10 h-[790px] object-cover  bg-black p-2'  />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skills