
import React from 'react'
import { Formik, Form, Field } from 'formik';
import upload from '../../assets/upload.webp'
function Edit_Rating({closepop}) {
   const forms = [
    { name: "title", type: "text" },
    { name: "subtitle", type: "text" },
    { name: "image", type: "file" },
    { name: "event_name", type: "text" },
     { name: "starNum", type: "number" },
    { name: 'description', type: 'text' }
  ]
  return (
    <div className='top-0 left-0 right-0 fixed h-full bg-red-400/20 flex items-center place-content-center'>
      <div className='bg-white rounded w-5/12'>

<div>
      <Formik initialValues={{
        title: '',
        subtitle: "",
        event_name: "",
        description: '',
        starNum:'',
        image: "",
        
      }}
        onSubmit={(values) => {
          console.log(values);
        }}
       >

        {({ values, setFieldValue }) => {
          return (
            <Form>
              <div className='flex flex-col capitalize gap-2 w-full lg:px-15 py-4'>
                {
                  forms.map((val, i) => {
                    if (val.type == 'file') {
                      return (
                        <div key={i} className='flex flex-col gap-2 '>
                          <label className=' text-base font-semibold'>
                            {val.name}
                            </label>
                          <label className='text-sm bg-tertiary outline-none h-26 flex flex-col items-center justify-center'>
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
                        <div key={i}>
                          <div className='flex gap-1 flex-col'>
                            <label className='text-base font-semibold py-1'>{val.name}</label>
                            <Field className='border outline-none px-2 py-1  text-sm  border-gray-500 placeholder:text-gray-500' type={val.type} name={val.name} placeholder={val.type} />
                          </div>
                         
                        </div>
                      )
                    }
                  })
                }
                <div className='flex gap-2'>

                <button type='submit' className='border-1.5 border-black rounded-xl w-fit px-3 py-1 bg-secondary text-white font-medium'>Submit</button>
                 <button onClick={closepop} type='cancel' className='border-1.5 border-black rounded-xl w-fit px-3 py-1 bg-red-400 text-white font-medium'>Cancel</button>
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

export default Edit_Rating