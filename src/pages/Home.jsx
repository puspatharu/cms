

import HeroSection from '../components/pagecomponents/Home/HeroSection'
import Aboutsection from '../components/pagecomponents/Home/Aboutsection'
import Menusection from '../components/pagecomponents/Home/Menusection'
import Reviewsection from '../components/pagecomponents/Home/Reviewsection'
import Blogsection from '../components/pagecomponents/Home/Blogsection'
function Home() {
  return (
    <div className='flex lg:gap-19 gap-15 px-4  py-5 flex-col'>
      <HeroSection />
      <Aboutsection />
      <Menusection />
      <Reviewsection />
      <Blogsection />
   
    </div>
  )
}

export default Home