import React from "react";
import img from "./images/4.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      name='footer'
      className='relative flex h-full  items-center
    mx-auto overflow-hidden w-full  bg-gray-900/95 '
    >
      <div className=' h-full w-full absolute'>
        <img
          src={img}
          className='absolute inset-0 object-cover mix-blend-overlay h-full w-full'
          alt=''
        />
      </div>
      <div className='w-full relative m-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-3 '>
          <div className='text-center mx-8 mb-6 '>
            <h3 className='capitalize text-white text-2xl pb-4'>
              Our location
            </h3>
            <p className='text-lg text-white'>
              along poly road ilorin <br /> New delihi - 000 ****{" "}
            </p>
          </div>
          <div className='text-center mx-8 mb-6 '>
            <h3 className='capitalize text-white text-2xl pb-4'> Open Hours</h3>
            <p className='text-lg'>
              Mondat to sunday <br /> 9: 00 AM = 10: 00 PM
            </p>
          </div>
          <div className='text-center mx-8 mb-6 '>
            <h3 className='capitalize  text-2xl pb-4'>Contact Us</h3>
            <p>0816465776 *****</p>
            <p className='text-lg'>info@gmail.com</p>
            <ul className='mt-4 flex items-center justify-center '>
              <li className=''>
                <BsFacebook
                  className='h-8 w-8 mr-1 text-skin-main 
            text-xl items-center cursor-pointer'
                />
              </li>
              <li>
                <FaWhatsapp
                  className='h-9 w-9 text-skin-main 
            text-xl items-center cursor-pointer'
                />
              </li>
              <li>
                <AiOutlineInstagram
                  className='h-9 w-9 text-skin-main 
            text-xl items-center cursor-pointer'
                />
              </li>
              <li>
                <AiFillTwitterSquare
                  className='h-9 cursor-pointer w-9 text-skin-main 
            text-xl items-center '
                />
              </li>
            </ul>
          </div>
        </div>
        <hr className='h-1 m-5 w-[70%] mx-auto  ' />
        <div className='text-center mt-20 w-full pb-8 px-4 text-sm'>
          &copy; 2023 - designed by adeyemi
        </div>
      </div>
    </footer>
  );
};

export default Footer;
