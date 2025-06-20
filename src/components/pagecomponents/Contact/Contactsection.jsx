
import React, { useRef, useState } from 'react'
import { Formik, Form, Field,ErrorMessage } from 'formik'
import * as Yup from "yup"
import JoditEditor from 'jodit-react';
function Contactsection() {
    const editor = useRef(null);
    const [content, setContent] = useState('');
  const forms = [
    { name: "name", type: "text" },
    { name: "address", type: "text" },
    { name: "contact", type: "number" },
    { name: "message", type: "jodit" },
  ]

  const schema = Yup.object().shape({
    name: Yup.string().min(3).max(20).required("required"),
    address: Yup.string().required('required'),
    contact: Yup.string()
    .matches(/^[0-9]{10}$/, 'Must be a valid 10-digit phone number')
    .required('Contact is required'),
    message: Yup.string().required('required')
  })
  return (
    <div className='lg:grid grid-cols-10 w-full gap-28'>
      <div className='col-span-3'>
<div className='text-xl font-medium'>Contact Section</div>
<h1 className='text-sm font-medium text-gray-600'>[name, address, contact, message]</h1>
      </div>
<div className='col-span-7 w-full'>

      <Formik initialValues={{
        name: '',
        address: '',
        contact: '',
        message: ''
      }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={schema}>
        <Form>
        <div className='flex flex-col capitalize gap-5 w-full lg:px-15 lg:py-5 py-4'>
          {
            forms.map((val, i) => {
             if(val.type==='jodit'){
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
                      else{
                        return (
                          <div key={i}>
                  <div className='flex gap-1 flex-col'>
                    <label className='text-base font-semibold py-1'>{val.name}</label>
                    <Field className="text-[16px] px-2 py-2 border outline-none border-gray-500 placeholder:text-gray-500" type={val.type} name={val.name} placeholder={val.type} />
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
 <button type='submit' className='border-1.5 border-black rounded-xl w-fit px-4.5 py-2 bg-secondary font-medium text-white'>Submit</button>
 </div>
        </Form>
      </Formik>
</div>
    </div>
  )
}

export default Contactsection