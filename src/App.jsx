
import './App.css'

import Layout from './hoc/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Team from './pages/Team'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Element from './pages/Element'
import Category from './pages/Category'
import Menuitem from './pages/Menuitem'
import Blogtable from './pages/Blogtable'
import Cardtable from './pages/Cardtable'
import Rating from './pages/Rating'
function App() {


  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/element" element={<Element />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/category' element={<Category />} />
          <Route path='/menuitem' element={<Menuitem />} />
          <Route path='/blogtable' element={<Blogtable />} />
          <Route path='/cardtable' element={<Cardtable />} />
          <Route path='/rating' element={<Rating />} /> 
        </Route>
      </Routes>


    </>
  )
}

export default App
