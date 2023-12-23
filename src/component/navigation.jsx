import React from 'react'

function Navigation() {
  return (
    <div className='w-full  top-0 p-8'>
        <div className='flex justify-around items-end'>
            <div></div>
            <div>
        <a className='p-5 text-sm text-green-700 hover:text-green-900' href='home'> [ Home ]</a>
        <a className='p-5 text-sm text-green-700 hover:text-green-900' href='Projecs'> [ Projects ]</a>
        <a className='p-5 text-sm text-green-700 hover:text-green-900' href='Skills'> [ Skills ]</a>
        <a className='p-5 text-sm text-green-700 hover:text-green-900' href='About'> [ About ]</a>
      
        </div>
        </div>
    </div>
  )
}

export default Navigation