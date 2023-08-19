import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleClick = () => setNav(!nav);
  return (
    <header className='bg-skin-dark-light w-full text-white fixed top-0 z-10'>
      <section className='max-w-4xl mx-auto p-4 flex justify-between items-center '>
        <h1 className='text-3xl font-medium '>
          <img src={require("./images/icon.jpg")} width={40} alt='' />
        </h1>
        <div>
          <button
            onClick={handleClick}
            className=' md:hidden text-3xl p-3 mr-4 bottom-0  flex justify-center text-center
      cursor-pointer z-10 w-11 h-9 bg-skin-dark relative'
          >
            <div
              className={
                nav
                  ? "bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 before:content-[''] before:bg-white before:w-8  before:h-1 before:rounded before:absolute  before:-translate-x-4 before:-translate-y-3  before:transition-all  before:duration-500   after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute   after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500  "
                  : "bg-transparent w-8 h-1 rounded absolute  top-4 -mt-0.5 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:rotate-45 before:absolute after:-rotate-45 before:-translate-x-4 before:-translate-y-0    before:transition-all before:duration-500   after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded  after:absolute  after:-translate-x-4 after:translate-y-0 after:transition-all after:duration-500  "
              }
            ></div>
          </button>
          <ul className='hidden text-xl space-x-8 md:flex'>
            <li className='cursor-pointer capitalize '>
              <Link to='home' smooth={true} offset={500} duration={500}>
                Home{" "}
              </Link>
            </li>
            <li className='cursor-pointer capitalize '>
              <Link to='about' smooth={true} offset={-200} duration={500}>
                About{" "}
              </Link>
            </li>
            <li className='cursor-pointer capitalize '>
              <Link to='testi' smooth={true} offset={400} duration={500}>
                Testimonial{" "}
              </Link>
            </li>
            <li className='cursor-pointer capitalize '>
              <Link to='menu' smooth={true} offset={-500} duration={-500}>
                menu{" "}
              </Link>
            </li>
            <li className='cursor-pointer capitalize '>
              <Link to='footer' smooth={true} offset={200} duration={500}>
                footer{" "}
              </Link>
            </li>
          </ul>
        </div>
        <section
          className={
            !nav
              ? "fixed right-0 top-0 transition transform duration-1000 bg-skin-dark-light h-3/4 translate-x-0 z-[1] w-72 overflow-y-auto pt-20 pb-10"
              : "fixed right-0 top-0 transition transform duration-1000 bg-skin-dark-light h-3/4 translate-x-full z-[1] w-72 overflow-y-auto pt-20 pb-10"
          }
        >
          <ul className=' flex flex-col md:hidden'>
            <li className=' cursor-pointer text-xl capitalize py-3 px-8 '>
              <Link
                onClick={handleClick}
                to='about'
                smooth={true}
                offset={-200}
                duration={500}
              >
                Home{" "}
              </Link>
            </li>
            <li className=' cursor-pointer text-xl capitalize py-3 px-8 '>
              <Link
                onClick={handleClick}
                to='about'
                smooth={true}
                offset={-400}
                duration={500}
              >
                About{" "}
              </Link>
            </li>
            <li className='cursor-pointer text-xl capitalize py-3 px-8 '>
              <Link
                onClick={handleClick}
                to='testi'
                smooth={true}
                offset={-200}
                duration={500}
              >
                Testimonial{" "}
              </Link>
            </li>
            <li className='cursor-pointer text-xl capitalize py-3 px-8 '>
              <Link
                onClick={handleClick}
                to='menu'
                smooth={true}
                offset={-500}
                duration={500}
              >
                menu{" "}
              </Link>
            </li>
            <li className='cursor-pointer text-xl capitalize py-3 px-8 '>
              <Link
                onClick={handleClick}
                to='footer'
                smooth={true}
                offset={-600}
                duration={500}
              >
                footer{" "}
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </header>
  );
};

//  <ul className='hidden md:flex' >
//   <li><Link to='home' smooth={true} offset={50} duration={500} >Home</Link> </li>
//  </ul>
export default Navbar;
// {/* <ul className={!nav ? 'hidden' :' absolute bg-zinc-200 w-full px-8'}>
// <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="home" smooth={true}offset={50} duration={500} >Home </Link></li >
//   <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose}  to="about" smooth={true}offset={50} duration={500} >About </Link></li >
//   <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="support" smooth={true}offset={50} duration={500} >Support </Link></li >
//   <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="platform" smooth={true}offset={50} duration={500} >Platfom </Link></li >
//   <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="pricing" smooth={true}offset={50} duration={500} >Pricing </Link></li>
//     <div className="flex flex-col my-4">
//   <button className=" bg-transparent text-indigo-600 px-8 py-3 mb-4" >aign in</button>
//   <button className="px-8 py-3" >aign up</button>
// </div>
// </ul> */}
