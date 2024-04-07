import React from 'react'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <div className='px-3 py-3 testimonial'>
        
        <h2 className='mb-0'>Testimonials</h2>
        <p className='headingp text-secondary'>What our <span className='headingpsopan'>Customers</span> are saying</p>
        <div className="row ">
    
    <div className="col-sm-4 mb-3 mb-sm-0 ">
      <div className="card border-0 ">
        <div className="card-body d-flex flex-column align-items-center ">
        <img src="https://iili.io/JVb0qR1.jpg" alt="shahrukh khan" border="0"/>
        
         
          <p className="card-text">I absolutely love shopping here! The products are high-quality, and the customer service is outstanding. I recommend this website to everyone.</p>
          <h5 className="card-title text-secondary bordertopyellow">Rahul Sharma</h5>
          <h5 className="card-title job">Website Designer</h5>
          
        </div>
      </div>
    </div>
    <div className="col-sm-4 mb-3 mb-sm-0 ">
      <div className="card border-0 ">
        <div className="card-body d-flex flex-column align-items-center ">
        <img src="https://iili.io/JVb0h57.jpg" alt="aliya" border="0"/>
        
          
          <p className="card-text">The ordering process was smooth, and my package arrived quickly. The product exceeded my expectations, and I will be shopping here again.</p>
          <h5 className="card-title  text-secondary bordertopyellow">Pallavi Desai</h5>
          <h5 className="card-title job">CTO</h5>
          
        </div>
      </div>
    </div>
    <div className="col-sm-4 mb-3 mb-sm-0 ">
      <div className="card border-0 ">
        <div className="card-body d-flex flex-column align-items-center ">
        <img src="https://iili.io/JVb00WG.jpg" alt="akshay" border="0"/>
        
          
          <p className="card-text">I was hesitant to order online, but I'm so glad I did. The product arrived exactly as described, and I couldn't be happier with my purchase.</p>
          <h5 className="card-title text-secondary bordertopyellow">Akhnoor Khan</h5>
          <h5 className="card-title job">Product Manager</h5>
        </div>
      </div>
    </div>

    


    
    
  </div></div>
  )
}

export default Testimonial