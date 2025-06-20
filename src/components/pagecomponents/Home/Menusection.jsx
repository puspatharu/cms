
import React, { useRef, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import upload from '../../../assets/upload.webp'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import JoditEditor from 'jodit-react';
function Menusection() {
  const [submit, setSubmit] = useState(false)
  const [datas, setData] = useState([])
    const editor = useRef(null);
    const [content, setContent] = useState('');
  const forms = [
    { name: "imagemenu", type: "file" },
    { name: "item_name", type: "text" },
    { name: 'description', type: 'jodit' }
  ]

  const fileUpload=(data,setFieldValue)=>{
console.log(data);

try {
  const formdata=new FormData()
  formdata.append('files',data)
  axios.post('http://localhost:3000/fileupload',formdata).then((result)=>{
console.log(result.data);
 setFieldValue('imagemenuid',result.data.id);
                setFieldValue('imagemenu',result.data.file);
  }).catch((eror)=>{
    console.log(eror)
  })
} catch (error) {
  console.log(error)
}
}


  return (
    <div className='w-full lg:grid grid-cols-10 gap-28'>
      <Toaster />
      <div className='col-span-3 '>
        <div className='text-xl font-medium'>
          Menu Section
        </div>
        <div className='font-medium text-sm text-gray-600'>
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
          <h1>[image, item_name, description]</h1>


        </div>
      </div>
      <div className='col-span-7'>
        <Formik initialValues={{
          item_name: "",
          description: '',
          imagemenu: "",
imagemenuid:'',
        }}
          onSubmit={(values) => {
            try {
              axios.post('http://localhost:3000/banners', values).then((result) => {
                console.log(result.data)

                toast.success("successfully Submitted")
                // console.log(values);
              }).catch((eror) => {
                console.log(eror)
              })
            }
            catch (error) {
              console.log(error)
            }
          }}

        >

          {({values,setFieldValue }) => {
            return (
              <Form>
                <div className='flex flex-col capitalize gap-6  w-full lg:px-15 lg:py-5 py:4 '>
                  {
                    forms.map((val, i) => {
                       if (val.type == 'file') {
                      return (
                        <div key={i} className='flex flex-col gap-2 '>
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
                              {values.imagemenu ? (
                                <img src={values.imagemenu}
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
                      }else {
                      return (
                        <div key={i} className='w-full'>
                            <div className='flex gap-1 flex-col'>
                              <label className=' text-base font-semibold py-1'>{val.name}</label>
                              <Field className='border-gray-500 border placeholder:text-gray-500 outline-none py-2 px-2  text-[16px] w-full ' type={val.type} name={val.name} placeholder={val.type} />
                            </div>

                          </div>
                        )
                      }
                     
                    }
                    )
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

export default Menusection