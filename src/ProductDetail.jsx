import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css";
import { AppContext } from "./store/store";
import toast from "react-hot-toast";

const ProductDetail = () => {
  let  navigate = useNavigate()
  let { productId } = useParams();
  console.log(productId);
  let {loading,allProducts, dispatch, loginUser}= useContext(AppContext)
  let product = allProducts.filter((product) => productId == product.id);
  console.log(product)

 
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])

 

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="fa-regular fa-star fs-6"></i>);
    }
    return stars;
  };

  return (
    <>
      
      {product[0] && (
        <div className="productDetail px-3 d-flex align-items-center justify-content-center ">
          <div className="row h-100 w-100 py-5">
            <div className="col-sm-6 d-flex justify-content-center align-items-center">
              <img
                src={product[0].productImgUrl}
                alt={product[0].productTitle}
                className="img-fluid"
              />
            </div>
            <div className="col-sm-6 d-flex flex-column align-items-start justify-content-around ">
              <h2 className="mb-3">{product[0].productTitle}</h2>
              <div className="d-flex align-items-center justify-content-start star mb-2">
              {renderStars(product[0].productRating)}
               
              </div>
              <p className="price fs-3">
                <span className="rs" style={{ fontWeight: "900" }}>
                  ₹{" "}
                </span>
                <span
                  className=" "
                  style={{ textDecoration: "line-through" }}
                >{`${(product[0].productPrice * 1.1).toFixed(2)}  `}</span>
                {product[0].productPrice} /-
              </p>

              <p className="fw-bolder">{product[0].productQty > 0?<span className="text-success">Available</span>:<span className="text-danger">Out Of Stocks</span>}{product[0].productQty <= 2?<span className="text-success">(Only Few In Stocks)</span>:''}</p>

              <p className="desc mt-5 text-secondary">{product[0].productDesc}</p>
              <button className="btn btn-lg bluebtn w-100 "onClick={(e) => {
                          e.stopPropagation();
                          if (loginUser === null) {
                            toast.error(
                              "Plz Register/Login to Add the Product to cart"
                            );
                          } else {
                            dispatch({ type: "ADD-TO-CART", payload: product[0] });
                            navigate('/cart')
                          }
                        }}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
      
    </>
  );
};

export default ProductDetail;
