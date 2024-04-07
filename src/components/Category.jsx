import React from 'react'
import './Category.css'
import { Link } from 'react-router-dom'


const Category = () => {

    const category = [
        {
            image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
            name: 'fashion'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
            name: 'shirt'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
            name: 'jacket'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
            name: 'mobile'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
            name: 'laptop'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
            name: 'shoes'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
            name: 'home'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
            name: 'books'
        }
    ]
  return (
    <div className='px-3 category  d-flex align-items-center justify-content-between py-5 nopxmq'>
        <ul className='list-unstyled  d-flex align-items-center justify-content-between category-Ul ' >
            {
               category.map((item, index)=>{
                return (
                    <li key={index}>
                  <Link to='/' className='d-flex flex-column align-items-center justify-content-center text-decoration-none '> 
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