
import react from 'react'
import { IoPerson } from "react-icons/io5";
function Toolbar() {


  return (
    <div>


      <div className='bg-[#2c8feb] py-4 flex gap-3 justify-end items-center'>
        <div className='bg-white rounded'>
          <IoPerson />
        </div>
        <div className='pr-6 text-white  text-sm'>Profile</div>

      </div>
    </div>

  )
}

export default Toolbar