import React from 'react'
import { Formik,Form,Field } from 'formik'
function Catagoryform() {
  return (
    <div className='flex flex-col gap-4'>
      <Formik initialValues={{
username:'',
email:'',
password:'',
confirm_password:''
      }}
      onSubmit={(values)=>{
        console.log(values)
         try {
       axios.get('http://localhost:3000/banners').then((result) => {
      console.log(result.data)
      setData([...result.data])
    }).catch((eror) => {
      console.log(eror)
    })
  }
   catch (error) {
      console.log(error)
    }
      }}
      >

{({})=>{
return <Form>
      <div>
      <label htmlFor="">username</label>
      <Field className='border px-4 py-1' type="text" name="username" />
      </div>

       <div>
      <label htmlFor="">email</label>
      <Field className='border px-4 py-1' type="text" name="email"/>
      </div>

       <div>
      <label htmlFor="">password</label>
      <Field className='border px-4 py-1' type="text" name="password" />
      </div>

       <div>
      <label htmlFor="">confirm_password</label>
      <Field className='border px-4 py-1' type="text" name="confirm_password" />
      </div>
      <button type='submit' className='border px-2 py-1 rounded w-fit bg-blue-500 text-white'>Submit</button>
      </Form>
}}
     
      </Formik>
    </div>
  )
}

export default Catagoryform
