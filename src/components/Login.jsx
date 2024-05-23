import { React, useEffect, useState, useContext } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import toast from "react-hot-toast";
import { auth, fireDB } from "../firebase/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection } from "firebase/firestore";
import { AppContext } from "../store/store";
import { query, where, onSnapshot } from "firebase/firestore";




const Login = () => {

  let navigate = useNavigate()
  let { loading, dispatch } = useContext(AppContext);
  let [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  let handleOnChange = (e) => {
   
    if (e.target.name === "email") {
      setformdata({ ...formdata, email: e.target.value });
    }
    if (e.target.name === "password") {
      setformdata({ ...formdata, password: e.target.value });
    }
  };

  let handleSignupSubmit = async() => {
    console.log(formdata);
    // validation
    if (
      formdata.email === "" ||
      formdata.password === ""
    ) {
      return toast.error("All Fields are required");
    }

    dispatch({type:'LOADER-TRUE'})

    try {
      console.log(formdata)
      
      //creating user with signWithEmailAndPasword (auth, email and password)
      const users = await signInWithEmailAndPassword(
        auth,
        formdata.email,
        formdata.password
      );
      console.log(users.user.email)

      const q = query(
        collection(fireDB, "users"),
        where('email', '==', users?.user?.email)
    );

    const data = onSnapshot(q, (QuerySnapshot) => {
      let users;
      QuerySnapshot.forEach((doc) => users = doc.data());
      console.log(users)
      localStorage.removeItem('user');
      localStorage.setItem("user", JSON.stringify(users) )
    

      setformdata({...formdata, email: "",
      password: ""})
      toast.success("Login Successfully");
      dispatch({type:'LOADER-FALSE'})
      if(users.role === "user") {
       
          navigate('/user-dashboard');
      }else{
          
         
          navigate('/admin-dashboard/adminProducts');
      }
  });
  return () => data;

      

    } catch (error) {
      console.log(error);
      console.log(error.message)
       dispatch({ type: "LOADER-FALSE" });
       toast.error("Sign up Failed. Please try again.");
       setformdata({...formdata, email: "",
      password: ""})
    }

  };

  
  return (
    <div className="Login d-flex justify-content-center align-items-center ">


      {
        loading ?
        
        (
          <>
          <Loader/>
          <div className="centerLogin  p-5 rounded d-flex justify-content-center align-items-center">
        <form
          action=""
          className="w-100 h-100  "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h2 className="mb-2 text-uppercase">Login </h2>

          <div className="w-100 py-2 ">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-100"
              autoComplete="off"
              value={formdata.email}
              onChange={handleOnChange}
            />
          </div>
          <div className="w-100 py-2 ">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-100"
              value={formdata.password}
              onChange={handleOnChange}
            />
          </div>
          <button
            className="my-3 yellowbtn text-capitalize"
            onClick={handleSignupSubmit}
          >
            Login here !
          </button>

          <h6>
            Don't have an account{" "}
            <Link to="/signup" className="sideLink">
              Sign up
            </Link>
          </h6>
        </form>
      </div>
          </>
        )
        :(<div className="centerLogin  p-5 rounded d-flex justify-content-center align-items-center">
        <form
          action=""
          className="w-100 h-100  "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h2 className="mb-2 text-uppercase">Login </h2>

          <div className="w-100 py-2 ">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-100"
              autoComplete="off"
              value={formdata.email}
              onChange={handleOnChange}
            />
          </div>
          <div className="w-100 py-2 ">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-100"
              value={formdata.password}
              onChange={handleOnChange}
            />
          </div>
          <button
            className="my-3 yellowbtn text-capitalize"
            onClick={handleSignupSubmit}
          >
            Login here !
          </button>

          <h6>
            Don't have an account{" "}
            <Link to="/signup" className="sideLink">
              Sign up
            </Link>
          </h6>
        </form>
      </div>)
      }
      
    </div>
  );
};

export default Login;
