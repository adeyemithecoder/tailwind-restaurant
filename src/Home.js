import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section name='home' className='mt-[68px] section-min-heght'>
      <div className='w-full section-min-heght absolute  bg-gray-900/95'>
        <img
          src={require("./images/2.jpg")}
          className='h-full absolute mix-blend-overlay w-full'
          width='40'
          alt=''
        />
      </div>
      <div className='relative  section-min-heght text-white flex section-min-heght flex-col justify-center items-center'>
        <h2 className='font-bold text-6xl text-center '>Dine Out Restaurant</h2>
        <p className=' text-center font-bold max-w-xs my-5 mx-2'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          ipsum repellendus deserunt aperiam cumque rerum?
        </p>
        <Link
          to='menu'
          className='text-[#eaa023] bg-transparent hover:bg-[#eaa023]
           hover:text-white transition duration-300
           border rounded-full px-14 py-4 border-[#eaa023] '
        >
          Our Menu
        </Link>
      </div>
    </section>
  );
};

export default Home;
