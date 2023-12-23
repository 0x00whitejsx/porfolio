import React from 'react'
import './About.css'
import ConsIMG from '../assets/home.png'
import { TypeAnimation } from 'react-type-animation';
import Navigation from './navigation';


function Home() {
  return (
    <div className='w-full h-[100vh] bg-black backpattern md:pl-10 md:pr-10'>
       <Navigation /> 
        <div className='flex md:flex-row flex-col justify-center items-center '>
        <div className='w-1/2 flex flex-col justify-center items-center  align-middle p-5'>
            <p className="text-gray-200 text-2xl  mb-10">I'm Christopher White </p>
         <div>
        <TypeAnimation
      sequence={[
        'Backend Engineer', // Types 'One'
        1500, // Waits 1s
        'Blockchain Developer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Full Stack Engineer', // Types 'Three' without deleting 'Two'
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '4em', display: 'inline-block' }}
      className='text-green-700 font-mono'
    />
    </div>
        <div className='m-auto flex-col justify-around align-middle items-center '>
          <p className='w-5/6 text-gray-400 text-center m-5 mt-10 p-5'>Hey there! 🚀 With 4 years diving into Backend Engineering, Blockchain Development, and Full Stack wizardry, I'm not just a tech enthusiast—I'm a maestro blending Operations Research smarts with a burning passion for scaling apps and beefing up security. My game? Crafting apps that effortlessly evolve with the ever-growing demands. My heart? It beats for untangling the wild world of blockchain while mastering the art of full-stack architecture—talk about stoking the flames of my professional mojo! 🔥</p>
       
          <a className='p-5 text-sm  text-green-700 hover:text-green-900' href='../assets/whitejsx.pdf'> [  Download CV  ]</a>
        </div>
        </div>
        <div className='w-1/2 m-7 p-2'>
            <img src={ConsIMG} className='w-140 h-140 contrast-125 rounded-lg shadow-lg border-2 invert-0 border-t-black border-r-black border-l-black border-b-indigo-500 mt-5' />
        </div>
      
        </div>
    </div>
  )
}

export default Home