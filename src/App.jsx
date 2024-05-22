import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Header from "./components/Header.jsx";
import ProductDetail from "./ProductDetail.jsx";
import AllProducts from "./AllProducts.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import UserDashboard from "./user/UserDashboard.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import { useContext, useEffect } from "react";
import { AppContext } from "./store/store.jsx";
import CartPage from "./user/CartPage.jsx";
import { Toaster } from "react-hot-toast";
import AdminProducts from "./admin/AdminProducts.jsx";
import AdminOrder from "./admin/AdminOrder.jsx";
import AdminUsers from "./admin/AdminUsers.jsx";
import AddProduct from "./admin/component/AddProduct.jsx";
import AddUser from "./admin/component/AddUser.jsx";
import UpdateProduct from "./admin/component/UpdateProduct.jsx";
import UpdateUser from "./admin/component/UpdateUser.jsx";
import Category from "./Category.jsx";
import Footer from "./components/Footer.jsx";
import ScrollTotop from "./ScrollTotop.jsx";



function App() {
  let { dispatch, loginUser } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: "GET-LOGIN-USER" });
  }, []);

  return (
    <>
      <BrowserRouter>
        <div
          className="alert alert-dismissible fade show fixed-bottom alertClass"
          role="alert"
          style={{ zIndex: "5000" }}
        >
          We use cookies on our website to enhance your browsing experience.
          These cookies are essential for the proper functioning of our site and
          help us understand how you use it. By continuing to browse the site,
          you agree to our use of cookies. You can manage your cookie
          preferences in your browser settings. For more information about how
          we use cookies, please see our Cookie Policy. Thank you for visiting
          our website!
          <button
            type="button"
            className="btn-close "
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productDetail/:productId" element={<ProductDetail />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard/" element={<AdminDashboard />}>
            <Route path="adminProducts" element={<AdminProducts />}></Route>
            <Route path="adminOrder" element={<AdminOrder />}></Route>
            <Route path="AdminUsers" element={<AdminUsers />}></Route>
          </Route>
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/updateProduct/:productId" element={<UpdateProduct />} />
          <Route path="/updateUser/:userId" element={<UpdateUser />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Toaster />
        <ScrollTotop/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
