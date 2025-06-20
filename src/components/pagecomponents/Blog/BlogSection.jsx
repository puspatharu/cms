

import React, { useRef, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import upload from '../../../assets/upload.webp'
import JoditEditor from 'jodit-react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
function BlogSection() {
    const editor = useRef(null);
    const [content, setContent] = useState('');
  const forms = [
    { name: "subtitle", type: "text" },
    { name: "imageblogs", type: "file" },

    { name: "username", type: "text" },
    { name: "date", type: "date" },
    { name: "views", type: "number" },
    { name: "comment", type: "number" },
    { name: "title", type: "text" },
    { name: "description", type: "jodit" },
  ]
  const schema = Yup.object().shape({
    title: Yup.string()
      .required('Name is required')
      .test(
        'is-capitalized',
        'Name must start with a capital letter',
        value => value ? /^[A-Z]/.test(value) : true
      ),
    // title: Yup.string()
    //   .required('title is reuired')
    //   .test('is-uppercase', 'title must be uppercase', value => {
    //     return value === value?.toUpperCase();
    //   }),
    username: Yup.string()
      .required('Name is required')
      .test(
        'is-capitalized',
        'Name must start with a capital letter',
        value => value ? /^[A-Z]/.test(value) : true
      ),
    subtitle: Yup.string().required('subtitle is required'),
    description: Yup.string().required('subtitle is required'),
    date: Yup.date()
      .required('Date is required')
      .max(new Date(), 'Date cannot be in the future'),

    views: Yup.number().typeError('Must be a number')
      .required('Required')
      .min(0, 'Cannot be negative'),
    comment: Yup.number().typeError('Must be number')
      .required('required')
      .min(0, 'Cannot be negative'),

  })

    const fileUpload=(data,setFieldValue)=>{
    console.log(data);
    try {
      const formdata=new FormData()
     formdata.append('files',data)
      axios.post('http://localhost:3000/fileupload',formdata)
      .then((result)=>{
console.log(result.data)
  setFieldValue('imageblogsid',result.data.id)
                setFieldValue('imageblogs',result.data.file)
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
          Blog Section
        </div>
        <div className='text-sm text-gray-600 font-medium '>
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
          <h1>[title,subtitle , image, username, date,views, comment, description]</h1>
        </div>
      </div>
      <div className='col-span-7'>
        <Formik initialValues={{
          title: '',
          subtitle: "",
          imageblogs: "",
            imageblogsid: "",
          username: "",
          date: "",
          views: "",
          comment: "",

          description: '',
        }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={schema}
        >
          {({ values, setFieldValue }) => {
            return (
              <Form>
                <div className='flex flex-col capitalize gap-4  w-full lg:px-15 lg:py-5 py-4'>
                  {
                    forms.map((val, i) => {
                      if (val.type == 'file') {
                        return (
                          <div key={i} className='flex flex-col gap-2'>

                            <label className=' text-base font-semibold'>
                              {val.name}
                            </label>


                            <label htmlFor={val.name} className='text-sm bg-tertiary outline-none  h-60 fex flex-col items-center justify-center'>
                              {/* {val.name} */}
                              <input

                                id={val.name}
                                type={val.type}
                                name={val.name}

                                onChange={(e) => {
                                  fileUpload(e.target.files[0],setFieldValue)
                                  // setFieldValue(val.name, e.target.files[0]);
                                }} className='outline-none hidden ' />
                              <label className='flex items-center justify-center h-full w-full' htmlFor={val.name}>
                                {values.imageblogs ? (
                                  <img src={values.imageblogs}
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
                      } 
                      else if(val.type==='jodit'){
                        return(
                          <div key={i} className='flex flex-col gap-2'>
                            <label className=' text-base font-semibold'>
                                {val.name}
                                </label>   
        <JoditEditor
          ref={editor}
          value={content}
        
          tabIndex={1} // tabIndex of textarea
          onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={newContent => {}}
        />
                          </div>
                        )
                      }
                      else {
                        return (
                          <div key={i}>
                            <div className='flex gap-1 flex-col'>
                              <label className='text-base font-semibold py-1'>{val.name}</label>
                              <Field className='border outline-none px-2 text-sm border-gray-500 placeholder:text-gray-500 py-2' type={val.type} name={val.name} placeholder={val.type} />
                            </div>
                            <ErrorMessage name={val.name} className='text-red-700 text-[17px]' component='span' />
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

export default BlogSection