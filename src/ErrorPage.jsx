import React from 'react'
import './ErrorPage.css'
import ErrorpageImage from './assets/errorpageImage.png'
import { Link } from 'react-router-dom'


const ErrorPage = () => {
  return (
    <div className='fixed-top errorPage d-flex justify-content-center align-items-center'>
      <div className=' errorcenterpage border rounded d-flex align-items-center justify-content-evenly'>
        <div className="img-wrapper bg-primary rounded-circle">
        <img src={ErrorpageImage} alt="" className='img-fluid'/>
        </div>
        
        <div className='data'>
          <h1 className='text-primary text-center'>404</h1>
          <p className='fs-3 text-center text-primary fw-bolder'>Something Went Wrong...</p>
          <Link to='/' className='text-decoration-none text-primary float-end'>Back to Home Page </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage