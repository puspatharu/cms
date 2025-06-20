
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import upload from '../../assets/upload.webp'
import axios from 'axios';
// This edit section call in catagory.jsx in ppage folder
function Edit_Menu_Section({closepop,editdata}) {
  console.log(editdata);
  const [edit,setEdit] =useState()
const itemname=[
    { name: "image", type: "file" },
    
    { name: "item_name", type: "text" },
    { name: 'description', type: 'text' }
  ]
  return (
    <div>
      <div className='fixed top-0 left-0 right-0 h-full bg-gray-900/80 place-content-center flex items-center '>
                      <div className='flex w-6/12 flex-col  rounded bg-white'>
                  <div>
 <div className=''>
      <Formik initialValues={{
        item_name: editdata.length>0 && editdata[0].item_name?editdata[0].item_name:'',
        description: editdata.length>0 && editdata[0].description?editdata[0].description:'',
        image: "",
      }}
      onSubmit={(values) => {
          try {
       axios.patch(`http://localhost:3000/banners/${editdata.length>0 && editdata[0].id}`,values).then((result) => {
      console.log(result.data)
           
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

        {({ values, setFieldValue,handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <div className='flex flex-col capitalize gap-3 px-15 py-5 w-full  '>
                {
                  itemname.map((val, i) => {
                    if (val.type == 'file') {
                      return (
                        <div key={i} className=' flex gap-1 flex-col'>
                          <label className=' text-base font-semibold'>
                            {val.name}
                            </label>
                          <label className='text-sm bg-tertiary outline-none h-32 w-full flex flex-col items-center justify-center'>
                            {val.name}

                            <input
                              id={val.name}
                              type={val.type}
                              name={val.name}
                              onChange={(e) => {
                                setFieldValue(val.name, e.target.files[0]);
                              }} className='outline-none hidden' />
                            <label className='flex items-center justify-center' htmlFor={val.title}>
                              {values.image ? (
                                <img src={URL.createObjectURL(values.image)}
                                  className='h-20'
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
                        <div key={i} className='w-full'>
                          <div className='flex flex-col gap-1'>
                            <label className=' text-base font-semibold py-1'>{val.name}</label>
                            <Field className='border-gray-500 border placeholder:text-gray-500 outline-none py-1 px-2 rounded text-[16px] w-full '  type={val.type} name={val.name} placeholder={val.type} />
                          </div>
                        </div>
                      )
                    }
                  })
                }
                <div className='flex gap-2'>
                <button type='submit' className='border-1.5 border-black rounded-xl w-fit  px-3 py-1 bg-secondary text-white font-medium'>Submit</button>
                <div type='submit' onClick={closepop} className='border-1.5 border-black rounded-xl w-fit  px-3 py-1 bg-red-400 text-white font-medium'>Cancel</div>

                </div>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
                  </div>
                     
                      </div>
                    </div>

    </div>
  )
}

export default Edit_Menu_Section