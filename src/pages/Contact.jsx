
import React from 'react'
import Contactsection from '../components/pagecomponents/Contact/Contactsection'
import Homesection from '../components/pagecomponents/Menu/Homesection'
function Contact() {
  return (
    <div className='flex gap-19  px-4 py-6 flex-col'>
      <Homesection />
      <Contactsection />
    </div>
  )
}

export default Contact
