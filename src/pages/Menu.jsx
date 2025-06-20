
import React from 'react'
import Homesection from '../components/pagecomponents/Menu/Homesection'
import Menusection from '../components/pagecomponents/Menu/Menusection'
import BlogVideo from '../components/pagecomponents/Home/BlogVideo'
function Menu() {
  return (
    <div className='flex gap-19  px-4 py-6 flex-col'>
<Homesection />
<Menusection />
<BlogVideo />
    </div>
  )
}

export default Menu