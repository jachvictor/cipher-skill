import React from 'react'
import "./DevProfile.css"

function DevProfile({name, role, img}) {
  return (
    <div className='dev-contain'>
      <img src={img} alt="" className="devimg" />
      <p>{name}</p>
      <p>{role}</p>
    </div>
  )
}

export default DevProfile
