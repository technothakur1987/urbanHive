import React from 'react'
import './HomeTrack.css'

const HomeTrack = () => {
  return (
    <div className='py-5 HomeTrack px-3'><div className="row ">
    
    <div className="col-sm-4 mb-3 mb-sm-0 ">
      <div className="card  border bg-light rounded">
        <div className="card-body bg-light d-flex flex-column align-items-center myicons">
        <i className="fa-solid fa-shoe-prints "></i>
          <h5 className="card-title ">Branded Shoes</h5>
          <p className="card-text">Comfortable and durable branded shoes.</p>
          
        </div>
      </div>
    </div>

    <div className="col-sm-4 mb-3 mb-sm-0 rounded p-0">
      <div className="card  border bg-light rounded">
        <div className="card-body bg-light d-flex flex-column align-items-center myicons">
        <i className="fa-solid fa-shirt"></i>
          <h5 className="card-title">Premium Tshirts</h5>
          <p className="card-text">Our T-Shirts are 100% made of cotton.</p>
          
        </div>
      </div>
    </div>

    <div className="col-sm-4 mb-3 mb-sm-0 ">
      <div className="card  border bg-light rounded">
        <div className="card-body bg-light d-flex flex-column align-items-center myicons">
        <i className="fa-solid fa-mobile"></i>
          <h5 className="card-title">Mobiles</h5>
          <p className="card-text">Upgrade to a smarter mobile experience.</p>
          
        </div>
      </div>
    </div>
    
    
  </div></div>
  )
}

export default HomeTrack