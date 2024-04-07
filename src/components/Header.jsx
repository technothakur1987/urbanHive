import {React,useEffect} from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import { AppContext } from "../store/store";
import { reducer } from "../store/reducer";


const Header = () => {
  
  let { loading, loginUser,dispatch} = useContext(AppContext);
  
  console.log(loading);
  console.log(loginUser);

  useEffect(()=>{
      
    dispatch({type:'GET-LOGIN-USER'})
   
  },[])
  return (
    
    <div className="header fixed-top px-3">
      <div className="row h-100">
        <div className=" mqjustify-content-center col-sm-2 d-flex justify-content-start align-items-center  ">
          <NavLink
            to="/"
            className="text-decoration-none mqjustify-content-center"
          >
            <div className="logoDiv">
              <h3 className="mb-0">URBAN-HIVE</h3>
            </div>
          </NavLink>
        </div>
        <div className="col-sm-8 d-flex justify-content-center align-items-center ">
          <ul className=" d-flex align-items-center justify-content-center  list-unstyled w-100 mb-0 h-100 gapul mqul">
            <li>
              <NavLink to="/" className="Navlink">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/allproducts" className="Navlink">
                Products
              </NavLink>
            </li>

            {
              // when no user is logiined , its shows signup and login btn
              loginUser === null ? (
                <>
                  {" "}
                  <li>
                    <NavLink to="/signup" className="Navlink">
                      Signup
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className="Navlink">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                ""
              )
            }

            {
              //when admin is login we show admindashboard and logout

              loginUser !== null && loginUser.role === "admin" ? (
                <>
                  {" "}
                  <li>
                    <NavLink to="/signup" className="Navlink">
                      Signup
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin-dashboard/adminProducts" className="Navlink">Admin</NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="Navlink" onClick={()=>{dispatch({type:'LOG-OUT'})}}>LogOut</NavLink>
                  </li>
                </>
              ) : (
                ""
              )
            }

            {
              //when user is login we show userdashboard and logout

              loginUser !== null && loginUser.role === "user" ? (
                <>
                  
                  <li>
                    <NavLink to="/signup" className="Navlink">
                      Signup
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/user-dashboard" className="Navlink text-capitalize">
                      {`${loginUser.fullname}`}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="Navlink" onClick={()=>{dispatch({type:'LOG-OUT'})}}>LogOut</NavLink>
                  </li>
                  <li>
              <NavLink to="/cart" className="Navlink">
                Cart(0)
              </NavLink>
            </li>
                </>
              ) : (
                ""
              )
            }

            
          </ul>
        </div>
        <div className="col-sm-2 d-flex justify-content-center align-items-center">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
