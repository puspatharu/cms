
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
import Button from './pages/Button'
import Viewall from './components/View/Viewall'
import View_Blogtable from './components/View/View_Blogtable'
import View_Card from './components/View/View_Card'
import View_Rating from './components/View/View_Rating'
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
          <Route path='/button' element={<Button />} />
          <Route path='/view/:id' element={<Viewall />}></Route>
          <Route path='/viewblog/:id' element={<View_Blogtable />}></Route>
          <Route path='/viewcard/:id' element={<View_Card />}></Route>
          <Route path='/viewrating/:id' element={<View_Rating />}></Route>
        </Route>
      </Routes>


    </>
  )
}

export default App
