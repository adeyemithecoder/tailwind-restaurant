import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section name='abou' className='bg-skin-dark-light section-min-heght py-24'>
      <div className='max-w-[1170px]   m-auto'>
        <div className='flex flex-wrap'>
          <div className='w-full px-1.5 text-center mb-16 '>
            <h3 className='text-2xl block  text-skin-main font-medium capitalize'>
              Our Story
            </h3>
            <h2 className='text-4xl capitalize'>About Us</h2>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-7 '>
          <div className=' w-full-red-600 px-4'>
            <h3 className='text-3xl capitalize px-4'>
              welcome to dine out restaurant
            </h3>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae non animi voluptatem temporibus possimus
              necessitatibus cumque doloribus modi veniam voluptatibus!
            </p>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae non animi voluptatem temporibus possimus
              necessitatibus cumque doloribus modi veniam voluptatibus!
            </p>
            <Link
              to='menu'
              className='text-[#eaa023] inline-block  bg-transparent hover:bg-[#eaa023]
           hover:text-white
           border rounded-full mt-4 px-14 py-6 border-[#eaa023] '
            >
              chech our menu
            </Link>
          </div>
          <div className=' w-full relative px-4'>
            <div
              className=" before:content-['']
           before:absolute
             before:w-32 before:h-32  before:border-4 before:flex before:items-center
             before:justify-center before:animate-conrotate
          
          flex items-center justify-center  absolute h-full w-full"
            >
              <h3
                className=' z-[1] max-w-[250px]
          text-center text-skin-white font-bold capitalize text-3xl '
              >
                2 year + experience
              </h3>{" "}
            </div>
            <img
              className='w-full animate-pulse
            rounded-xl'
              src={require("./images/2.jpg")}
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
