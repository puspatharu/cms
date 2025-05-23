
import React, { useState } from 'react'

function Button() {
const [clicked,setclicked]= useState(false)
// let abc=0;
  return (

    <div className='w-full py-6 text-center'>
      <div>{clicked}</div>
      <button onClick={()=>{
   setclicked(true);
      }} className='bg-secondary border border-black rounded px-2 py-1'>Click me</button>
      {
        clicked?(
        <div className='fixed top-0 left-0 right-0 flex items-center h-full bg-amber-300/60  place-content-center'>
          <div className='text-white place-content-center rounded-2xl h-30 font-medium w-3/12 bg-red-400'>Are you sure want to edit</div>
        </div>
        ):(null)
      }
    </div>

  )
}

export default Button