import React from "react";
import img2 from "./images/2.jpg";
import img5 from "./images/5.jpg";
import { BsStarFill } from "react-icons/bs";

const Testimonial = () => {
  return (
    <section name='testi' className='bg-skin-dark pb-12 py-20'>
      <div className='max-w-[1170px] m-auto'>
        <div className='flex flex-wrap'>
          <div className='w-full px-1.5 text-center mb-16'>
            <h3 className='text-xl text-skin-main font-medium capitalize'>
              {" "}
              testimonial
            </h3>
            <h2 className='text-4xl capitalize hover: '>Some Feedbacks</h2>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3  sm:grid-cols-2 gap-2 w-full mr-4 mb-8 p-8 rounded-lg'>
          <div className='mr-4 mb-8 p-8 border-4 border-[#191f3a] rounded-lg'>
            <div className='flex justify-between items-center'>
              <div className='testi-author-className'>
                <h3 className='text-base capitalize mb-1'>raj emmanuel</h3>
                <span className='block text-sm capitalize'>
                  {" "}
                  food specialist
                </span>
              </div>
              <div className='max-w-[60px] rounded-[50%]'>
                <img
                  className='max-w-[60px] rounded-[50%] '
                  src={img2}
                  alt=''
                />
              </div>
            </div>
            <p className='my-4'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit officia cumque minima.
            </p>
            <p className='flex text-skin-main justify-between w-[40%] '>
              <BsStarFill />
              <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />{" "}
              <BsStarFill />
            </p>
          </div>
          <div className='mr-4 mb-8 border-4 border-[#191f3a] p-8 rounded-lg'>
            <div className='flex justify-between items-center'>
              <div className='testi-author-className'>
                <h3 className='text-base capitalize mb-1'>raj emmanuel</h3>
                <span className='block text-sm capitalize'>
                  {" "}
                  food specialist
                </span>
              </div>
              <div className='max-w-[60px] rounded-[50%]'>
                <img
                  className='max-w-[60px] rounded-[50%] '
                  src={img2}
                  alt=''
                />
              </div>
            </div>
            <p className='my-4'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit officia cumque minima.
            </p>
            <p className='flex text-skin-main justify-between w-[40%] '>
              <BsStarFill />
              <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />{" "}
              <BsStarFill />
            </p>
          </div>
          <div className='mr-4 mb-8 p-8 border-4 border-[#191f3a] rounded-lg'>
            <div className='flex justify-between items-center'>
              <div className='testi-author-className'>
                <h3 className='text-base capitalize mb-1'>raj emmanuel</h3>
                <span className='block text-sm capitalize'>
                  {" "}
                  food specialist
                </span>
              </div>
              <div className='max-w-[60px] rounded-[50%]'>
                <img
                  className='max-w-[60px] rounded-[50%] '
                  src={img5}
                  alt=''
                />
              </div>
            </div>
            <p className='my-4'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit officia cumque minima.
            </p>
            <p className='flex text-skin-main justify-between w-[40%] '>
              <BsStarFill />
              <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
