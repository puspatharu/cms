import React from 'react'
import Logo from '../../assets/logo.webp';
import { Link } from 'react-router-dom';
import { IoMdHome, IoIosMenu } from "react-icons/io";
import { MdContactPhone, MdCardMembership, Md18UpRating  } from "react-icons/md";
import { SiElement } from "react-icons/si";

import { GrCatalog } from "react-icons/gr";
import { FaInfoCircle,FaBlog,FaAddressCard  } from "react-icons/fa";
function Sidebar() {
  const nav = [
    {
      name: 'Home',
      link: '/',
      img: <IoMdHome />
    },
    {
      name: 'About',
      link: '/about',
      img: <FaInfoCircle />
    },
    {
      name: 'Menu',
      link: '/menu',
      img: <IoIosMenu />
    },
    {
      name:'Team',
      link:'/team',
      img:<MdCardMembership />
    },
    {
      name:'Blog',
      link:'/blog',
      img:<FaBlog />
    },
    {
      name:'Element',
      link:'/element',
      img:<SiElement />
    },
    {
      name: 'Contact',
      link: '/contact',
      img: <MdContactPhone />
    },
    {
      name:"category",
      link:'/category',
      img:<GrCatalog />
    },
    {
      name:"menu_item",
      link:'/menuitem',
      img:<IoIosMenu />
    },
      {
      name:"blog_table",
      link:'/blogtable',
      img:<FaBlog />
    },
     {
      name:"card_table",
      link:'/cardtable',
      img:<FaAddressCard />
    },
     {
      name:"rating",
      link:'/rating',
      img:<Md18UpRating />
    },
     {
      name:"button",
      link:'/button',
    },
    
    
  ]

  return (
    
      <div className="flex flex-col w-full gap-8 items-center">
        <div className='pt-2'>
          <img src={Logo}></img>
        </div>
        <div className='flex flex-col gap-6'>
          {
            nav.map((val, i) => {
              return (
                <Link to={val.link} key={i}>
                  <div className=' flex items-center capitalize gap-2 text-white hover:text-primary text-sm font-medium '>
                    {val.img}
                    {val.name}
                  </div>
                </Link>
              )
            })
          }

        </div>
      </div>
 
  )
}
export default Sidebar