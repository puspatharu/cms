
import React from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import upload from '../../../assets/upload.webp'
import * as Yup from 'yup'
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
function Homesection() {
  const forms = [
    { name: 'title', type: "text" },
    { name: "subtitle", type: "text" },
    { name: "imagebanner", type: "file" },
  ];
  const schema = Yup.object().shape({
    title: Yup.string()
      .required('title is reuired')
      .test(
        'is-capitalized',
        'Name must start with a capital letter',
        value => value ? /^[A-Z]/.test(value) : true
      ),
    subtitle: Yup.string().required('subtitle is required')
    .test(
      'is-capitalized',
      'Name must start with a capital letter',
      value => value ? /^[A-Z]/.test(value) : true
    ),
  })

    const fileUpload=(data,setFieldValue)=>{
    console.log(data);
    try {
      const formdata=new FormData()
     formdata.append('files',data)
      axios.post('http://localhost:3000/fileupload',formdata)
      .then((result)=>{
console.log(result.data)
  setFieldValue('imagebannerid',result.data.id)
                setFieldValue('imagebanner',result.data.file)
toast.success('successfully submitted')
      }).catch((eror)=>{
console.log(eror)
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='gap-28 w-full lg:grid grid-cols-10' >
      <Toaster />
      <div className='col-span-3'>
        <div className='text-xl font-medium'>
          Home Section
        </div>
        <div className=' flex gap-2 text-sm text-gray-600 font-medium'>
          {/* {
            forms.map((val, i) => {
              return (
                <div key={i}>
                  <div className='text-sm text-gray-600 capitalize'>
                    {val.name}
                  </div>
                </div>
              )
            })
          } */}



          <h1>
            [title,
          </h1>
          <h1 className=''>
            subtitle,
          </h1>
         
          <h1>
            image]
          </h1>
        </div>
      </div>
      <div className='col-span-7 w-full'>
        <Formik initialValues={{
          subtitle: "",
          title: "",
          imagebanner: "",
           imagebannerid:''
        }}
          onSubmit={(values) => {
            console.log(values);
          }}

          validationSchema={schema}
        >


          {({ setFieldValue, values, }) => {
            return (

              <Form>
                <div className='flex flex-col gap-6 capitalize   w-full lg:px-15 lg:py-5 py-4'>
                  {
                    forms.map((val, i) => {
                      if (val.type == 'file') {
                        return (
                          <div key={i} className=' flex flex-col gap-2'>
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
                              <label className='flex items-center justify-center h-full w-full' htmlFor={val.name}>
                                {values.imagebanner ? (
                                  <img src={values.imagebanner}
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
                              <Field className=' text-sm border border-gray-500 px-2 py-2 outline-none placeholder:text-gray-500' type={val.type} name={val.name} placeholder={val.type} />
                              <ErrorMessage
                                name={val.name}
                                className='text-red-700 text-[17px]'
                                component='span'
                              />
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

export default Homesection
