

import { useEffect, useState } from 'react'
import img1 from '../assets/b1.jpg.webp'
import img2 from '../assets/b2.jpg.webp'
import img3 from '../assets/b3.jpg.webp'
import userimg from '../assets/user.png.webp'
import Edit_Blogtable from '../components/ui/Edit_Blogtable'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Blogtable() {
  const [edit, setEdit] = useState(null)
  const [editdata,setEditdata]=useState([])
  const [datas, setData] = useState([]);
  const getdatas = async () => {
    try {
      await axios.get('http://localhost:3000/about').then((result) => {
      console.log(result.data)
      setData([...result.data])
    }).catch((eror) => {
      console.log(eror)
    })
  }
   catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getdatas()
  }, [])

   const deletedatas = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:3000/about/${id}`).then((result) => {
      console.log(result.data)
      setEdit(null);
getdatas();
    }).catch((eror) => {
      console.log(eror)
    })
  }
   catch (error) {
      console.log(error)
    }
  }
  return (
     <div className='flex flex-col items-center py-5'>
      
     <table className='border-1 w-10/12'>
      <thead className='border-1'>
        <tr className='bg-secondary text-white'>
          <th className='border-1 border-black py-1.5 px-1.5'>S.N</th>
           <th className='border-1 border-black px-1.5'>BlogImage</th>
               <th className='border-1 border-black px-1.5'>UserImage</th>
          <th className='border-1 border-black px-1.5'>Username</th>
              <th className='border-1 border-black px-1.5 '>Date</th>
                  <th className='border-1 border-black px-1.5 '>React</th>
                      <th className='border-1 border-black px-1.5 '>Comment</th>
                          <th className='border-1 border-black px-1.5 '>Title</th>
            <th className='border-1 border-black px-1.5'>Description</th>
          <th className='border-1 border-black px-1.5'>Action</th>
        </tr>
      </thead>
     
       <tbody className='border-1'>
          {
            datas.map((val, i) => {
              return (
                <tr key={i} className='border-1'>
                  <td className='px-4'>{val.id}</td>
                  <td className='border-1 px-4 h-5 w-5'>{val.blogimage}</td>
                  <td className='border-1 px-4 h-5 w-5'>{val.userimage}</td>
                   <td className='border-1 px-4 h-5 w-5'>{val.username}</td>
                    <td className='border-1 w-14 items-center px-10'>{val.date}</td>
                     <td className='border-1 w-14 items-center px-10'>{val.react}</td>
                      <td className='border-1 w-14 items-center px-10'>{val.comment}</td>
                       <td className='border-1 w-14 items-center px-10'>{val.title}</td>
                  <td className='border-1 px-2  w-14'>{val.description}</td>
                  <td className='px-4 py-1 flex gap-2 h-28 items-center justify-center'>
                    <button onClick={() => {
                      setEdit('Edit');
                      setEditdata([val]);
                    }} className='bg-secondary px-2 text-center text-white cursor-pointer hover:bg-blue-600 rounded-sm py-1 text-sm'>Edit</button>
                    {
                      edit === 'Edit' ?
                        <div>
                          <Edit_Blogtable editdata={editdata} closepop={() => setEdit()} />
                        </div>

                        : null
                    }
                    <button onClick={() => {
                      setEdit('Delete');
                    }} className='bg-red-700 px-2 text-white rounded-sm py-1 text-sm hover:bg-red-800'>Delete</button>
                    {
                      edit === 'Delete' ?
                        <div className='fixed top-0 left-0 right-0 h-full bg-gray-900/80 place-content-center flex items-center '>
                          <div className='h-40 w-3/12 flex flex-col gap-6 place-content-center text-center rounded bg-white'>
                            <p> Are you sure want to delete ?</p>
                            <div className='flex gap-2 justify-end px-4'>
                              <button onClick={()=>{
                                deletedatas(val.id);
                              }} className='border px-1 rounded'>Yes</button>
                              <button onClick={() => {
                                setEdit(null)
                              }} className='border px-1 rounded'>No</button>
                            </div>
                          </div>
                        </div>
                        : null
                    }
                    <Link to={`/viewblog/${val.id}?id=${val.id}`} state={{id:val.id}}>
                      <button type='submit' className='bg-secondary px-1 text-center text-white cursor-pointer hover:bg-blue-600 rounded-sm py-1 text-sm'>View</button>
                    </Link>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
     </table>
    </div>
  )
}

export default Blogtable