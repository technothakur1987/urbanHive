import React, { useContext, useState, useEffect } from 'react'
import './HomeProduct.css'
import { Link, useNavigate} from 'react-router-dom'
import { AppContext } from '../store/store'
import  Loader  from './Loader'
import toast from "react-hot-toast";


const HomeProduct = () => {
    let navigate = useNavigate()
    let {loading,allProducts,allFeatured, dispatch, loginUser} = useContext(AppContext)
    
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        // Shuffle the allFeatured array
        const shuffled = allFeatured.sort(() => 0.5 - Math.random());
        // Get sub-array of first 8 elements after shuffling
        const selected = shuffled.slice(0, 8);
        setFeaturedProducts(selected);
    }, [allFeatured]);

   
    
  return (
    

    loading ? <div className='' style={{minHeight:'15vh'}}><Loader/></div>
     :
     <div className='px-3 HomeProducts'>
    <h2>Our Best-Selling Products</h2>
    <div className="row row-cols-1 row-cols-md-4 g-4">
        {
            featuredProducts.map((product)=>{
                let{productTitle , productImgUrl, productPrice, id } = product
                return (
                    <div className="col text-decoration-none Liink" key={id} onClick={()=>{
                      navigate(`/productDetail/${product.id}`)
                    }} >
                    <div className="card h-100">
                      <img src={productImgUrl} className="card-img-top" alt={productTitle} style={{maxHeight:'25vh'}}/>
                      <div className="card-body">
                        <p className='logoname text-secondary'>URBAN-HIVE</p>
                        <h5 className="card-title text-uppercase">{productTitle.substring(0, 20)}</h5>
                        
                        <p className="card-text  fs-3"><span className="rs" style={{ fontWeight: "600" }}>
                  ₹{" "}
                </span>
                <span
                  className="fw-lighter "
                  style={{ textDecoration: "line-through" }}
                >{`${(productPrice * 1.1).toFixed(2)}  `}</span>
                {" "}{" "}{productPrice} /-</p>
                        <button className='btn btn-sm w-100 bluebtn' onClick={(e)=>{
                          e.stopPropagation(); 
                          if(!loginUser){
                            toast.error('Plz Register/Login to Add the Product to cart')
                          }else{
                            dispatch({type:'ADD-TO-CART',payload:product})
                            navigate('/cart')
                          }
                          
                        }}> Add To Cart </button>
                      </div>
                    </div>
                  </div>
                )
            })
        }


</div>
</div>
  
  )
}

export default HomeProduct