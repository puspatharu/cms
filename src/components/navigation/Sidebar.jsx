import React from 'react'
import Logo from '../../assets/logo.webp';
import { Link } from 'react-router-dom';
// import { IoMdHome, IoIosMenu } from "react-icons/io";
// import { MdContactPhone } from "react-icons/md";
// import { FcAbout } from "react-icons/fc";
function Sidebar() {
  const nav = [
    {
      name: 'Home',
      link: '/',
      // img: <IoMdHome />
    },
    {
      name: 'About',
      link: '/about',
      // img: <FcAbout />
    },
    {
      name: 'Menu',
      link: '/menu',
      // img: < IoIosMenu />
    },
    {
      name:'Team',
      link:'/team'
    },
    {
      name:'Blog',
      link:'/blog'
    },
    {
      name:'Element',
      link:'/element'
    },
    {
      name: 'Contact',
      link: '/contact',
      // img: <MdContactPhone />
    },
    {
      name:"category",
      link:'/category'
    },
    {
      name:"menuitem",
      link:'/menuitem'
    },
      {
      name:"blogtable",
      link:'/blogtable'
    },
     {
      name:"cardtable",
      link:'/cardtable'
    },
     {
      name:"rating",
      link:'/rating'
    },
    
    
  ]

  return (
    <div className=''>
      <div className="flex flex-col gap-8 items-center">
        <div className='pt-2'>
          <img src={Logo}></img>
        </div>
        <div className='flex flex-col gap-6'>
          {
            nav.map((val, i) => {
              return (
                <Link to={val.link} key={i}>
                  <div className=' flex items-center gap-2 text-white hover:text-primary text-sm font-medium '>
                    {/* {val.img} */}
                    {val.name}
                  </div>
                </Link>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}
export default Sidebar