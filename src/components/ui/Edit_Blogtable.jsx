
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import upload from '../../assets/upload.webp'
import axios from 'axios';
function Edit_Blogtable({ closepop, editdata }) {
  console.log(editdata, "here");
  const forms = [
    // { name: "subtitle", type: "text" },
    { name: "blogimage", type: "file" },
    { name: "userimage", type: "file" },
    { name: "username", type: "text" },
    { name: "date", type: "number" },
    { name: "views", type: "number" },
    { name: "comment", type: "number" },

    { name: "title", type: "text" },
    { name: "description", type: "text" },
  ]
  return (
    <div className='fixed top-0 left-0 right-0 h-full bg-gray-900/60 overflow-scroll place-content-center flex items-center '>
      <div className='flex w-6/12 flex-col rounded bg-white'>
        <div className='' >
          <Formik initialValues={{
            title: editdata.length > 0 && editdata[0].title ? editdata[0].title : '',
            // subtitle: "",
            blogimage: "",
            userimage: '',
            username: editdata.length > 0 && editdata[0].username ? editdata[0].username : '',
            date: editdata.length > 0 && editdata[0].date ? editdata[0].date : '',
            views: editdata.length > 0 && editdata[0].react ? editdata[0].react : '',
            comment: editdata.length > 0 && editdata[0].comment ? editdata[0].comment : '',

            description: editdata.length > 0 && editdata[0].description ? editdata[0].description : '',
          }}
            onSubmit={(values) => {
              try {
                axios.patch(`http://localhost:3000/about/${editdata.length > 0 && editdata[0].id}`, values).then((result) => {
                  console.log(result.data);


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
            {({ values, setFieldValue, handleSubmit }) => {
              console.log(values)
              return (
                <Form onSubmit={handleSubmit}>
                  <div className='flex flex-col capitalize gap-1 w-full px-18 py-4'>
                    {
                      forms.map((val, i) => {
                        if (val.type == 'file') {
                          return (
                            <div key={i} className='flex flex-col gap-0.5'>
                              <label className=' text-base font-semibold'>
                                {val.name}
                              </label>
                              <label className='text-sm bg-tertiary outline-none w-30 h-19 flex flex-col items-center justify-center'>
                                {val.name}

                                <input
                                  id={val.name}
                                  type={val.type}
                                  name={val.name}
                                  onChange={(e) => {
                                    setFieldValue(val.name, e.target.files[0]);
                                  }} className='outline-none hidden' />
                                <label className='flex items-center justify-center' htmlFor={val.title}>
                                  {values[val.name] ? (
                                    <img src={URL.createObjectURL(values[val.name])}
                                      className='h-15'
                                    />
                                  ) : (

                                    <img className='h-4 w-4' src={upload}

                                    />
                                  )}
                                </label>
                              </label>

                            </div>
                          );
                        } else {
                          return (
                            <div key={i} className='w-full'>
                              <div className='flex gap-0.5 flex-col'>
                                <label className='text-base font-semibold py-0.5'>{val.name}</label>
                                <Field className='text-sm px-2 py-1 border border-gray-500 placeholder:text-gray-500 outline-none w-full' type={val.type} name={val.name} placeholder={val.type} />
                              </div>

                            </div>
                          )
                        }
                      })
                    }
                    <div className='flex gap-3'>

                      <button type='submit' className='border-1.5 border-black rounded-xl text-sm w-fit px-3 py-1 bg-secondary text-white font-medium'>Submit</button>
                      <div onClick={closepop} type='cancel' className='border-1.5 border-black rounded-xl text-sm w-fit px-3 py-1 bg-red-400 text-white font-medium'>Cancel</div>
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

export default Edit_Blogtable