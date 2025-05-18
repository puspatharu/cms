

import Homesection from '../components/pagecomponents/Blog/Homesection'
import BlogSection from '../components/pagecomponents/Blog/BlogSection'
import SearchSection from '../components/pagecomponents/Blog/SearchSection'
import Cardsection from '../components/pagecomponents/Blog/Cardsection'



function Blog() {
  return (
    <div className='flex gap-19  px-4 py-6 flex-col'>
  <Homesection />
 <Cardsection />
  <BlogSection />
  <SearchSection />
    </div>
  )
}

export default Blog