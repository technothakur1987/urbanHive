
  import './App.css'
  import { BrowserRouter, Routes ,Route} from "react-router-dom";
  import Home from './Home.jsx'
  import ErrorPage from './ErrorPage.jsx'
  import Header from './components/Header.jsx'
  import ProductDetail from './ProductDetail.jsx';
  import AllProducts from './AllProducts.jsx'
  import Signup from './components/Signup.jsx';
  import Login from './components/Login.jsx';
  import UserDashboard from './user/UserDashboard.jsx'
  import AdminDashboard from './admin/AdminDashboard.jsx'
import { useContext, useEffect } from 'react';
import { AppContext } from './store/store.jsx';
import CartPage from './user/CartPage.jsx';
import { Toaster } from 'react-hot-toast';
import AdminProducts from './admin/AdminProducts.jsx';
import AdminOrder from './admin/AdminOrder.jsx';
import AdminUsers from './admin/AdminUsers.jsx';
import AddProduct from './admin/component/AddProduct.jsx';
import UpdateProduct from './admin/component/UpdateProduct.jsx';



 
  









  function App() {

   let { dispatch, loginUser} = useContext(AppContext)
    

    useEffect(()=>{
      
      dispatch({type:'GET-LOGIN-USER'})
     
    },[])
    
   

    
      
    
    

  
    return (
      <>
        <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/productDetail/:productId' element={<ProductDetail />} />
          <Route path='/allproducts' element={<AllProducts/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/user-dashboard' element={<UserDashboard/>}/>
          <Route path='/admin-dashboard/' element={<AdminDashboard/>}>

            <Route path='adminProducts' element={<AdminProducts/>}></Route>
            <Route path='adminOrder' element={<AdminOrder/>}></Route>
            <Route path='AdminUsers' element={<AdminUsers/>}></Route>
            
          </Route>
          <Route path='/addProduct' element={<AddProduct/>}/>
          <Route path='/updateProduct/:productId' element={<UpdateProduct/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/*' element={<ErrorPage/>}/>
          
        </Routes>
        <Toaster/>
        
        </BrowserRouter>
      </>
    )
  }

  export default App
