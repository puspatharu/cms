
import React from 'react'
import Chefsection from '../components/pagecomponents/Team/Chefsection'
import Menusection from '../components/pagecomponents/Home/Menusection'
import Aboutsection from '../components/pagecomponents/Home/Aboutsection'
import Homesection from '../components/pagecomponents/Menu/Homesection'

function Team() {
  return (
    <div className='flex gap-19 px-4 py-6 flex-col'>
      <Homesection />
      <Chefsection />
      <Menusection />
      <Aboutsection />
    </div>
  )
}

export default Team