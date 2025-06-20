

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import upload from '../../../assets/upload.webp'
import axios from 'axios';
import toast , { Toaster } from 'react-hot-toast';

function Chefsection() {
  const forms = [
    { name: "title", type: "text" },
    { name: "subtitle", type: "text" },
    { name: "imagechef", type: "file" },
    
    { name: "chef_name", type: "text" },
    
  ]
  const schema=Yup.object().shape({
    chef_name: Yup.string()
    .required('Name is required')
    .test(
      'is-capitalized',
      'Name must start with a capital letter',
      value => value ? /^[A-Z]/.test(value) : true
    ),
    subtitle:Yup.string().required('subtitle is required'),
    
    title:Yup.string()
        .required('title is reuired')
        .test(
          'is-capitalized',
          'Name must start with a capital letter',
          value => value ? /^[A-Z]/.test(value) : true
        )
  })
    const fileUpload=(data,setFieldValue)=>{
    console.log(data);
    try {
      const formdata=new FormData()
     formdata.append('files',data)
      axios.post('http://localhost:3000/fileupload',formdata)
      .then((result)=>{
console.log(result.data)
  setFieldValue('imagechefid',result.data.id)
                setFieldValue('imagechef',result.data.file)
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
          Chef section
        </div>
        <div className=' text-sm font-medium text-gray-600'>
        {/* {
          forms.map((val,i)=>{
            return(
<div key={i}>
<div className='text-sm text-gray-600 capitalize'>
  {val.name}
</div>
</div>
            )
          })
        } */}
        <h1>[ title, subtitle, image, chef_name ]</h1>
        
          
        </div>
      </div>
    <div className='col-span-7 w-full'>
      <Formik initialValues={{
        title: '',
        subtitle: "",
        chef_name: "",
    
        imagechef: "",
        imagechefid:''
        
      }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={schema}>

        {({ values, setFieldValue }) => {
          return (
            <Form>
              <div className='flex flex-col capitalize gap-5 w-full lg:px-15 lg:py-5 py-4'>
                {
                  forms.map((val, i) => {
                    if (val.type == 'file') {
                      return (
                        <div key={i} className='flex flex-col gap-2'>
                          <label className=' text-base font-semibold'>
                            {val.name}
                            </label>
                          <label htmlFor={val.name} className='text-sm bg-tertiary outline-none h-60 flex flex-col items-center justify-center'>
                            {/* {val.name} */}

                            <input
                              id={val.name}
                              type={val.type}
                              name={val.name}
                              onChange={(e) => {
                                fileUpload(e.target.files[0],setFieldValue)
                                // setFieldValue(val.name, e.target.files[0]);
                              }} className='outline-none hidden' />
                            <label className='flex items-center h-full w-full justify-center' htmlFor={val.name}>
                              {values.imagechef ? (
                                <img src={values.imagechef}
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
                            <Field className='border outline-none px-2 py-2 text-sm ' type={val.type} name={val.name} placeholder={val.type} />
                          </div>
                          <ErrorMessage name={val.name} className='text-red-700 text-[17px]' component='span' />
                        </div>
                      )
                    }
                  })
                }
                <button type='submit' className='border-1.5 border-black rounded-xl w-fit  px-4.5 py-2 bg-secondary text-white font-medium'>Submit</button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
    </div>
  )
}

export default Chefsection