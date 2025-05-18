
import React from 'react'
import img1 from '../assets/b1.jpg.webp'
import img2 from '../assets/b2.jpg.webp'
import img3 from '../assets/b3.jpg.webp'
import userimg from '../assets/user.png.webp'
function Blogtable() {
const item=[
  {
   blogimage:<img src={img1}></img>,
   userimage:<img scr={userimg}></img>,
   username:'Mark Wiens',
   date:13,
   react:15,
   comment:4,
   title:'stocking your restaurant kitchen finding reliable sellers',
   des:'Saving money – is something we would all like to do. Whether you are struggling to manage day to day or earning a six figure salary, saving is something we all think about'
  },
    {
   blogimage:<img src={img2}></img>,
   userimage:<img scr={userimg}></img>,
   username:'Mark Wiens',
   date:13,
   react:15,
   comment:4,
   title:'cooking for special occasions cookware in the brick and mortr',
   des:'Let’s talk about meat fondue recipes and what you need to know first. Meat fondue also known as oil fondue is a method of cooking all kinds of meats, poultry, and seafood in a pot of heated oil.'
  },
    {
   blogimage:<img src={img3}></img>,
   userimage:<img scr={userimg}></img>,
   username:'Mark Wiens',
   date:13,
   react:15,
   comment:4,
   title:'when your meal bites back tips for avoiding food poisoning',
   des:'While some people really seem to have a knack for barbequing – always grilling up a perfect meal – for the rest of us, it is something that must be learned, not something that just comes naturally. Believe it or not, there is technique involved.'
  },
]
  return (
     <div className='flex flex-col items-center py-5'>
      
     <table className='border-1 w-11/12'>
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
          <th className='border-1 border-black'>Action</th>
        </tr>
      </thead>
      <tbody className='border-1'>
        {
          item.map((val,i)=>{
            return(
              <tr key={i} className='border-1'>
                <td className='px-4'>{i+1}</td>
              <td className='border-1 px-2 '>{val.blogimage}</td>
              <td className='border-1'>{val.userimage}</td>
              <td className='border-1 px-2'>{val.username}</td>
              <td className='border-1 px-2'>{val.date}</td>
              <td className='border-1 px-2'>{val.react}</td>
              <td className='border-1 px-2'>{val.comment}</td>
              <td className='border-1 w-2/12 px-1 text-sm'>{val.title}</td>
              <td className='border-1 w-3/12 px-1 text-sm'>{val.des}</td>
              <td className='px-4 flex gap-2 h-56 items-center justify-center'>
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

export default Blogtable