import React from 'react'

const About = () => {
  return (
    <section name='about' class="bg-skin-dark-light py-24">
    <div class="max-w-[1170px]  m-auto">
      <div class="flex flex-wrap">
        <div class="w-full px-1.5 text-center mb-16 ">
        <h3 className='text-2xl block  text-skin-main font-medium capitalize'>Our Story</h3>
          <h2 className='text-4xl capitalize'>About Us</h2>
        </div> 
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-7 ">
        <div className=" w-full px-4">
          <h3 className='text-3xl capitalize px-4' >welcome to dine out restaurant</h3>
          <p className='mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae non animi voluptatem temporibus possimus
            necessitatibus cumque doloribus modi veniam voluptatibus!
          </p>
          <p  className='mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae non animi voluptatem temporibus possimus
            necessitatibus cumque doloribus modi veniam voluptatibus!
          </p>
          <a href="#our-menu" className='text-[#eaa023] bg-transparent hover:bg-[#eaa023]
           hover:text-white
           border rounded-full mt-4 px-14 py-4 border-[#eaa023] '>chech our menu</a>
        </div>
        <div className=" w-full relative px-4">
          <div className=" before:content-['']
           before:absolute
             before:w-32 before:h-32  before:border-4 before:flex before:items-center
             before:justify-center before:animate-conrotate
          
          flex items-center justify-center  absolute h-full w-full">
            <h3 className=' z-[1] max-w-[250px]
          text-center text-skin-white font-bold capitalize text-3xl '>20 year + experience
          </h3> </div>
            <img className='w-full animate-pulse
            rounded-xl' src={ require('./images/2.jpg') } alt="" />
        </div>
      </div>

    </div>
  </section>
  )
}

export default About
