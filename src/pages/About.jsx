import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

function About() {

// const forms=[
//   {name:'username',type:'text'},
//   {name:"email",type:'text'},
//   {name:"password",type:'password'},
//   {name:"confirm_password",type:"password"}
// ];

  const Schema = Yup.object({
    username: Yup.string().min(3).max(20).required("requied"),
    email: Yup.string().email().required('required'),
    password: Yup.string().min(5).required('required'),
    confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match")
  })

  return (
    <div>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirm_password: ''
        }}
        validationSchema={Schema}
        onSubmit={(values) => {
          console.log("puspa", values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,

        }) => (
          <Form onSubmit={handleSubmit}>
            <div className='flex flex-col items-center gap-5'>
              <h1 className='text-2xl'>Basic form validation using formik</h1>
              <div className='flex flex-col'>
                <label htmlFor="Username" className='text-xl'>Username: </label>
                <Field className='px-4 py-0.5 text-xl bg-[#bcddf9]' type="text" name='username' placeholder='Enter your name' id='Username' value={values.username} onChange={handleChange} onBlur={handleBlur} />
                {errors.username && touched.username ? (<span className='text-red-600 text-xl'>{errors.username}</span>) : null}
              </div>
              <div className='flex flex-col'>
                <label htmlFor="Username" className='text-xl'>Email: </label>
                <Field className='px-4 py-0.5 text-xl bg-[#bcddf9]' type="text" placeholder='Enter your email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                {errors.email && touched.email ? (<span className='text-red-600 text-xl'>{errors.email}</span>) : null}
              </div>
              <div className='flex flex-col'>
                <label htmlFor="Username" className='text-xl'>Password: </label>
                <Field className='px-4 py-0.5 text-xl bg-[#bcddf9]' type="password" name='password' placeholder='Enter your password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                {errors.password && touched.password ? (<span className='text-red-600 text-xl'>{errors.password}</span>) : null}
              </div>
              <div className='flex flex-col'>
                <label htmlFor="Username" className='text-xl'>Confirm_Password: </label>
                <Field className='px-4 py-0.5 text-xl bg-[#bcddf9]' type="password" name='confirm_password' placeholder='Confirm_password' value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} />
                {errors.confirm_password && touched.confirm_password ? (<span className='text-red-600 text-xl'>{errors.confirm_password}</span>) : null}
              </div>
              <button type='submit' className='bg-blue-400 px-2 py-1.5 w-26 rounded-xl' disabled={ isSubmitting}>Submit</button>
            </div>
          </Form>
        )}
      </Formik>

    </div>
  )
}

export default About