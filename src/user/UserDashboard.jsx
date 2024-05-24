  import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../store/store'
import Login from '../components/Login'




const UserDashboard = () => {

  let { loginUser ,dispatch} = useContext(AppContext);
  useEffect(()=>{
      
    dispatch({type:'GET-LOGIN-USER'})
   
  },[])

 
   

  

 
  return (
   <>
   

{loginUser ? (
        <>
         
   <div className='userdashboard py-5' style={{minHeight:'100vh'}}>
    <h1 className='my-5 py-5'>this is user dashboard</h1>

   </div>
   
        </>
      ) : (
        <Login/>
      )}
   </>
  )
}

export default UserDashboard