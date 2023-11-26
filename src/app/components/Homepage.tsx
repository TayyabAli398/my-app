import React from 'react'
import Image from 'next/image'

const Homepage = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-20 pb-24 md:px-0 px-20'>
<Image src={"/HeroImage.png"} width={100} height={100} alt='profile image' className='rounded-full w-64 h-60'/>
<h1 className='text-lg md:text-6xl font-semibold from-neutral-800 pt-8 text-center '> Hello I am Tayyab Ali</h1>
<p className='text-sm md:text-2xl font-semibold text-center py-6'>UI/UX Designer/Developer || Full Stack Web Developer</p>
<button className='text-lg border rounded-md py-4 px-6 hover:bg-black hover:text-white'>Join Now</button>
    </div>
  )
}

export default Homepage