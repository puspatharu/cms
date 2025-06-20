
import React, { useState } from 'react'
import Edit_Menuitem from '../components/ui/Edit_Menuitem'

function Menuitem() {
  const item = [
    {
      itemname: 'pizza americano',
      des: 'Usage of the Internet is becoming more common due to rapid advance. Usage of the Internet is becoming more common due to rapid advance',
      small: 6,
      medium: 10,
      large: 14,
      p1: 15,
      p2: 20,
      p3: 25
    },
    {
      itemname: 'pizza tunisia',
      des: 'Usage of the Internet is becoming more common due to rapid advance. Usage of the Internet is becoming more common due to rapid advance',
      small: 6,
      medium: 10,
      large: 14,
      p1: 15,
      p2: 20,
      p3: 25
    },
    {
      itemname: 'beef lover pizza',
      des: 'Usage of the Internet is becoming more common due to rapid advance. Usage of the Internet is becoming more common due to rapid advance',
      small: 6,
      medium: 10,
      large: 14,
      p1: 15,
      p2: 20,
      p3: 25
    },
    {
      itemname: 'chicken lover  pizza',
      des: 'Usage of the Internet is becoming more common due to rapid advance. Usage of the Internet is becoming more common due to rapid advance',
      small: 6,
      medium: 10,
      large: 14,
      p1: 15,
      p2: 20,
      p3: 25
    },
    {
      itemname: 'meatball pizza',
      des: 'Usage of the Internet is becoming more common due to rapid advance. Usage of the Internet is becoming more common due to rapid advance',
      small: 6,
      medium: 10,
      large: 14,
      p1: 15,
      p2: 20,
      p3: 25
    },
    {
      itemname: 'Bakery special pizza',
      des: 'Usage of the Internet is becoming more common due to rapid advance. Usage of the Internet is becoming more common due to rapid advance',
      small: 6,
      medium: 10,
      large: 14,
      p1: 15,
      p2: 20,
      p3: 25
    },
    {
      itemname: 'pizza alfredo',
      des: 'Usage of the Internet is becoming more common due to rapid advance. Usage of the Internet is becoming more common due to rapid advance',
      small: 6,
      medium: 10,
      large: 14,
      p1: 15,
      p2: 20,
      p3: 25
    },
    {
      itemname: 'cheese lover pizza',
      des: 'Usage of the Internet is becoming more common due to rapid advance. Usage of the Internet is becoming more common due to rapid advance',
      small: 6,
      medium: 10,
      large: 14,
      p1: 15,
      p2: 20,
      p3: 25
    },
  ]
  const [click, setClick] = useState(null)
  return (
    <div className='flex flex-col items-center justify-center py-5 '>

      <table className='border-1 w-10/12'>
        <thead className='border-1'>
          <tr className='border-1 bg-secondary text-white'>
            <th className='border-1 border-black px-2 py-1.5'>S.N</th>
            <th className='border-1 border-black px-2 py-1.5'>item-name</th>
            <th className='border-1 border-black px-2 py-1.5'>description</th>
            <th className='border-1 border-black px-2 py-1.5'>
              Size

            </th>
            <th className='border-1 border-black px-2 py-1.5'>Prize</th>
            <th className='border-1 border-black px-2 py-1.5'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            item.map((val, i) => {
              return (
                <tr key={i} className='border-1'>
                  <td className='border-1 px-2'>{i + 1}</td>
                  <td className='border-1 capitalize px-2'>{val.itemname}</td>
                  <td className='border-1 px-2 py-1 text-sm'>{val.des}</td>
                  <td className='border-1 px-2'>
                    <tr className='border-1 text-sm'>
                      <td className='border-1 p-1'>small</td>
                      <td className='border-1 p-1'>medium</td>
                      <td className='p-1'>large</td>
                    </tr>
                    <tr className='border-1'>
                      <td className='border-1'>{val.small}</td>
                      <td className='border-1'>{val.medium}</td>
                      <td className='border-1'>{val.large}</td>
                    </tr>
                  </td>
                  <td className='border-1 px-2'>
                    <tr className='border-1 text-sm'>
                      <td className='border-1 p-1'>less</td>
                      <td className='border-1 p-1'>medium</td>
                      <td className='p-1'>large</td>
                    </tr>
                    <tr className='border-1'>
                      <td className='border-1'>{val.p1}</td>
                      <td className='border-1'>{val.p2}</td>
                      <td className='border-1'>{val.p3}</td>
                    </tr>
                  </td>
                  <td className='px-4 flex gap-2 h-32 items-center justify-center'>
                    <button onClick={() => {
                      setClick('edit')
                    }} className='bg-secondary px-3  text-center text-white cursor-pointer hover:bg-blue-600 rounded-sm py-1 text-sm'>Edit</button>
                    {
                      click === 'edit' ?
                        <div>
                          <Edit_Menuitem closepop={()=>{
                            setClick()
                          }}/>
                        </div>
                        : null
                    }
                    <button onClick={() => {
                      setClick('delete')
                    }} className='bg-red-700 px-3 text-white rounded-sm py-1 text-sm hover:bg-red-800'>Delete</button>
                    {
                      click === 'delete' ?
                        <div className='top-0 left-0 right-0 fixed h-full bg-gray-900/30 flex items-center place-content-center'>
                          <div className='bg-white h-40 rounded w-3/12 place-content-center gap-6 text-center flex flex-col'>
                            <p className=''>Are you sure want to delete ?</p>
                            <div className='flex justify-end  gap-2 px-5'>
                              <button className='border px-1 rounded'>Yes</button>
                              <button className='border px-1 rounded' onClick={() => {
                                setClick(null)
                              }}>No</button>
                            </div>
                          </div>
                        </div> : null
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

export default Menuitem