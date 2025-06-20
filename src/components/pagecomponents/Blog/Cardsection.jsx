


import React, { useState } from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import upload from '../../../assets/upload.webp'
import * as Yup from 'yup'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
function Cardsection() {
  const [submit,setSubmit] = useState(false)
  const [datas,setData] =useState([])
  const forms = [
    { name: 'title', type: "text" },
    { name: "subtitle", type: "text" },
    { name: "imagecard", type: "file" },
  ];

    const fileUpload=(data,setFieldValue)=>{
    console.log(data);
    try {
      const formdata=new FormData()
     formdata.append('files',data)
      axios.post('http://localhost:3000/fileupload',formdata)
      .then((result)=>{
console.log(result.data)
  setFieldValue('imagecardid',result.data.id)
                setFieldValue('imagecard',result.data.file)
toast.success('successfully submitted')
      }).catch((eror)=>{
console.log(eror)
      })
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='lg:grid grid-cols-10 w-full gap-28'>
      <Toaster />
      <div className='col-span-3'>
        <div className='text-xl font-medium'>
          Card Section
        </div>
        <div className=' text-sm text-gray-600 font-medium'>
          
        <h1>[Title, subtitle, image]</h1>
        </div>
      </div>
      <div className='col-span-7'>
        <Formik initialValues={{
          subtitle: "",
          title: "",
          imagecard: "",
            imagecardid: "",
        }}
          onSubmit={(values) => {
           try {
    axios.post('http://localhost:3000/card',values).then((result)=>{
console.log(result.data);

  
            toast.success("successfully Submitted")
    }).catch((err)=>{
console.log(err);
    })
} catch (error) {
  console.log(error)
}
          }}

        
        >


          {({ setFieldValue, values, }) => {
            return (

              <Form>
                <div className='flex flex-col gap-6 capitalize   w-full lg:px-15 lg:py-5 py-4'>
                  {
                    forms.map((val, i) => {
                       if (val.type == 'file') {
                                             return (
                                               <div key={i} className='flex- flex-col gap-2'>
                     <label className=' text-base font-semibold'>
                                                 {val.name}
                                                 </label>
                                                 <label className='text-sm bg-tertiary outline-none h-60 flex flex-col items-center justify-center'>
                                                   {/* {val.name} */}
                                                   <input
                                                     id={val.name}
                                                     type={val.type}
                                                     name={val.name}
                                                     onChange={(e) => {
                                                      fileUpload(e.target.files[0],setFieldValue)
                                                      //  setFieldValue(val.name, e.target.files[0]);
                                                     }} className='outline-none hidden' />
                                                   <label className='flex items-center justify-center h-full w-full' htmlFor={val.name}>
                                                     {values.imagecard ? (
                                                       <img src={values.imagecard}
                                                         className='h-full w-full object-contain'
                                                       />
                                                     ) : (
                     
                                                       <img className='h-6 w-6' src={upload}
                     
                                                       />
                                                     )}
                                                   </label>
                                                 </label>
                                               </div>
                                             );
                                           } else {
                        return (
                          <div key={i}>
                            <div className='flex gap-1 flex-col'>
                              <label className='text-base font-semibold py-1'>{val.name}</label>
                              <Field className=' text-sm border px-2 py-2 outline-none border-gray-500 placeholder:text-gray-500 ' type={val.type} name={val.name} placeholder={val.type} />
                             
                            </div>
                          </div>

                        )
                      }
                    })
                  }

                  <button type='submit' className='border-1.5 border-black rounded-xl w-fit px-4.5 py-2 bg-secondary text-white font-medium'>Submit</button>
                </div>

              </Form>
            )
          }}
        </Formik>
      </div>
    </div>

  )
}

export default Cardsection
