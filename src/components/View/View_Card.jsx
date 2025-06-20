
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function View_Card() {
  const [datas,setData] = useState([]);
      const location=useLocation()
     const navigate=useNavigate()
    console.log(location,navigate)
    const linkpath=location.pathname.split('/');
    console.log(linkpath[2]);
  
    const getdatas = async (i) => {
      console.log(i);
      try {
        await axios.get(`http://localhost:3000/card/${i}`).then((result) => {
        console.log(result.data)
        setData([result.data])
      }).catch((eror) => {
        console.log(eror)
      })
    }
     catch (error) {
        console.log(error)
      }
    }
    useEffect(()=>{
getdatas(linkpath[2]);
  },[])

  return (
    <div>
       <div onClick={()=>{
        navigate(-1)
      }}>back</div>
    </div>
  )
}

export default View_Card