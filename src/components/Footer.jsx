import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='Footer px-3 d-flex align-items-center justify-content-center'>
      <div className="row h-100 w-100">
        <div className="col-sm-2 d-flex align-items-center justify-content-end borderRightBlue mqjustifycenter mqspace">
          <h6 className='mb-0'>URBAN-HIVE</h6>
        </div>
        <div className="col-sm-7 d-flex align-items-center justify-content-start mqjustifycenter mqspace">
          <p className='mb-0'>2024  &copy; Urban-Hive Pvt Ltd, Manglore</p>
        </div>
        <div className="col-sm-3 d-flex align-items-center justify-content-between mqFooterSocialMediaIcons mqspace">
          <Link to='tel:8109184732' target='_blank'><i className="fa-solid fa-phone"></i></Link>
          <Link to='mailto:vikrambais09021987@gmail.com' target='_blank'><i className="fa-solid fa-envelope"></i></Link>
          <Link to='https://www.instagram.com/technothakur1987/' target='_blank'><i className="fa-brands fa-square-instagram"></i></Link>
          <Link to='https://www.linkedin.com/in/technothakur/' target='_blank'><i className="fa-brands fa-linkedin"></i></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer