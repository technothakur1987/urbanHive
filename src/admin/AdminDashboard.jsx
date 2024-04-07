import React, { useContext, useEffect } from 'react';
import './AdminDashboard.css';
import userimg from '../assets/user2.png';
import { AppContext } from '../store/store';
import Login from '../components/Login'
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  
  let { loginUser ,dispatch} = useContext(AppContext);
  useEffect(()=>{
      
    dispatch({type:'GET-LOGIN-USER'})
   
  },[])
 
  

 

  return (
    <>
      {loginUser ? (
        <>
          <div className="admin-header mx-3 my-3">
            <h2 className='text-uppercase'>Admin Dashboard</h2>
          </div>

          <div className="admindashboard mx-3 my-3">
            <div className="adminDetails d-flex flex-column align-items-center justify-content-between py-3">
              <div className="userimage-wrapper mb-3 rounded-circle">
                <img src={userimg} alt="" className="img-fluid rounded-circle" />
              </div>
              <h6 className='text-center'>Name : <span className='text-capitalize'>{loginUser.fullname}</span></h6>
              <h6 className='text-center'>Email : <span className=''>{loginUser.email}</span></h6>
            </div>
            <div className='adminOptions '>

              <div className='adminLinksSection d-flex  align-items-center justify-content-around my-3'>
                <Link to='adminProducts' className='adminLinks d-flex flex-column justify-content-center align-items-center text-decoration-none py-2'>
                  <i className="fa-solid fa-basket-shopping fs-1 "></i>
                  <h3 className='mb-0  fw-bolder'>10</h3>
                  <h5>Total Products</h5>
                  </Link>
                <Link to='adminOrder' className='adminLinks d-flex  flex-column justify-content-center align-items-center text-decoration-none py-2'> <i className="fa-solid fa-list-check fs-1 "></i>
                  <h3 className='mb-0  fw-bolder'>50</h3>
                  <h5>Total Orders</h5></Link>
                <Link to='adminCart' className='adminLinks d-flex  flex-column justify-content-center align-items-center text-decoration-none py-2'> <i className="fa-solid fa-users fs-1 "></i>
                  <h3 className='mb-0  fw-bolder'>112</h3>
                  <h5>Total Users</h5></Link>
                
              </div>


              <Outlet/>
            </div>
          </div>
         
        </>
      ) : (
        <Login/>
      )}
    </>
  );
};

export default AdminDashboard;
