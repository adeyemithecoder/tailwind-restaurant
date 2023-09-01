import React from "react";
import Button from "./MenuComponent/Button";

const Menu = () => {
  return (
    <section
      name='menu'
      className='section-min-heght  bg-skin-dark py-20 pb-60  '
      id='about'
    >
      <div className='max-w-[1170px] m-auto'>
        <div className='flex flex-wrap '>
          <div className=' w-full px-1.5 text-center mb-16  '>
            <h3 className='text-xl text-skin-main font-medium capitalize'>
              Order now
            </h3>
            <h2 className='text-4xl capitalize hover: '>Our Menu</h2>
          </div>
        </div>
        <Button />
      </div>
    </section>
  );
};

export default Menu;
