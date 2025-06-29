
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import upload from '../../assets/upload.webp'
import axios from 'axios';
function Edit_Card_table({ cancel, editdata }) {
  console.log(editdata);
  const forms = [
    { name: 'title', type: "text" },
    { name: "subtitle", type: "text" },
    { name: "image", type: "file" },
  ];

  return (
    <div className='fixed top-0 left-0 right-0 h-full bg-gray-900/60  place-content-center flex items-center '>
      <div className='flex w-5/12 flex-col rounded bg-white'>
        <div className='col-span-7'>
          <Formik initialValues={{
            subtitle: editdata.length > 0 && editdata[0].subtitle ? editdata[0].subtitle : '',
            title: editdata.length > 0 && editdata[0].title ? editdata[0].title : '',

            image: ""
          }}
            onSubmit={(values) => {

              try {
                axios.patch(`http://localhost:3000/card/ ${editdata.length > 0 && editdata[0].id}`, values).then((result) => {
                  console.log(result.data);

                }).catch((err) => {
                  console.log(err);
                })
              } catch (error) {
                console.log(error)
              }
              
            }}


          >


            {({ setFieldValue, values,handleSubmit }) => {
              return (

                <Form onSubmit={handleSubmit}>
                  <div className='flex flex-col gap-3 capitalize w-full px-15 py-5'>
                    {
                      forms.map((val, i) => {
                        if (val.type == 'file') {
                          return (
                            <div key={i} className='flex flex-col gap-2'>
                              <label className=' text-base font-semibold'>
                                {val.name}
                              </label>
                              <label className='text-sm bg-tertiary outline-none h-32 flex flex-col items-center justify-center'>
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
                                      className='h-14'
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
                                <Field className=' text-[20px] border px-2 py-1 outline-none border-gray-500 placeholder:text-gray-500 ' type={val.type} name={val.name} placeholder={val.type} />

                              </div>
                            </div>

                          )
                        }
                      })
                    }
                    <div className='flex gap-2'>
                      <button type='submit' className='border-1.5 border-black rounded-xl w-fit px-3 py-1 bg-secondary text-white font-medium'>Submit</button>

                      <div onClick={cancel} type='cancel' className='border-1.5 border-black rounded-xl w-fit px-3 py-1 bg-red-400 text-white font-medium'>Cancel</div>
                    </div>
                  </div>

                </Form>
              )
            }}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Edit_Card_table