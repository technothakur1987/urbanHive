import { React, useContext, useEffect, useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../store/store";
import Loader from "./Loader";
import toast from "react-hot-toast";
import { auth, fireDB } from "../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Timestamp, addDoc, collection } from "firebase/firestore";





const Signup = () => {

  console.log(auth)

  let navigate = useNavigate()
  let { loading, dispatch } = useContext(AppContext);
  let [formdata, setformdata] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "user",
    id: "",
    time:'',
    date:''
  });

  let handleOnChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === "fullName") {
      setformdata({ ...formdata, fullname: e.target.value, id: uuidv4() });
    }
    if (e.target.name === "email") {
      setformdata({ ...formdata, email: e.target.value, id: uuidv4() });
    }
    if (e.target.name === "password") {
      setformdata({ ...formdata, password: e.target.value, id: uuidv4() });
    }
  };

  

  let userSignUp = async () => {
    
    console.log(formdata);
    // validation
    if (
      formdata.email === "" ||
      formdata.fullname === "" ||
      formdata.password === ""
    ) {
      return toast.error("All Fields are required");
    }

    dispatch({type:'LOADER-TRUE'})

    try {
      console.log(formdata)
      
      //creating user with signWithEmailAndPasword (auth, email and password)
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formdata.email,
        formdata.password
      );  

      //creating userobject which will be inserted in database
      let user = {
        fullname: formdata.fullname,
        email: formdata.email,
        address:' ',
        phone: ' ',
        postalCode:' ',
        panCard:'',
        password: formdata.password,
        role: "user",
        id: formdata.id,
        time:Timestamp.now(),
        date: new Date().toLocaleString(
          "en-US",
          {
              month: "short",
              day: "2-digit",
              year: "numeric",
          }
      )
      }

      //creating a user refrence where collection(fireDb , 'collectionname')
      let userReference = collection(fireDB,'users')

      //Add User Deatils
      //addDoc(userrefence, object to be stored)
      addDoc(userReference, user)

      /*when the user is inputted in database then we will clear all the input and setFormdata to initial value */
      setformdata({...formdata,
        fullname: "",
        email: "",
        password: "",
        role: "user",
        id: "",
      })


      //then hiding the loader and a success message and then divert to login page 
      dispatch({type:'LOADER-FALSE'})
      toast.success("Sign up Sucessful !")
      navigate('/login')

    } catch (error) {
      console.log(error);
      console.log(error.message)
       dispatch({ type: "LOADER-FALSE" });
       toast.error("Sign up Failed. Please try again.");
    }
  };

  useEffect(() => {
    console.log(formdata);
  }, [formdata]);
  return (
    <div className="signup d-flex justify-content-center align-items-center ">
      {loading ? (
        <>
          <Loader />
          <div className="centerSignup  p-5 rounded d-flex justify-content-center align-items-center">
            <form
              action=""
              className="w-100 h-100  "
              onSubmit={(e) => {
                e.preventDefault();
                
              }}
            >
              <h2 className="mb-2 text-uppercase">Sign-up</h2>
              <div className="w-100 py-2 ">
                <label htmlFor="fullName"></label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-100"
                  value={formdata.fullname}
                  onChange={handleOnChange}
                />
              </div>
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
                onClick={userSignUp}
              >
                Sign up here !
              </button>

              <h6>
                Have an account{" "}
                <Link to="/login" className="sideLink">
                  Login
                </Link>
              </h6>
            </form>
          </div>
        </>
      ) : (
        <div className="centerSignup  p-5 rounded d-flex justify-content-center align-items-center">
          <form
            action=""
            className="w-100 h-100  "
            onSubmit={(e) => {
              e.preventDefault();
              
            }}
          >
            <h2 className="mb-2 text-uppercase">Sign-up</h2>
            <div className="w-100 py-2 ">
              <label htmlFor="fullName"></label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                className="w-100"
                value={formdata.fullname}
                onChange={handleOnChange}
              />
            </div>
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
              onClick={userSignUp}
            >
              Sign up here !
            </button>

            <h6>
              Have an account{" "}
              <Link to="/login" className="sideLink">
                Login
              </Link>
            </h6>
          </form>
        </div>
      )}
    </div>
  );
};

export default Signup;
