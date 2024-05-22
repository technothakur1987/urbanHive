import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../store/store";
import { useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import Loader from "../../components/Loader";
import toast from "react-hot-toast";
import { auth,fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";


const addUser = () => {
  let navigate = useNavigate();
  let { loading, dispatch } = useContext(AppContext);
  let [formdata, setformdata] = useState({
    userTitle: "",
    userEmail: "",
    userPassword: "",
    userRole: "",
    id: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  let handleOnChange = (e) => {
    console.log(e.target.name);

    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value, id: uuidv4() });
  };

  useEffect(() => {
    console.log(formdata);
  }, [formdata]);

  let addUser = async () => {
    console.log(formdata);
    // validation
    if (
      formdata.userEmail === "" ||
      formdata.userTitle === "" ||
      formdata.userPassword === "" ||
      formdata.userRole === ""
    ) {
      return toast.error("All Fields are required");
    }

    dispatch({ type: "LOADER-TRUE" });
    try {
      console.log(formdata);

      //creating user with signWithEmailAndPasword (auth, email and password)
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formdata.userEmail,
        formdata.userPassword
      );

      //creating userobject which will be inserted in database
      let user = {
        fullname: formdata.userTitle,
        email: formdata.userEmail,
        password: formdata.userPassword,
        role: formdata.userRole,
        id: formdata.id,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      //creating a user refrence where collection(fireDb , 'collectionname')
      let userReference = collection(fireDB, "users");

      //Add User Deatils
      //addDoc(userrefence, object to be stored)
      addDoc(userReference, user);

      /*when the user is inputted in database then we will clear all the input and setFormdata to initial value */
      setformdata({
        ...formdata,
        userTitle: "",
        userEmail: "",
        userPassword: "",
        userRole: "",
      });

      //then hiding the loader and a success message and then divert to login page
      dispatch({ type: "LOADER-FALSE" });
      toast.success("New User Registered!");
      navigate('/admin-dashboard/AdminUsers')
    } catch (error) {
      console.log(error);
      console.log(error.message);
      dispatch({ type: "LOADER-FALSE" });
      toast.error("New Registration Failed . Please try again.");
      navigate('/admin-dashboard/AdminUsers')
    }
   //useNavigate('/admin-dashboard/AdminUsers')
  };
  return (
    <div>
      {" "}
      <div className="signup d-flex justify-content-center align-items-center addproduct">
        {loading ? (
          <>
            <Loader />
            <div className="centerSignup  p-5 rounded d-flex justify-content-center align-items-center addProductcenterSignup">
              <form
                action=""
                className="w-100 h-100  "
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <h2 className="mb-2 text-uppercase">Add User </h2>

                <div className="row">
                  <div className=" col-12 py-2 ">
                    <label htmlFor="userTitle"></label>
                    <input
                      type="text"
                      id="userTitle"
                      name="userTitle"
                      placeholder="User Title"
                      className="w-100"
                      value={formdata.userTitle}
                      onChange={handleOnChange}
                    />
                  </div>

                  <div className="col-12 py-2 ">
                    <label htmlFor="userEmail"></label>
                    <input
                      type="email"
                      id="userEmail"
                      name="userEmail"
                      placeholder="User Email"
                      className="w-100"
                      autoComplete="off"
                      value={formdata.userEmail}
                      onChange={handleOnChange}
                    />
                  </div>

                  <div className="col-12 py-2 ">
                    <label htmlFor="userPassword"></label>
                    <input
                      type="password"
                      id="userPassword"
                      name="userPassword"
                      placeholder="Password"
                      className="w-100"
                      autoComplete="off"
                      value={formdata.userPassword}
                      onChange={handleOnChange}
                    />
                  </div>

                  <div className="col-12 py-2 ">
                    <select
                      name="userRole"
                      id="userRole"
                      className="w-100 categorySelect "
                      value={formdata.userRole}
                      onChange={handleOnChange}
                    >
                      <option value="">User Role</option>
                      <option className=" comOption" value="admin">
                        Admin
                      </option>
                      <option className=" comOption" value="user">
                        User
                      </option>
                    </select>
                  </div>
                </div>

                <button
                  className="my-3 yellowbtn text-capitalize"
                  onClick={addUser}
                >
                  Add User !
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="centerSignup  p-5 rounded d-flex justify-content-center align-items-center addProductcenterSignup">
            <form
              action=""
              className="w-100 h-100  "
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h2 className="mb-2 text-uppercase">Add User </h2>

              <div className="row">
                <div className=" col-12 py-2 ">
                  <label htmlFor="userTitle"></label>
                  <input
                    type="text"
                    id="userTitle"
                    name="userTitle"
                    placeholder="User Title"
                    className="w-100"
                    value={formdata.userTitle}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="col-12 py-2 ">
                  <label htmlFor="userEmail"></label>
                  <input
                    type="email"
                    id="userEmail"
                    name="userEmail"
                    placeholder="User Email"
                    className="w-100"
                    autoComplete="off"
                    value={formdata.userEmail}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="col-12 py-2 ">
                  <label htmlFor="userPassword"></label>
                  <input
                    type="password"
                    id="userPassword"
                    name="userPassword"
                    placeholder="Password"
                    className="w-100"
                    autoComplete="off"
                    value={formdata.userPassword}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="col-12 py-2 ">
                  <select
                    name="userRole"
                    id="userRole"
                    className="w-100 categorySelect "
                    value={formdata.userRole}
                    onChange={handleOnChange}
                  >
                    <option value="">User Role</option>
                    <option className=" comOption" value="admin">
                      Admin
                    </option>
                    <option className=" comOption" value="user">
                      User
                    </option>
                  </select>
                </div>
              </div>

              <button
                className="my-3 yellowbtn text-capitalize"
                onClick={addUser}
              >
                Add User !
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default addUser;
