import React from 'react'
import { useState,useEffect } from 'react'

function GitHub() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div className='bg-black text-white p-7 text-center' >
      GitHub followers :{data.followers}
    </div>
  )
}

export default GitHub
