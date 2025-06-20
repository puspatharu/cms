

import React, { useRef, useState } from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import upload from '../../../assets/upload.webp'
import * as Yup from 'yup'
import JoditEditor from 'jodit-react';
function Menusection() {  const editor = useRef(null);
    const [content, setContent] = useState('');
  const forms = [
    {name:'category_list',type:'text'},
    { name: 'title', type: "text" },
    { name: "description", type: "jodit" },
     {name:"size",type:'number'},
    {name:"price",type:'number'}
   
  ];
  const schema = Yup.object().shape({
    category_list:Yup.string().required('required'),
    title: Yup.string()
      .required('title is required')
      .test(
        'is-capitalized',
        'Name must start with a capital letter',
        value => value ? /^[A-Z]/.test(value) : true
      ),
    descirption: Yup.string().required('subtitle is required')
        .test(
          'is-capitalized',
          'Name must start with a capital letter',
          value => value ? /^[A-Z]/.test(value) : true
        ),
        size:Yup.number()
    .typeError('size must be a number')
    .positive('size must be greater than zero')
    .required('size is required'),
    
    price:Yup.number()
    .typeError('Price must be a number')
    .positive('Price must be greater than zero')
    .required('Price is required'),
  })

  return (
    <div className='lg:grid grid-cols-10 w-full gap-28'>
      <div className='col-span-3'>
        <div className='text-xl font-medium'>
          Menu Section
        </div>
        <div className=' flex gap-2 text-sm font-medium text-gray-600'>
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
  [category_list, title, Description, Size, price]
</h1>
          
         
      
        </div>
      </div>
      <div className='col-span-7'>
        <Formik initialValues={{
          category_list:'',
          title: "",
          descirption: "",
          size:'',
    price:""
    
        }}
          onSubmit={(values) => {
            console.log(values);
          }}

          validationSchema={schema}
        >


          {({ setFieldValue, values, }) => {
            return (

              <Form>
                <div className='flex flex-col gap-6 capitalize w-full lg:px-15 lg:py-5 py-4'>
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
                      // if (val.type == 'file') {
                      //   return (
                      //     <div key={i} className='flex flex-col gap-2'>
                      //       <label className=' text-base font-semibold'>
                      //       {val.name}
                      //       </label>
                      //       <label className='text-sm bg-tertiary outline-none h-32 flex-col flex items-center justify-center'>
                      //         {val.name}
                      //         <input
                      //           id={val.name}
                      //           type={val.type}
                      //           name={val.name}
                      //           onChange={(e) => {
                      //             setFieldValue(val.name, e.target.files[0]);
                      //           }} className='outline-none hidden' />
                      //         <label className='flex items-center justify-center' htmlFor={val.name}>
                      //           {values.image ? (
                      //             <img src={URL.createObjectURL(values.image)}
                      //               className='h-14'
                      //             />
                      //           ) : (

                      //             <img className='h-6 w-6' src={upload}

                      //             />
                      //           )}
                      //         </label>
                      //       </label>
                      //     </div>
                      //   );
                      // } 
                      else {
                        return (
                          <div key={i}>
                            <div className='flex gap-1 flex-col'>
                              <label className='text-base font-semibold py-1.5'>{val.name}</label>
                              <Field className=' text-sm border border-gray-500 placeholder:text-gray-500 py-2 px-2 outline-none ' type={val.type} name={val.name} placeholder={val.type} />
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

export default Menusection
