

import img from '../assets/r1.png.webp'
function Rating() {
   const item =[
      {
       title:'Fannie Rowe',
        image:<img src={img}></img>,
        des:'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker',
        numberofstar:5
      },
      {
        title:"Hulda Sultan" ,
        image:<img src={img}></img>,
        des:'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker',
        numberofstar:5
      },
      
      
    ]
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
          item.map((val,i)=>{
            return(
              <tr key={i} className='border-1'>
                <td className='px-4'>{i+1}</td>
              <td className='border-1 w-14 items-center px-10'>{val.title}</td>
              <td className='border-1 px-4 h-5 w-5'>{val.image}</td>
              <td className='border-1 px-4  w-20 text-sm'>{val.des}</td>
                 <td className='border-1 px-2'>{val.numberofstar}</td>
              <td className='px-4 py-1 flex gap-2 h-28 items-center justify-center'>
                <button className='bg-secondary px-2 text-center text-white cursor-pointer hover:bg-blue-600 rounded-sm py-0.5 text-sm'>Edit</button>
                <button className='bg-red-700 px-2 text-white rounded-sm py-0.5 text-sm hover:bg-red-800'>Delete</button>
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