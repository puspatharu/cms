

import { useState } from 'react'
import img1 from '../assets/cat-widget1.jpg.webp'
import img2 from '../assets/cat-widget2.jpg.webp'
import img3 from '../assets/cat-widget3.jpg.webp'
import Edit_Card_table from '../components/ui/Edit_Card_table'
function Cardtable() {
  const [click,setClick]=useState(null)
   const item =[
      {
        title:"social life",
        image:<img src={img1}></img>,
        des:'Enjoy your social life together'
      },
      {
        title:"politics" ,
        image:<img src={img2}></img>,
        des:'be a part of politics'
      },
       {
       title:"food",
         image:<img src={img3}></img>,
         des:'let the food be finished'
      }, 
      
    ]
  return (
     <div className='flex flex-col items-center py-5'>
      
     <table className='border-1 w-7/12'>
      <thead className='border-1'>
        <tr className='bg-secondary text-white'>
          <th className='border-1 border-black py-1.5 px-2'>S.N</th>
          <th className='border-1 border-black px-8'>Title</th>
           <th className='border-1 border-black px-8 '>Image</th>
            <th className='border-1 border-black px-8'>Description</th>
          <th className='border-1 border-black'>Action</th>
        </tr>
      </thead>
      <tbody className='border-1'>
        {
          item.map((val,i)=>{
            return(
              <tr key={i} className='border-1'>
                <td className='px-4'>{i+1}</td>
              <td className='border-1 w-14 items-center px-4'>{val.title}</td>
              <td className='border-1 px-4 h-5 w-5'>{val.image}</td>
              <td className='border-1 px-2  w-14'>{val.des}</td>
              <td className='px-4 py-1 flex gap-2 h-28 items-center justify-center'>
                <button onClick={()=>{
setClick('edit')
                }} className='bg-secondary px-2 text-center text-white cursor-pointer hover:bg-blue-600 rounded-sm py-1 text-sm'>Edit</button>
                {
                  click==='edit'?
                  <div>
                    <Edit_Card_table cancel={()=>{
                      setClick()
                    }}/>
                  </div>
                  :null
                }
                <button onClick={()=>{
                  setClick('delete')
                }} className='bg-red-700 px-2 text-white rounded-sm py-1 text-sm hover:bg-red-800'>Delete</button>
                {
                  click==='delete'?
                  <div className='fixed top-0 left-0 right-0 place-content-center bg-red-400/60 flex items-center h-full'>
<div className='place-content-center text-center bg-white rounded w-3/12 h-30  flex gap-7 flex-col'>
<p>Are you sure want to delete? </p>
<div className='flex gap-3 justify-end px-4'>
  <button className='border px-1 rounded'>Yes</button>
  <button onClick={()=>{
    setClick(null)
  }} className='border px-1 rounded'>No</button>
</div>
</div>
                  </div>
                  :null
                }
              </td>
              </tr>
          )
        })
        }
      </tbody>
     </table>
    </div>
  )
}

export default Cardtable