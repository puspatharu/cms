
import React, { useState } from 'react'
import { Formik, Form, Field, } from 'formik';
import upload from '../../assets/upload.webp'

function Edit_Menuitem({ closepop }) {
  const [edit, setEdit] = useState(null)
  const forms = [
    { name: 'category_list', type: 'text' },
    { name: 'title', type: "text" },
    { name: "description", type: "text" },
    { name: "size", type: 'number' },
    { name: "price", type: 'number' }

  ];
  return (
    <div>
      <div className='top-0 left-0 right-0 fixed h-full bg-gray-900/30 flex items-center place-content-center'>
        <div className='bg-white rounded w-5/12'>
          <div className=''>
            <Formik initialValues={{
              category_list: '',
              title: "",
              subtitle: "",
              size: '',
              price: ""

            }}
              onSubmit={(values) => {
                console.log(values);
              }}


            >


              {({ setFieldValue, values, }) => {
                return (

                  <Form>
                    <div className='flex flex-col gap-2 capitalize w-full px-15 py-4'>
                      {
                        forms.map((val, i) => {
                          if (val.type == 'file') {
                            return (
                              <div key={i} className='flex flex-col gap-2'>
                                <label className=' text-base font-semibold'>
                                  {val.name}
                                </label>
                                <label className='text-sm bg-tertiary outline-none h-32 flex-col flex '>
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
                                  <label className='text-base font-semibold py-1.5'>{val.name}</label>
                                  <Field className=' text-sm border w-full border-gray-500 placeholder:text-gray-500 py-2 px-2 outline-none ' type={val.type} name={val.name} placeholder={val.type} />

                                </div>
                              </div>

                            )
                          }
                        })
                      }
                      <div className='flex gap-3'>

                        <button type='submit' className='border-1.5 border-black rounded-xl w-fit px-3 py-1 bg-secondary text-white font-medium'>Submit</button>

                        <button onClick={closepop} type='submit' className='border-1.5 border-black rounded-xl w-fit px-3 py-1 bg-red-500 text-white font-medium'>Cancel</button>
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
  )
}

export default Edit_Menuitem