import React, { useContext } from 'react'
import { AppContext } from '../store/store'


const CartPage = () => {
  let {loading,loginUser}= useContext(AppContext)
  console.log(loginUser)
  return (
    <div>CartPage</div>
  )
}

export default CartPage