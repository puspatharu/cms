

import { useEffect, useState } from 'react'
import img from '../assets/r1.png.webp'
import Edit_Rating from '../components/ui/Edit_Rating'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Rating() {
  const [click,setClick]=useState(null)
  const [datas,setData] = useState([]);
  const [editdata,setEditdata]=useState([]);
const getdatas=async ()=>{
  try {
    await axios.get('http://localhost:3000/rating').then((result)=>{
  console.log(result.data)
      setData([...result.data])
    }).catch((err)=>{
      console.log(err)
    })
  } catch (error) {
    console.log(error)
  }
}
useEffect(()=>{
getdatas();
},[])

const deletedatas = async (id)=>{
  console.log(id)
  try {
    await axios.delete(`http://localhost:3000/rating/${id}`).then((result)=>{
  console.log(result.data)
      setClick(null)
      getdatas();
    }).catch((err)=>{
      console.log(err)
    })
  } catch (error) {
    console.log(error)
  }
}

  return (
   <div className='flex flex-col items-center py-5'>
     <table className='border-1 w-9/12'>
      <thead className='border-1'>
        <tr className='bg-secondary text-white'>
          <th className='border-1 border-black py-1.5 px-2'>S.N</th>
          <th className='border-1 border-black px-8'>Title</th>
           <th className='border-1 border-black px-8 '>Image</th>
            <th className='border-1 border-black px-16 '>Description</th>
              <th className='border-1 border-black px-3'>NumberofStar</th>
          <th className='border-1 border-black'>Action</th>
        </tr>
      </thead>
      <tbody className='border-1'>
        {
          datas.map((val,i)=>{
            return(
              <tr key={i} className='border-1'>
                <td className='px-4'>{val.id}</td>
              <td className='border-1 w-14 items-center px-10'>{val.title}</td>
              <td className='border-1 px-4 h-5 w-5'>{val.image}</td>
              <td className='border-1 px-4  w-20 text-sm'>{val.description}</td>
                 <td className='border-1 px-2'>{val.numberofstar}</td>
              <td className='px-4 py-1 flex gap-2 h-28 items-center justify-center'>
                <button onClick={()=>{
                  setClick('edit')
                  setEditdata([val]);
                }} className='bg-secondary px-2 text-center text-white cursor-pointer hover:bg-blue-600 rounded-sm py-1 text-sm'>Edit</button>
                {
                  click==='edit'?
                  <div>
<Edit_Rating editdata={editdata} closepop={()=>{
  setClick()
}} />
                  </div>
                  :null
                }
                <button onClick={()=>{
                  setClick('delete')
                }} className='bg-red-700 px-2 text-white rounded-sm py-1 text-sm hover:bg-red-800'>Delete</button>
                {
                  click==='delete'?
                  <div className='fixed top-0 left-0 right-0 place-content-center  h-full bg-red-400/50 flex items-center'>
                    <div className='bg-white h-40 rounded w-3/12 place-content-center gap-6 text-center flex flex-col'>
                            <p className=''>Are you sure want to delete ?</p>
                            <div className='flex justify-end  gap-2 px-5'>
                              <button onClick={()=>{
                                deletedatas(val.id)
                              }} className='border px-1 rounded'>Yes</button>
                              <button className='border px-1 rounded' onClick={() => {
                                setClick(null)
                              }}>No</button>
                            </div>
                          </div>
                  </div>
                  :null
                }
                  <Link to={`/viewrating/${val.id}?id=${val.id}`} state={{id:val.id}} >
                  <button type='submit' className='bg-secondary px-1 text-center text-white cursor-pointer hover:bg-blue-600 rounded-sm py-1 text-sm'>View</button>
                 </Link>
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

export default Rating