import React, { useContext } from 'react';
import { AppContext } from '../store/store';
import './CartPage.css';
import Loader from '../components/Loader';

const CartPage = () => {
  const { loading, loginUser, allCart, dispatch } = useContext(AppContext);
  console.log(allCart, loading);

  const increment = (id) => {
    console.log("increment", id);
    dispatch({ type: "INCREMENT", payload: id });
  };

  const decrement = (id) => {
    console.log("decrement", id);
    dispatch({ type: "DECREMENT", payload: id });
  };

  const remove = (id) => {
    console.log("remove", id);
    dispatch({ type: "REMOVE", payload: id });
  };


  const calculateTotalPrice = () => {
    return allCart.reduce((total, item) => total + item.productPrice * item.productQty, 0);
  };

  const totalPrice = calculateTotalPrice();
  const deliveryCharge = totalPrice > 1000 ? 0 : Math.round(totalPrice * 0.1);
  const finalPrice = totalPrice + deliveryCharge;

  return (
    loading ? <Loader /> : (
      <div className='cartPage px-3'>
        <h3 className='mt-3 mb-3'>Shopping Cart</h3>
        <div className="row">
          <div className="col-sm-8">
            {allCart.length === 0 ? (
              <div className='noitems p-5'>
                      <h1>No Items in Cart, Plz Add Some.</h1>
              </div>
              
            ) : (
              allCart.map((cartItem) => {
                const { id, productCategory, productImgUrl, productPrice, productQty, productTitle } = cartItem;
                return (
                  <div className="cartCard mb-4" key={id}>
                    <div className="topcart d-flex">
                      <div className='cartImg w-25 d-flex justify-content-center align-items-center p-1'>
                        <img src={productImgUrl} alt={productTitle} className='img-fluid'/>
                      </div>
                      <div className="cartDetails w-75">
                        <p className='text-uppercase productname'>{productTitle}</p>
                        <p className='productCatPrice'>
                          <span>{productCategory}</span>
                          <span className='ms-5'>Rs {productPrice * productQty} /-</span>
                        </p>
                      </div>
                    </div>
                    <div className="bottomcart d-flex">
                      <div className='qtyBtnDiv w-25 d-flex justify-content-center py-1'>
                        <button className='w-25 border-0 bg-transparent' onClick={() => decrement(id)}>
                          <i className="fas fa-minus"></i>
                        </button>
                        <span className='w-25 text-center'>{productQty}</span>
                        <button className='w-25 border-0 bg-transparent' onClick={() => increment(id)}>
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <div className='rmvBtnDiv w-75'>
                        <button className='border-0 bg-transparent text-danger' onClick={() => remove(id)}>
                          <i className="fa-solid fa-trash me-2 text-danger"></i>Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="col-sm-4">
            <h4 className='priceDetailsHeading'>Price Details</h4>
            <hr />
            <div className='totalprice'>
              <p className='text-uppercase text-end '>Price ({allCart.length} items):<span className='ss ms-3'>Rs {totalPrice} /-</span></p>
              <p className='text-uppercase text-end'>Delivery :<span className='ss ms-3'>Rs {deliveryCharge} /-</span></p>
              <p className='text-uppercase text-end'>Total :<span className='ss ms-3'>Rs {finalPrice} /-</span></p>
              <button className='bluebtn border-0 px-5 py-2 mt-3 rounded float-end mqbuybtn'>BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default CartPage;
