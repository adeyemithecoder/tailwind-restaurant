import ReactPaginate from 'react-paginate';
import React, { useState } from 'react'

const Pagination = () => {
  const [open, setOpen] = useState(1);
 
    let [num, setNum] = useState(1)
    const [cur, setCur] = useState(1)
    const pages = [
        {page: num},
        {page: num + 1 },
        {page: num + 2 }

    ]
  const Next = () => {
    num < 15 && setNum(++num) 
    setCur(num)
  } 
  const Prev = () => {
     num > 1 && setNum(--num) 
    setCur(num)
  }
   
  return (
    <div  className=" h-screen flex justify-center items-center" >  Pagination
      {/* <button onClick={Prev}
       className='h-12 w-12 border-2 rounded-l-lg border-r-0
                 border-indigo-600 hover:bg-indigo-600 hover:text-white ' >Prev</button>
        {
            pages.map((pg, index) => (
                <button onClick={() => setCur(pg.page)} key={index} className={`h-12 w-12
                 border-2 border-r-0
                 border-indigo-600 ${cur === pg.page && 'bg-indigo-600 text-whites'} `} >
                    {pg.page} </button>
            )) 
        }
        <button onClick={Next} className='h-12 w-12 border-2 rounded-r-lg
                 border-indigo-600 hover:bg-indigo-600 hover:text-white  
                 border-r-lg' >Next</button> */}
  
  <ReactPaginate
        // breakLabel="..."
        // previousLabel
        // pageCount
        // onPageChange
        // forcePage
        // activeClassName	
        // previousClassName	
        // nextClassName
        // nextLabel="next >"
        // onPageChange={handlePageClick}
        // pageRangeDisplayed={5}
        // pageCount={pageCount}
        // previousLabel="< previous"
        // renderOnZeroPageCount={null}
      />

    </div>
  
  )
}

export default Pagination
