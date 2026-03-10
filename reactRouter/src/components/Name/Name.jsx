import React from 'react'
import { useParams } from 'react-router-dom'
function Name() {
    const {yourname} = useParams()
  return (
    <div className='bg-yellow-800 text-white p-4 text-center' >
      Name:{yourname}
    </div>
  )
}

export default Name
