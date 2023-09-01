import React from "react";
import { useState } from "react";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Drinks from "./Drinks";
import Desert from "./Desert";

const Button = () => {
  const [show, setShow] = useState("desserts");
  const changeShow = (name) => {
    console.log(name);
    setShow(name);
  };
  return (
    <div className='flex flex-wrap -my-6'>
      <div className='px-4 w-full text-center mb-7'>
        <button
          id='1'
          type='button'
          onClick={() => changeShow("lunch")}
          className={
            show === "lunch"
              ? "text-lg font-serif capitalize bg-transparent  border-none  font-bold text-skin-main m-3 inline-block "
              : "text-lg font-[inherit] capitalize border-none bg-transparent font-medium text-skin-white m-3 inline-block "
          }
        >
          lunch
        </button>
        <button
          onClick={() => changeShow("dinner")}
          type='button'
          className={
            show === "dinner"
              ? "text-lg font-serif capitalize bg-transparent  border-none  font-bold text-skin-main m-3 inline-block "
              : "text-lg font-[inherit] capitalize border-none bg-transparent font-medium text-skin-white m-3 inline-block "
          }
        >
          dinner
        </button>
        <button
          onClick={() => changeShow("drinks")}
          type='button'
          className={
            show === "drinks"
              ? "text-lg font-serif capitalize bg-transparent  border-none  font-bold text-skin-main m-3 inline-block "
              : "text-lg font-[inherit] capitalize border-none bg-transparent font-medium text-skin-white m-3 inline-block "
          }
        >
          drinks
        </button>
        <button
          onClick={() => changeShow("desserts")}
          type='button'
          className={
            show === "desserts"
              ? "text-lg font-serif capitalize bg-transparent  border-none  font-bold text-skin-main m-3 inline-block "
              : "text-lg font-[inherit] capitalize border-none bg-transparent font-medium text-skin-white m-3 inline-block "
          }
        >
          desserts
        </button>
      </div>
      {show === "lunch" ? <Lunch /> : null}
      {show === "dinner" ? <Dinner /> : null}
      {show === "drinks" ? <Drinks /> : null}
      {show === "desserts" ? <Desert /> : null}
    </div>
  );
};

export default Button;
