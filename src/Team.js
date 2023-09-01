import React from "react";
import img7 from "./images/7.jpg";
import img1 from "./images/6.jpg";
import img2 from "./images/8.jpg";

const Team = () => {
  return (
    <section name='team' className='pb-32 py-20 bg-skin-dark' id='team'>
      <div className='max-w-[1170px] m-auto'>
        <div className='flex flex-wrap'>
          <div className='w-full px-1.5 text-center mb-16 '>
            <h3 className='text-xl text-skin-main font-medium capitalize'>
              {" "}
              team
            </h3>
            <h2 className='text-4xl capitalize hover: '>Our Chiefs</h2>
          </div>
          <div className='grid grid-cols-1 w-4/5 mx-auto lg:grid-cols-3 md:grid-cols-2 '>
            <div className=' px-4 lg:mb-9 sm:mb-8 group mb-16 relative'>
              <img
                className='w-full transition duration-300 group-hover:skew-y-[5deg] rounded-lg hover:skew-y-6 '
                src={img1}
                alt=''
              />
              <div
                className='bg-skin-dark-light rounded-lg p-4 text-center absolute left-8 right-8 transform
             translate-y-1/2 bottom-0 pointer-events-none transition duration-300 group-hover:bg-[#eaa023] group-hover:-translate-y-4 '
              >
                <h3 className=' text-lg capitalize mb-3'>sunday peter</h3>
                <p className='capitalize '>head chef</p>
              </div>
            </div>

            <div className='px-4 group sm:mb-9 lg:mb-9 mb-16 relative'>
              <img
                className='w-full transition duration-300 group-hover:skew-y-[5deg] rounded-lg hover:skew-y-6 '
                src={img7}
                alt=''
              />
              <div
                className='bg-skin-dark-light rounded-lg p-4 text-center absolute left-8 right-8 transform
             translate-y-1/2 bottom-0 pointer-events-none transition duration-300 group-hover:bg-[#eaa023] group-hover:-translate-y-4 '
              >
                <h3 className=' text-lg capitalize mb-3'>stephen peter</h3>
                <p className='capitalize '>second chef</p>
              </div>
            </div>
            <div className='px-4 group sm:mb-9 lg:mb-9 relative'>
              <img
                className='w-full transition duration-300 group-hover:skew-y-[5deg] rounded-lg hover:skew-y-6 '
                src={img2}
                alt=''
              />
              <div
                className='bg-skin-dark-light rounded-lg p-4 text-center absolute left-8 right-8 transform
             translate-y-1/2 group-hover:bg-[#eaa023] transition duration-300 group-hover:-translate-y-4 bottom-0 pointer-events-none '
              >
                <h3 className=' text-lg capitalize mb-3'>adewale serif</h3>
                <p className='capitalize '>team header</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
