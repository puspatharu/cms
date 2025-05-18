import React from 'react'
function Form(){
  return(
    <div>
 <div className='flex flex-col items-center justify-center py-9 gap-7'>
    <h1 className='text-3xl'>Form validation</h1>
     <div className='flex flex-col gap-4'>
      <div className='flex flex-col'>
        <label htmlFor="Username" className='text-xl'>Username: </label>
        <input className='px-4 py-0.5 text-xl bg-[#bcddf9]' type="text" name='username' placeholder='Enter your name' id='Username' />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="Username" className='text-xl'>Email: </label>
        <input className='px-4 py-0.5 text-xl bg-[#bcddf9]' type="text" placeholder='Enter your email' name='email' />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="Username" className='text-xl'>Password: </label>
        <input className='px-4 py-0.5 text-xl bg-[#bcddf9]' type="password" name='password' placeholder='Enter your password' />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="Username" className='text-xl'>Confirm_Password: </label>
        <input className='px-4 py-0.5 text-xl bg-[#bcddf9]' type="password" name='confirm_password' placeholder='Confirm_password' />
      </div>
   <button className='bg-blue-400 px-2 py-1.5 w-26 rounded-xl'>Submit</button>
     </div>
    </div>
    </div>
  )
}

export default Form