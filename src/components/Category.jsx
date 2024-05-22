import React, { useContext } from 'react'
import './Category.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../store/store'


const Category = () => {
    let { allcategories } = useContext(AppContext)

   
  return (
    <div className='px-3 category  d-flex align-items-center justify-content-between py-5 nopxmq'>
        <ul className='list-unstyled  d-flex align-items-center justify-content-between category-Ul ' >
            {
               allcategories.map((item, index)=>{
                return (
                    <li key={index}>
                  <Link to={`/category/${item.name}`} className='d-flex flex-column align-items-center justify-content-center text-decoration-none '> 
                    <span className='d-block yellow-bg d-flex  justify-content-center align-items-center rounded-circle'>
                        <img src={item.image} alt={item.name} className='img-fluid'/>
                    </span>
                    <span className='d-block text-center bluetext fs-5'>{item.name}</span>
                  </Link></li>
                )
               }) 
            }
           
        </ul>
    </div>
  )
}

export default Category