


import Aboutsection from '../components/pagecomponents/Home/Aboutsection';
import Reviewsection from '../components/pagecomponents/Home/Reviewsection';
import BlogVideo from '../components/pagecomponents/Home/BlogVideo';
import Homesection from '../components/pagecomponents/Menu/Homesection';

function About() {
  return (
    <div className='flex lg:gap-19 gap-15 px-4  py-5 flex-col'>
    <Homesection />
<Aboutsection />
<Reviewsection />
<BlogVideo />

    </div>
  )
}

export default About