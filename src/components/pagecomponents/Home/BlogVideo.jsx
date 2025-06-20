
import React, { useRef, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import upload from '../../../assets/upload.webp';
import * as Yup from 'yup'
import toast, { Toaster } from 'react-hot-toast';
import JoditEditor from 'jodit-react';
import axios from 'axios';
function BlogVideo() {
  const [submit,setSubmit] = useState(false)
    const editor = useRef(null);
      const [content, setContent] = useState('');
   const forms = [
    { name: "title", type: "text" },
    { name: "subtitle", type: "text" },
    { name: "description", type: "jodit" },
    { name: "imageblog", type: "file" }
   ]
     const schema = Yup.object().shape({
       title: Yup
         .string()
         .required('title is required')
         //test(name, message, testFunction)
         .test('is-uppercase', 'title must be uppercase', value => {
           return value === value?.toUpperCase();
         }),
       subtitle: Yup.string().required('subtitle is required'),
       description: Yup.string().required('subtitle is required'),
   
     });

       const fileUpload=(data,setFieldValue)=>{
    console.log(data);
    try {
      const formdata=new FormData()
     formdata.append('files',data)
      axios.post('http://localhost:3000/fileupload',formdata)
      .then((result)=>{
console.log(result.data)
  setFieldValue('imageblogid',result.data.id)
                setFieldValue('imageblog',result.data.file)
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
              Blog_Video Section
            </div>
            <div className='flex gap-2 text-sm font-medium text-gray-600 '>
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
    
            <h1>[title</h1>
            <h1 className=''>
                subtitle,
              </h1>
              <h1>
                description,
              </h1>
              <h1>
                image]
              </h1>
      
            </div>
          </div>
          <div className='col-span-7 w-full'>
          <Formik initialValues={{
            subtitle: '',
            title: '',
            description: '',
            imageblog: '',
            imageblogid:""
          }}
            onSubmit={(values) => {
              setSubmit(true)
              toast.success('sucessfully submitted!')
              console.log(values)
            }}
            validationSchema={schema}
          >
            {({ values, setFieldValue }) => {
              return (
                <Form>
                  <div className='flex flex-col capitalize gap-6 w-full lg:px-15 lg:py-5 py-4'>
                    {
                      forms.map((val, i) => {
                        if (val.type == "file") {
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
                                  placeholder={val.type}
                                  onChange={(e) => {
                                    fileUpload(e.target.files[0],setFieldValue)
                                    // setFieldValue(val.name, e.target.files[0]);
                                  }} className='outline-none hidden'
                                />
                                <label className='flex items-center h-full w-full justify-center' htmlFor={val.name}>
                                  {
                                    values.imageblog ? (
                                      <img src={values.imageblog} className='h-full w-full object-contain' />
                                    ) : (
                                      <img className='h-6 w-6' src={upload} />
                                    )
                                  }
                                </label>
                              </label>
                            </div>
                          )
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
                                <Field className="text-[16px] px-2 py-2 border border-gray-500 placeholder:text-gray-500 outline-none w-full" type={val.type} name={val.name} placeholder={val.type} />
                                <ErrorMessage
                                  name={val.name}
                                  className='text-red-700 text-[17px]'
                                  component='div'
                                />
                              </div>
                            </div>
                          )
                        }
                      })
                    }
                    <button type='submit' className='border-1.5 border-black rounded-xl w-fit  px-4.5 py-2 bg-secondary font-medium text-white '>Submit</button>
                  </div>
    
                </Form>
              )
            }}
          </Formik>
          </div>
        </div>
  )
}

export default BlogVideo