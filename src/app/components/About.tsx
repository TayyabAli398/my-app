import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='flex flex-col py-40'>
        <h1 className='md:text-5xl text-2xl text-center font-bold py-6'>About Us</h1>
        <div className='md:flex-row flex flex-col justify-around items-center gap-6 py-10 px-20'>
<Image src={"/Hero.jpg"} alt='About-img' width={500} height={200} className='rounded-lg shadow-lg w-auto h-auto ' />
<div className='pl-10'>
    <p className='md:text-2xl text-sm font-normal py-4'>Hi, I'm Tayyab Ali, a full stack web developer based in Lahore, Pakistan. I have a passion for creating beautiful and functional websites using modern technologies.I have a bachelor's degree in computer science from the University of Virtual and three years of experience working as a web developer for various companies and freelance projects. I have developed websites using HTML, CSS, JavaScript,Next.js, React, Node.js,Tailwand Css, and other tools and frameworks </p>
    

</div>
        </div>

    </div>
  )
}

export default About