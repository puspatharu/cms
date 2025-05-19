
import react from 'react'
import { IoPerson } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
function Toolbar() {


  return (
    <div>


      <div className='bg-[#2c8feb] py-4 flex gap-4 pr-6 justify-end items-center'>
        <div className='flex gap-2'>
        <div className='bg-white rounded'>
          <IoPerson />
        </div>
        <div className=' text-white  text-sm'>Profile</div>
        </div>
        <div>
          <IoMdArrowDropdown />
      </div>
        </div>
    </div>

  )
}

export default Toolbar