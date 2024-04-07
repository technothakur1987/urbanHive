import React from 'react'
import './Homehero.css'
import Homehero from '../assets/hero2.webp'


const Homeheo = () => {
  return (
    <div className='homehero'>
        <img src={Homehero} alt="" className='img-fluid' />
    </div>
  )
}

export default Homeheo